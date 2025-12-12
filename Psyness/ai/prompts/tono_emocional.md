# Prompt: Evaluación de Tono Emocional

## Objetivo
Analizar el tono emocional de la conversación en tiempo real para adaptar las respuestas y crear entornos apropiados.

## Emociones a Detectar

### Primarias
- **Calma**: Estado equilibrado, voz pausada, vocabulario neutral
- **Ansiedad**: Tensión, palabras aceleradas, preocupaciones recurrentes
- **Tristeza**: Tono bajo, vocabulario negativo, referencias al pasado
- **Estrés**: Múltiples preocupaciones, agobio, sensación de desbordamiento
- **Alegría**: Tono elevado, vocabulario positivo, energía alta

### Secundarias
- Frustración
- Esperanza
- Nostalgia
- Confusión
- Gratitud

## Indicadores por Modalidad

### Voz (Prosody Analysis)
- **Tono**: Alto/bajo, variabilidad
- **Velocidad**: Rápida/lenta, cambios
- **Volumen**: Fuerte/suave, fluctuaciones
- **Pausas**: Frecuencia, duración

### Contenido (NLP Analysis)
- **Palabras clave emocionales**
- **Negaciones**: "no puedo", "nunca", "siempre"
- **Intensificadores**: "muy", "demasiado", "extremadamente"
- **Referencias temporales**: Pasado vs futuro

## Formato de Salida

```json
{
  "emocion_primaria": "ansiedad",
  "intensidad": 0.75,
  "emociones_secundarias": [
    {"emocion": "frustración", "intensidad": 0.5},
    {"emocion": "esperanza", "intensidad": 0.3}
  ],
  "confianza": 0.85,
  "indicadores": {
    "voz": {
      "tono_medio": 220,
      "velocidad": "rápida",
      "variabilidad": "alta"
    },
    "contenido": {
      "palabras_clave": ["preocupado", "nervioso", "no sé"],
      "sentimiento_general": "negativo"
    }
  },
  "recomendacion_entorno": "calma",
  "recomendacion_tono": "empático y pausado"
}
```

## Adaptación de Respuesta

### Para Ansiedad Alta
- Reducir velocidad de habla
- Usar lenguaje tranquilizador
- Ofrecer técnicas de respiración
- Validar preocupaciones

### Para Tristeza
- Mostrar empatía profunda
- Evitar frases motivacionales vacías
- Dar espacio para expresión
- Normalizar emociones

### Para Estrés
- Ayudar a priorizar
- Ofrecer estructura
- Técnicas de grounding
- Descomponer problemas

## Historial y Tendencias

### Tracking
- Guardar emoción detectada cada 30 segundos
- Identificar patrones a lo largo de la sesión
- Detectar cambios significativos

### Alertas
- Escalada emocional rápida
- Emociones negativas sostenidas >10 min
- Indicadores de crisis

## TODO
- [ ] Definir umbrales exactos para cada emoción
- [ ] Crear dataset de entrenamiento
- [ ] Implementar detección de sarcasmo
- [ ] Añadir contexto cultural
- [ ] Calibrar por persona/idioma
