# Psyness Assets

Recursos visuales para la aplicación Psyness.

## Estructura

```
assets/
├── backgrounds/     # Fondos para entornos virtuales
│   ├── zen.jpg
│   ├── profesional.jpg
│   └── amigo.jpg
└── avatars/         # Assets adicionales de avatares (vacío por ahora)
```

## Backgrounds

### zen.jpg
**Descripción**: Fondo para el modo Sofía Zen
- Ambiente: Playa al atardecer / Jardín zen
- Colores: Azules suaves, beiges, verdes naturales
- Mood: Calmado, sereno, minimalista
- Resolución sugerida: 1920x1080 o superior

### profesional.jpg
**Descripción**: Fondo para el modo Dr. Marco
- Ambiente: Oficina moderna / Biblioteca elegante
- Colores: Grises, azules oscuros, blancos
- Mood: Profesional, limpio, estructurado
- Resolución sugerida: 1920x1080 o superior

### amigo.jpg
**Descripción**: Fondo para el modo Alex Amigo
- Ambiente: Cafetería / Terraza con ciudad
- Colores: Cálidos, acogedores, variados
- Mood: Casual, acogedor, moderno
- Resolución sugerida: 1920x1080 o superior

## Generación de Assets

Para generar las imágenes de fondo, usa herramientas como:
- Midjourney
- DALL-E 3
- Stable Diffusion
- Fotografía stock (Unsplash, Pexels)

### Prompts Sugeridos

**Zen**:
```
Peaceful beach at golden hour, gentle waves, soft sand, minimalist 
composition, pastel colors, calming atmosphere, photorealistic, 4k
```

**Profesional**:
```
Modern minimalist office, floor-to-ceiling windows, city view, natural 
light, clean lines, professional atmosphere, architectural photography
```

**Amigo**:
```
Cozy coffee shop interior, warm lighting, comfortable seating, plants, 
inviting atmosphere, lifestyle photography, warm tones
```

## Formato

- **Tipo**: JPG o PNG
- **Resolución**: Mínimo 1920x1080
- **Peso**: Optimizado para web (<500KB si es posible)
- **Aspect ratio**: 16:9

## Uso en la App

Los backgrounds se cargan dinámicamente según:
1. Persona seleccionada
2. Emoción detectada
3. Entornos personalizados generados por IA

```javascript
// Ejemplo de uso
const background = `url(/assets/backgrounds/${persona}.jpg)`;
containerElement.style.backgroundImage = background;
```

## Entornos Dinámicos

Los entornos generados por el workflow `generar_entorno` se guardan en:
- Redis (URL de referencia)
- CDN o storage cloud (imagen actual)

Estos no se guardan localmente en assets/.

## TODO

- [ ] Generar/obtener imagen zen.jpg
- [ ] Generar/obtener imagen profesional.jpg
- [ ] Generar/obtener imagen amigo.jpg
- [ ] Optimizar imágenes para web
- [ ] Crear variaciones para diferentes estados
- [ ] Añadir versiones mobile-optimized
- [ ] Considerar video backgrounds para mayor inmersión
