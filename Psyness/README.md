# Psyness

**Agente de apoyo emocional con avatares virtuales y voz natural**

![Versión](https://img.shields.io/badge/versión-0.1.0-blue)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)

---

## 🎯 ¿Qué es Psyness?

Psyness es una plataforma de apoyo emocional que combina:
- 🗣️ **Conversación por voz** natural con ElevenLabs
- 👤 **Avatares 3D realistas** con Anam
- 🧠 **Análisis emocional** en tiempo real
- 🎨 **Entornos virtuales** adaptativos
- 🔒 **Privacidad** y seguridad total

### No es terapia clínica
Psyness es un **espacio seguro** para:
- Expresar emociones libremente
- Reflexionar sobre situaciones
- Practicar mindfulness
- Recibir apoyo empático

Para necesidades clínicas, **siempre recomendamos profesionales certificados**.

---

## ✨ Características

### 3 Personas Únicas
- **Sofía Zen**: Guía calmada para relajación y mindfulness
- **Dr. Marco**: Mentor profesional analítico y estructurado
- **Alex Amigo**: Compañero cercano y auténtico

### Tecnología Avanzada
- Voz natural indistinguible de humana
- Sincronización labial perfecta
- Detección de tono emocional
- Entornos personalizados según tu estado

---

## 🏗️ Arquitectura

```
Frontend (React + Vite)
    ↓
Clerk Auth | ElevenLabs Voice | Anam Avatars
    ↓                ↓
n8n Workflows ← → Redis Database
```

Ver documentación completa en [docs/arquitectura.md](./docs/arquitectura.md)

---

## 📁 Estructura del Proyecto

```
SerenIA/
├── frontend/              # React + Vite app
│   ├── src/
│   │   ├── pages/         # Landing, Dashboard, Session
│   │   ├── components/    # AvatarContainer, Controls
│   │   ├── config/        # Personas, env
│   │   └── hooks/         # useAnam
│   └── package.json
│
├── backend/
│   ├── n8n/              # Workflows de orquestación
│   │   └── workflows/    # gestionar_cita, evaluar_tono, etc.
│   └── redis/            # Seed data y config
│
├── ai/
│   ├── prompts/          # System prompts del agente
│   ├── personas/         # Definiciones de personalidades
│   ├── elevenlabs/       # Configuración de voz
│   └── anam/             # Configuración de avatares
│
├── assets/
│   └── backgrounds/      # Fondos para entornos
│
└── docs/
    ├── arquitectura.md   # Arquitectura técnica
    ├── flujos.md         # Flujos de usuario
    ├── checklist.md      # Lista de implementación
    └── roadmap.md        # Plan de desarrollo
```

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- Redis
- n8n
- Cuentas en:
  - [Clerk](https://clerk.com)
  - [ElevenLabs](https://elevenlabs.io)
  - [Anam](https://anam.ai)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/Psyness.git
cd Psyness
```

2. **Configurar Frontend**
```bash
cd frontend
npm install
cp src/config/env.example .env
# Editar .env con tus API keys
npm run dev
```

3. **Configurar Backend**
```bash
# Iniciar Redis
redis-server

# Cargar seed data
redis-cli < backend/redis/seed_data.redis

# Iniciar n8n
n8n start

# Importar workflows desde backend/n8n/workflows/
```

4. **Configurar Servicios**
- Clerk: Configurar aplicación y obtener publishable key
- ElevenLabs: Crear agentes para cada persona
- Anam: Crear avatares y obtener persona IDs
- Actualizar IDs en `frontend/src/config/personas.js`

Ver guías detalladas en cada carpeta.

---

## 📖 Documentación

- **[Arquitectura](./docs/arquitectura.md)** - Diagrama técnico del sistema
- **[Flujos](./docs/flujos.md)** - Flujos de usuario y casos de uso
- **[Checklist](./docs/checklist.md)** - Lista de implementación paso a paso
- **[Roadmap](./docs/roadmap.md)** - Plan de desarrollo a futuro

### Componentes
- **[Frontend](./frontend/README.md)** - Documentación del frontend
- **[Backend](./backend/README.md)** - Documentación de n8n y Redis
- **[ElevenLabs](./ai/elevenlabs/README.md)** - Configuración de voz
- **[Anam](./ai/anam/README.md)** - Configuración de avatares

---

## 🎨 Personas

### Sofía Zen
*"Respira conmigo por un momento..."*

Guía empática especializada en mindfulness y relajación. Ideal para momentos de ansiedad o búsqueda de calma.

### Dr. Marco
*"Vamos a analizar esto paso a paso..."*

Mentor profesional con enfoque analítico. Perfecto para decisiones importantes y planificación estructurada.

### Alex Amigo
*"Oye, cuéntame, ¿qué onda?"*

Compañero cercano y auténtico. Mejor para conversaciones casuales y desahogo sin estructura.

---

## 🛠️ Tech Stack

| Categoría | Tecnología |
|-----------|-----------|
| Frontend | React 18, Vite, React Router |
| Auth | Clerk |
| Voz | ElevenLabs Conversational AI |
| Avatares | Anam SDK |
| Backend | n8n (workflows) |
| Database | Redis |
| Hosting | TBD (Vercel, Railway) |

---

## 📊 Estado del Proyecto

Ver [docs/checklist.md](./docs/checklist.md) para estado detallado.

**Progreso General**: 🟨 30% (Estructura completa, implementación pendiente)

| Componente | Estado |
|------------|--------|
| Estructura | ✅ 100% |
| Frontend Base | 🟨 40% |
| ElevenLabs | 🟥 10% |
| Anam | 🟥 10% |
| n8n Workflows | 🟨 30% |
| Redis | 🟨 50% |
| Documentación | ✅ 90% |

---

## 🤝 Contribuir

Este proyecto está en desarrollo activo. Para contribuir:

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

## 🆘 Recursos de Ayuda

### Si estás en crisis
- 🇪🇸 España: 024 (Atención a la conducta suicida)
- 🇲🇽 México: 800 911 2000 (Línea de la Vida)
- 🌍 Internacional: https://www.iasp.info/resources/Crisis_Centres/

### Soporte Técnico
- Issues: [GitHub Issues](https://github.com/tu-usuario/Psyness/issues)
- Email: support@psyness.app (TBD)
- Documentación: [docs/](./docs/)

---

## 👥 Equipo

- **Desarrollo**: [Tu Nombre]
- **Diseño**: TBD
- **Asesoría Psicológica**: TBD

---

## 🙏 Agradecimientos

- ElevenLabs por su increíble tecnología de voz
- Anam por los avatares realistas
- Clerk por la autenticación sin fricciones
- Comunidad open source

---

## 📮 Contacto

- Website: https://psyness.app (TBD)
- Email: hello@psyness.app (TBD)
- Twitter: @Psyness_app (TBD)

---

**Construido con ❤️ para hacer el apoyo emocional más accesible**
