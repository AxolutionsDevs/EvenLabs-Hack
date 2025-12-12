# n8n Workflows - Psyness

Workflows de automatización para el backend de Psyness.

## Workflows

### 1. gestionar_cita.json
**Propósito**: Gestiona las citas del usuario (crear, modificar, cancelar)

**Flujo**:
1. Recibe webhook desde ElevenLabs
2. Valida datos de la cita
3. Consulta disponibilidad en Redis
4. Crea/actualiza la cita
5. Responde confirmación

**Endpoints**:
- `POST /webhook/gestionar-cita`

**TODO**:
- [ ] Configurar conexión a Redis
- [ ] Implementar validación de datos
- [ ] Añadir notificaciones por email
- [ ] Implementar lógica de disponibilidad

---

### 2. evaluar_tono_emocional.json
**Propósito**: Analiza el tono emocional de la conversación

**Flujo**:
1. Recibe transcripción de la conversación
2. Analiza sentimiento con IA
3. Guarda resultado en Redis
4. Retorna emoción detectada

**Endpoints**:
- `POST /webhook/evaluar-tono`

**TODO**:
- [ ] Integrar con API de análisis de sentimiento
- [ ] Configurar prompts de análisis
- [ ] Implementar historial de emociones
- [ ] Añadir alertas por cambios bruscos

---

### 3. generar_entorno.json
**Propósito**: Genera entornos virtuales personalizados según el estado emocional

**Flujo**:
1. Recibe preferencias del usuario
2. Genera prompt basado en emoción actual
3. Genera imagen/descripción de entorno
4. Guarda en Redis
5. Retorna URL del entorno

**Endpoints**:
- `POST /webhook/generar-entorno`

**TODO**:
- [ ] Integrar con API de generación de imágenes
- [ ] Crear biblioteca de prompts
- [ ] Implementar caché de entornos
- [ ] Añadir variaciones por persona

---

## Instalación

```bash
# TODO: Instrucciones de instalación de n8n
npm install -g n8n
```

## Configuración

1. Importar workflows en n8n
2. Configurar credenciales:
   - Redis
   - APIs externas (OpenAI, etc.)
3. Actualizar URLs de webhooks
4. Configurar variables de entorno

## Ejecución

```bash
# TODO: Instrucciones de ejecución
n8n start
```

## Variables de Entorno

```
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=TODO
N8N_BASIC_AUTH_PASSWORD=TODO
WEBHOOK_URL=http://localhost:5678/webhook/
REDIS_HOST=localhost
REDIS_PORT=6379
```

## Testing

```bash
# TODO: Ejemplos de curl para probar webhooks
curl -X POST http://localhost:5678/webhook/gestionar-cita \
  -H "Content-Type: application/json" \
  -d '{"action": "crear", "email": "test@example.com"}'
```
