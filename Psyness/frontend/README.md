# Psyness Frontend

Frontend de Psyness construido con React, Vite y Clerk.

## Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool
- **Clerk** - Autenticación
- **React Router** - Enrutamiento
- **Anam SDK** - Avatares virtuales
- **ElevenLabs** - Voz y agentes conversacionales

## Estructura

```
src/
├── pages/          # Páginas de la aplicación
├── components/     # Componentes reutilizables
├── config/         # Configuraciones (personas, env)
├── hooks/          # Custom hooks
└── styles/         # Estilos globales
```

## Instalación

```bash
# TODO: Instrucciones de instalación
npm install
```

## Configuración

1. Copiar `src/config/env.example` a `.env`
2. Completar las variables de entorno:
   - Clerk publishable key
   - Anam API key
   - ElevenLabs API key
   - n8n webhook URL

## Desarrollo

```bash
# TODO: Instrucciones de desarrollo
npm run dev
```

## Build

```bash
# TODO: Instrucciones de build
npm run build
```

## Páginas

- **Landing** - Página de inicio
- **Dashboard** - Selección de persona y gestión de sesiones
- **Session** - Sesión activa con el agente
- **NotFound** - Página 404

## Componentes

- **AvatarContainer** - Contenedor del avatar de Anam
- **Controls** - Controles de sesión

## Hooks

- **useAnam** - Hook para gestionar el SDK de Anam

## TODO

- [ ] Implementar integración con Anam SDK
- [ ] Implementar integración con ElevenLabs
- [ ] Conectar con backend n8n
- [ ] Implementar diseño UI/UX
- [ ] Añadir estados de carga y error
- [ ] Implementar selección de entornos virtuales
