# Psyness Backend

Backend de Psyness basado en n8n como orquestador y Redis como base de datos.

## Componentes

### n8n (Orquestador)
Workflows de automatización que manejan:
- Gestión de citas
- Evaluación de tono emocional
- Generación de entornos virtuales

Ver [n8n/README.md](./n8n/README.md) para más detalles.

### Redis (Base de Datos)
Base de datos en memoria para:
- Datos de usuarios
- Sesiones activas
- Historial de emociones
- Cache de entornos
- Gestión de citas

Ver [redis/README.md](./redis/README.md) para más detalles.

## Arquitectura

```
Frontend (React) 
    ↓ HTTP/WebSocket
n8n Workflows
    ↓ Queries
Redis Database
```

## Instalación

```bash
# TODO: Script de instalación completa
# Instalar n8n
npm install -g n8n

# Instalar Redis
# Ver instrucciones en redis/README.md
```

## Configuración

1. Configurar n8n (ver n8n/README.md)
2. Configurar Redis (ver redis/README.md)
3. Importar workflows en n8n
4. Cargar seed data en Redis

## Ejecución

```bash
# Iniciar Redis
redis-server

# Iniciar n8n
n8n start
```

## Endpoints

### Webhooks de n8n

- `POST /webhook/gestionar-cita` - Gestión de citas
- `POST /webhook/evaluar-tono` - Análisis emocional
- `POST /webhook/generar-entorno` - Generación de entornos

## Variables de Entorno

```bash
# n8n
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=TODO
N8N_BASIC_AUTH_PASSWORD=TODO
WEBHOOK_URL=http://localhost:5678/webhook/

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=TODO
```

## TODO

- [ ] Implementar workflows completos en n8n
- [ ] Configurar persistencia de Redis
- [ ] Añadir autenticación a webhooks
- [ ] Implementar rate limiting
- [ ] Añadir logging y monitoreo
- [ ] Configurar backups automáticos
- [ ] Documentar APIs completas
