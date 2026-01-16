#!/bin/bash
# ===========================================
# DroneAgri.pl - Script de Monitoreo Automático
# ===========================================

# Configuración
APP_NAME="droneagri"
SITE_URL="https://droneagri.pl"
LOG_FILE="/var/log/droneagri-monitor.log"
MAX_MEMORY_MB=500
MAX_RESTARTS=5

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Función para verificar si PM2 está corriendo
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR: PM2 no está instalado"
        return 1
    fi
    return 0
}

# Función para verificar el estado del proceso
check_process() {
    local status=$(pm2 jlist | jq -r ".[] | select(.name==\"$APP_NAME\") | .pm2_env.status")

    if [ "$status" == "online" ]; then
        echo -e "${GREEN}✓${NC} Proceso $APP_NAME está ONLINE"
        return 0
    else
        echo -e "${RED}✗${NC} Proceso $APP_NAME está $status"
        log "WARNING: Proceso $APP_NAME no está online (status: $status)"
        return 1
    fi
}

# Función para verificar respuesta HTTP
check_http() {
    local http_code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$SITE_URL")

    if [ "$http_code" == "200" ] || [ "$http_code" == "302" ] || [ "$http_code" == "307" ] || [ "$http_code" == "301" ]; then
        echo -e "${GREEN}✓${NC} Sitio web responde (HTTP $http_code)"
        return 0
    else
        echo -e "${RED}✗${NC} Sitio web no responde correctamente (HTTP $http_code)"
        log "ERROR: Sitio no responde - HTTP $http_code"
        return 1
    fi
}

# Función para verificar uso de memoria
check_memory() {
    local memory=$(pm2 jlist | jq -r ".[] | select(.name==\"$APP_NAME\") | .monit.memory")
    local memory_mb=$((memory / 1024 / 1024))

    if [ "$memory_mb" -lt "$MAX_MEMORY_MB" ]; then
        echo -e "${GREEN}✓${NC} Uso de memoria: ${memory_mb}MB (límite: ${MAX_MEMORY_MB}MB)"
        return 0
    else
        echo -e "${YELLOW}⚠${NC} Uso de memoria alto: ${memory_mb}MB (límite: ${MAX_MEMORY_MB}MB)"
        log "WARNING: Uso de memoria alto - ${memory_mb}MB"
        return 1
    fi
}

# Función para verificar número de reinicios
check_restarts() {
    local restarts=$(pm2 jlist | jq -r ".[] | select(.name==\"$APP_NAME\") | .pm2_env.restart_time")

    if [ "$restarts" -lt "$MAX_RESTARTS" ]; then
        echo -e "${GREEN}✓${NC} Reinicios: $restarts (límite: $MAX_RESTARTS)"
        return 0
    else
        echo -e "${YELLOW}⚠${NC} Muchos reinicios: $restarts (límite: $MAX_RESTARTS)"
        log "WARNING: Muchos reinicios - $restarts"
        return 1
    fi
}

# Función para reiniciar el proceso
restart_process() {
    log "INFO: Reiniciando proceso $APP_NAME..."

    # Matar procesos huérfanos en el puerto 3000
    fuser -k 3000/tcp 2>/dev/null
    sleep 2

    # Reiniciar con PM2
    pm2 restart "$APP_NAME"
    sleep 5

    # Verificar si el reinicio fue exitoso
    if check_process && check_http; then
        log "SUCCESS: Proceso reiniciado correctamente"
        return 0
    else
        log "ERROR: Fallo al reiniciar el proceso"
        return 1
    fi
}

# Función para limpiar logs antiguos
clean_logs() {
    pm2 flush "$APP_NAME"
    log "INFO: Logs limpiados"
}

# Función para mostrar estadísticas
show_stats() {
    echo ""
    echo "=========================================="
    echo "  DroneAgri.pl - Estado del Sistema"
    echo "=========================================="
    echo ""

    # Info del proceso
    pm2 jlist | jq -r ".[] | select(.name==\"$APP_NAME\") | \"Proceso: \(.name)\nPID: \(.pid)\nUptime: \(.pm2_env.pm_uptime | . / 1000 | strftime(\"%Hh %Mm\"))\nMemoria: \(.monit.memory / 1024 / 1024 | floor)MB\nCPU: \(.monit.cpu)%\nReinicios: \(.pm2_env.restart_time)\""

    echo ""
    echo "=========================================="
}

# Función principal de monitoreo
monitor() {
    echo ""
    echo "🔍 Iniciando monitoreo de DroneAgri.pl..."
    echo ""

    local errors=0

    # Verificar PM2
    if ! check_pm2; then
        exit 1
    fi

    # Verificar proceso
    if ! check_process; then
        ((errors++))
    fi

    # Verificar HTTP
    if ! check_http; then
        ((errors++))
    fi

    # Verificar memoria
    check_memory

    # Verificar reinicios
    check_restarts

    echo ""

    # Si hay errores críticos, intentar reiniciar
    if [ "$errors" -gt 0 ]; then
        echo -e "${YELLOW}⚠ Se detectaron $errors errores. Intentando reiniciar...${NC}"
        restart_process
    else
        echo -e "${GREEN}✓ Todo funcionando correctamente${NC}"
    fi

    echo ""
}

# Función para modo watch (monitoreo continuo)
watch_mode() {
    local interval=${1:-60}
    log "INFO: Iniciando modo watch con intervalo de ${interval}s"

    while true; do
        clear
        monitor
        echo ""
        echo "Próxima verificación en ${interval} segundos... (Ctrl+C para salir)"
        sleep "$interval"
    done
}

# Función para configurar cron job
setup_cron() {
    local script_path=$(realpath "$0")
    local cron_job="*/5 * * * * $script_path --check >> /var/log/droneagri-monitor.log 2>&1"

    # Verificar si ya existe
    if crontab -l 2>/dev/null | grep -q "droneagri-monitor"; then
        echo "Cron job ya existe"
    else
        (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
        echo "Cron job configurado: cada 5 minutos"
    fi
}

# Función de ayuda
show_help() {
    echo ""
    echo "DroneAgri.pl - Script de Monitoreo"
    echo ""
    echo "Uso: $0 [opción]"
    echo ""
    echo "Opciones:"
    echo "  --check, -c     Ejecutar verificación completa"
    echo "  --status, -s    Mostrar estadísticas del sistema"
    echo "  --restart, -r   Reiniciar el proceso"
    echo "  --watch, -w     Modo monitoreo continuo (cada 60s)"
    echo "  --watch=N       Modo monitoreo con intervalo personalizado"
    echo "  --clean         Limpiar logs de PM2"
    echo "  --setup-cron    Configurar cron job automático"
    echo "  --help, -h      Mostrar esta ayuda"
    echo ""
}

# Procesar argumentos
case "$1" in
    --check|-c)
        monitor
        ;;
    --status|-s)
        show_stats
        ;;
    --restart|-r)
        restart_process
        ;;
    --watch|-w)
        watch_mode 60
        ;;
    --watch=*)
        interval="${1#*=}"
        watch_mode "$interval"
        ;;
    --clean)
        clean_logs
        ;;
    --setup-cron)
        setup_cron
        ;;
    --help|-h)
        show_help
        ;;
    *)
        monitor
        ;;
esac
