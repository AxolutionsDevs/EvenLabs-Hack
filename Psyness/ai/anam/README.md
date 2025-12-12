# Anam - SerenIA

Configuración de avatares virtuales para SerenIA.

## Descripción

Anam proporciona avatares 3D realistas con:
- **Sincronización labial**: Audio → movimiento de labios
- **Expresiones faciales**: Emociones y reacciones
- **Gestos**: Movimientos naturales
- **Personalización**: Apariencia y personalidad

## Archivos

### persona_config.json
Define la configuración de cada avatar:
- Apariencia física
- Personalidad y expresividad
- Sincronización de voz
- Mapeo de emociones

## Personas

### Sofía Zen
- **Apariencia**: Mujer latina 30-40 años, ropa natural
- **Personalidad**: Movimientos lentos, expresividad 0.6
- **Gestos**: Suaves, meditativos

### Dr. Marco
- **Apariencia**: Hombre latino 35-45 años, business casual
- **Personalidad**: Profesional, expresividad 0.7
- **Gestos**: Estructurados, con propósito

### Alex Amigo
- **Apariencia**: Persona joven 25-35 años, casual moderno
- **Personalidad**: Dinámico, expresividad 0.85
- **Gestos**: Frecuentes, naturales

## Setup

1. **Crear cuenta en Anam**
   - https://anam.ai

2. **Obtener API Key**
   - Dashboard → Settings → API Keys

3. **Crear Personas**
   - Avatars → Create New
   - Configurar apariencia según persona_config.json
   - Ajustar personalidad y expresiones

4. **Obtener Persona IDs**
   - Copiar IDs a frontend/src/config/personas.js

## Integración

### Instalación SDK

```bash
npm install @anam-ai/sdk
```

### Uso Básico

```javascript
import AnamSDK from '@anam-ai/sdk';

const anam = new AnamSDK({
  apiKey: process.env.VITE_ANAM_API_KEY,
  personaId: 'PERSONA_ID'
});

// Montar en el DOM
await anam.mount('#avatar-container');

// Reproducir audio con sync
await anam.playAudio(audioBuffer, {
  syncLips: true,
  emotion: 'calm'
});

// Cambiar expresión
anam.setExpression('smile');

// Limpiar
await anam.unmount();
```

## Sincronización con ElevenLabs

```javascript
// Cuando recibes audio de ElevenLabs
elevenLabsWS.onmessage = async (event) => {
  if (event.data.type === 'audio') {
    const audioBuffer = base64ToArrayBuffer(event.data.audio);
    
    // Reproducir en Anam con sync
    await anam.playAudio(audioBuffer, {
      syncLips: true,
      emotion: currentEmotion
    });
  }
};
```

## Emociones Soportadas

- `neutral` - Expresión neutra
- `calm` - Calmado/sereno
- `happy` - Feliz/sonriente
- `sad` - Triste
- `thoughtful` - Pensativo
- `concerned` - Preocupado/empático
- `surprised` - Sorprendido

## Performance

### Optimizaciones
- Precarga del avatar
- Cache de animaciones
- Reducción de calidad si lag
- Fallback a audio solo

### Métricas
- FPS del avatar
- Latencia de sync
- Uso de recursos

## Troubleshooting

### Avatar no se carga
- Verificar API key
- Verificar persona ID
- Revisar console para errores

### Sincronización desajustada
- Ajustar buffer size
- Verificar formato de audio
- Revisar latencia de red

### Performance bajo
- Reducir calidad del avatar
- Desactivar gestos complejos
- Usar version lite del SDK

## TODO

- [ ] Crear las 3 personas en Anam
- [ ] Obtener y configurar persona IDs
- [ ] Testear sincronización con ElevenLabs
- [ ] Optimizar performance
- [ ] Implementar fallbacks
- [ ] Añadir más expresiones personalizadas
- [ ] Crear presets de gestos por emoción
