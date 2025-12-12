# Redis - Psyness

Base de datos en memoria para Psyness.

## Estructura de Datos

### Doctores/Personas
```
HSET doctor:{persona} nombre precio disponible
```
- `doctor:zen`
- `doctor:profesional`
- `doctor:amigo`

### Usuarios
```
SET usuario:{userId}:saldo {amount}
HSET usuario:{userId}:perfil nombre email plan
```

### Sesiones
```
HSET sesion:{sessionId} usuario persona inicio fin estado duracion
```

### Emociones Detectadas
```
ZADD emociones:{userId} {timestamp} {emocion}
```
Permite obtener historial de emociones ordenado por tiempo.

### Entornos Virtuales (Cache)
```
HSET entorno:{tipo} descripcion url persona timestamp
```

### Citas
```
ZADD citas:{userId} {timestamp} cita:{citaId}
HSET cita:{citaId} fecha persona estado notas
```

## Instalación

```bash
# TODO: Instrucciones de instalación de Redis
# Windows: descargar desde https://redis.io/download
# Linux: sudo apt-get install redis-server
```

## Configuración

```bash
# TODO: Configuración básica de Redis
redis-server --requirepass TODO_PASSWORD
```

## Seed Data

Cargar datos iniciales:

```bash
redis-cli < seed_data.redis
```

## Comandos Útiles

```bash
# Conectar a Redis
redis-cli

# Ver todas las keys
KEYS *

# Ver datos de un doctor
HGETALL doctor:zen

# Ver saldo de usuario
GET usuario:demo:saldo

# Ver historial de emociones
ZRANGE emociones:demo 0 -1 WITHSCORES

# Limpiar base de datos (¡CUIDADO!)
FLUSHDB
```

## Persistencia

TODO: Configurar persistencia en `redis.conf`:
- RDB snapshots
- AOF (Append Only File)

## Monitoreo

```bash
# Ver comandos en tiempo real
redis-cli MONITOR

# Estadísticas
redis-cli INFO
```

## Seguridad

- [ ] TODO: Configurar password
- [ ] TODO: Configurar bind address
- [ ] TODO: Habilitar SSL/TLS
- [ ] TODO: Configurar ACL
