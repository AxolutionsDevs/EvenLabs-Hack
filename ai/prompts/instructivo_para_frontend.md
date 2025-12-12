# Instructivo para Desarrolladores Frontend

## Integración con el Agente Emocional

Este documento guía a los desarrolladores del frontend sobre cómo integrar correctamente los componentes de IA.

## Flujo de Comunicación

```
Usuario → Frontend → ElevenLabs Agent → n8n Webhooks → Redis
                ↓
            Anam Avatar
```

## 1. Integración con ElevenLabs

### Configuración Inicial

```javascript
const elevenLabsConfig = {
  apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY,
  agentId: PERSONAS[personaSeleccionada].elevenAgentId,
  wsUrl: 'wss://api.elevenlabs.io/v1/convai/conversation'
};
```

### Iniciar Conversación

```javascript
// TODO: Implementar conexión WebSocket
const ws = new WebSocket(elevenLabsConfig.wsUrl);

ws.onopen = () => {
  // Enviar configuración inicial
  ws.send(JSON.stringify({
    type: 'config',
    agent_id: elevenLabsConfig.agentId,
    // ...más configuración
  }));
};
```

### Recibir Audio

```javascript
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.type === 'audio') {
    // TODO: Reproducir audio
    // TODO: Enviar audio a Anam para sincronización labial
  }
  
  if (data.type === 'tool_call') {
    // TODO: Manejar llamadas a herramientas (citas, entornos)
    handleToolCall(data.tool_name, data.parameters);
  }
};
```

## 2. Integración con Anam

### Inicializar SDK

```javascript
// TODO: Cargar SDK de Anam
import AnamSDK from '@anam-ai/sdk';

const anam = new AnamSDK({
  apiKey: import.meta.env.VITE_ANAM_API_KEY,
  personaId: PERSONAS[personaSeleccionada].anamPersonaId
});

// TODO: Montar avatar en el DOM
await anam.mount('#anam-avatar-root');
```

### Sincronizar con Audio

```javascript
// Cuando recibas audio de ElevenLabs
anam.playAudio(audioBuffer, {
  syncLips: true,
  emotion: currentEmotion // de evaluación de tono
});
```

## 3. Llamadas a n8n Backend

### Gestionar Cita

```javascript
const gestionarCita = async (action, data) => {
  const response = await fetch(`${N8N_URL}/gestionar-cita`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: user.id,
      action, // 'crear', 'modificar', 'cancelar'
      ...data
    })
  });
  
  return await response.json();
};
```

### Obtener Entorno

```javascript
const obtenerEntorno = async (emocion, preferencias) => {
  const response = await fetch(`${N8N_URL}/generar-entorno`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      emocion_actual: emocion,
      persona: personaSeleccionada,
      preferencias
    })
  });
  
  const entorno = await response.json();
  // TODO: Aplicar entorno al fondo
  aplicarEntorno(entorno);
};
```

## 4. Manejo de Herramientas (Tools)

Cuando ElevenLabs llama a una herramienta:

```javascript
const handleToolCall = async (toolName, parameters) => {
  switch(toolName) {
    case 'gestionar_cita':
      const result = await gestionarCita(
        parameters.action,
        parameters
      );
      // TODO: Enviar resultado de vuelta a ElevenLabs
      sendToolResult(result);
      break;
      
    case 'cambiar_entorno':
      await obtenerEntorno(
        parameters.tipo_entorno,
        parameters.preferencias
      );
      break;
      
    // TODO: Añadir más herramientas
  }
};
```

## 5. Manejo de Estados

```javascript
const [sessionState, setSessionState] = useState({
  isActive: false,
  currentEmotion: 'neutral',
  currentEnvironment: null,
  persona: 'zen',
  isMuted: false,
  isListening: true
});
```

## 6. Cleanup y Desconexión

```javascript
const endSession = async () => {
  // Cerrar WebSocket de ElevenLabs
  ws.close();
  
  // Limpiar Anam
  await anam.unmount();
  
  // Guardar datos de sesión en Redis vía n8n
  await fetch(`${N8N_URL}/finalizar-sesion`, {
    method: 'POST',
    body: JSON.stringify({
      sessionId,
      duracion,
      emocionesDetectadas
    })
  });
};
```

## 7. Manejo de Errores

```javascript
// Error en WebSocket
ws.onerror = (error) => {
  console.error('Error en conexión:', error);
  // TODO: Mostrar UI de error
  // TODO: Intentar reconectar
};

// Error en Anam
anam.on('error', (error) => {
  console.error('Error en avatar:', error);
  // TODO: Fallback a modo solo voz
});
```

## 8. Buenas Prácticas

### Performance
- Lazy load del SDK de Anam
- Comprimir audio cuando sea posible
- Implementar debouncing en eventos frecuentes

### UX
- Mostrar indicadores de carga
- Feedback visual de estado (hablando, escuchando)
- Manejar errores gracefully

### Seguridad
- Nunca exponer API keys en código cliente
- Validar todas las entradas
- Sanitizar datos sensibles

## TODO
- [ ] Crear SDK wrapper unificado
- [ ] Implementar modo offline
- [ ] Añadir analytics de uso
- [ ] Crear componentes de debug
- [ ] Documentar eventos personalizados
