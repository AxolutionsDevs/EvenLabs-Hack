# ElevenLabs - SerenIA

Configuración de agentes conversacionales con voz para SerenIA.

## Descripción

ElevenLabs proporciona:
- **Text-to-Speech (TTS)**: Voz natural y expresiva
- **Conversational AI**: Agentes con capacidad de diálogo
- **Tools/Functions**: Llamadas a webhooks para acciones

## Archivos

### tool_schema.json
Define las herramientas (tools) que el agente puede usar:
- `gestionar_cita`: Crear, modificar, cancelar citas
- Más herramientas según necesidades

### agente_base.json
Configuración base para todos los agentes:
- Configuración de conversación
- Parámetros de TTS
- Configuración de LLM
- Webhooks de herramientas

## Configuración por Persona

Cada persona tiene su propia configuración de voz:

| Persona | Estilo | Stability | Similarity | Style |
|---------|--------|-----------|------------|-------|
| Sofía Zen | Calmada | 0.7 | 0.8 | 0.3 |
| Dr. Marco | Profesional | 0.75 | 0.7 | 0.5 |
| Alex Amigo | Casual | 0.65 | 0.75 | 0.6 |

## Setup

1. **Crear cuenta en ElevenLabs**
   - https://elevenlabs.io

2. **Obtener API Key**
   - Dashboard → API Keys → Create

3. **Seleccionar voces**
   - Voice Library → Buscar voces apropiadas
   - Copiar Voice IDs

4. **Crear agentes**
   - Conversational AI → Create Agent
   - Configurar con agente_base.json
   - Asignar voz correspondiente

5. **Configurar Tools**
   - En cada agente → Tools
   - Añadir tool_schema.json
   - Configurar webhook URLs de n8n

## Integración Frontend

Ver [../prompts/instructivo_para_frontend.md](../prompts/instructivo_para_frontend.md)

```javascript
// Ejemplo de conexión
const ws = new WebSocket('wss://api.elevenlabs.io/v1/convai/conversation');

ws.send(JSON.stringify({
  type: 'init',
  agent_id: PERSONAS[persona].elevenAgentId,
  api_key: ELEVENLABS_API_KEY
}));
```

## Testing

```bash
# TODO: Script de prueba
curl -X POST https://api.elevenlabs.io/v1/convai/conversation \
  -H "xi-api-key: YOUR_API_KEY" \
  -d '{"agent_id": "AGENT_ID", "text": "Hola"}'
```

## Monitoreo

- Dashboard de ElevenLabs
- Métricas de uso
- Latencia de respuesta
- Calidad de audio

## Costos

TODO: Documentar estructura de pricing
- Caracteres por mes
- Conversaciones concurrentes
- Llamadas a tools

## TODO

- [ ] Crear agentes para cada persona
- [ ] Seleccionar y testear voces
- [ ] Configurar webhooks en production
- [ ] Implementar manejo de errores
- [ ] Optimizar parámetros de voz
- [ ] Añadir más tools según necesidades
- [ ] Configurar rate limiting
