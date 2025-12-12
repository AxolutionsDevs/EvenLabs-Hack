# Flujos de Usuario - Psyness

## 1. Flujo de Onboarding

### Primera Visita

```mermaid
flowchart TD
    A[Usuario llega a Landing] --> B{¿Tiene cuenta?}
    B -->|No| C[Click en Sign Up]
    B -->|Sí| D[Click en Sign In]
    C --> E[Clerk Sign Up Flow]
    D --> F[Clerk Sign In Flow]
    E --> G[Completar Perfil]
    F --> H[Dashboard]
    G --> H
    H --> I[Seleccionar Persona]
    I --> J[Tutorial Primera Sesión]
    J --> K[Iniciar Primera Sesión]
```

**Pasos**:
1. Usuario ve landing page
2. Se registra/inicia sesión con Clerk
3. Completa perfil básico (opcional)
4. Ve dashboard con 3 opciones de persona
5. Tutorial rápido (opcional, skip disponible)
6. Inicia primera sesión

---

## 2. Flujo de Sesión Normal

### Sesión Completa

```mermaid
flowchart TD
    A[Dashboard] --> B[Selecciona Persona]
    B --> C[Verifica Saldo]
    C -->|Sin saldo| D[Pantalla de Pago]
    C -->|Con saldo| E[Carga Avatar]
    D --> E
    E --> F[Conecta ElevenLabs]
    F --> G[Saludo Inicial]
    G --> H{Usuario Habla}
    H --> I[Análisis Emocional]
    I --> J{¿Cambiar Entorno?}
    J -->|Sí| K[Generar Entorno]
    J -->|No| H
    K --> H
    H --> L{¿Finalizar?}
    L -->|No| H
    L -->|Sí| M[Resumen de Sesión]
    M --> N[Guardar en Historial]
    N --> O[Dashboard]
```

**Detalles**:
1. **Selección**: Usuario elige zen/profesional/amigo
2. **Verificación**: Sistema verifica créditos/saldo
3. **Carga**: Avatar de Anam se inicializa (3-5s)
4. **Conexión**: WebSocket con ElevenLabs establece
5. **Inicio**: Agente saluda según personalidad
6. **Conversación**: Flujo libre de diálogo
7. **Análisis**: n8n analiza tono cada ~30s
8. **Entorno**: Cambia background según emoción
9. **Cierre**: Usuario finaliza o tiempo límite
10. **Resumen**: Muestra duración, emociones, insights

---

## 3. Flujo de Gestión de Citas

### Agendar Nueva Cita

```mermaid
flowchart TD
    A[Usuario en Sesión] --> B[Usuario: 'Quiero agendar cita']
    B --> C[ElevenLabs: Tool Call]
    C --> D[n8n: gestionar_cita]
    D --> E[Redis: Consulta disponibilidad]
    E --> F{¿Hay disponibilidad?}
    F -->|Sí| G[Agente: 'Tengo estos horarios...']
    F -->|No| H[Agente: 'No hay disponibilidad']
    G --> I[Usuario selecciona horario]
    I --> J[n8n: confirmar_cita]
    J --> K[Redis: Guarda cita]
    K --> L[Email: Confirmación]
    L --> M[Agente: 'Cita confirmada para...']
```

**Variantes**:
- **Modificar cita**: Similar pero consulta cita existente
- **Cancelar cita**: Validación + eliminación + email
- **Consultar citas**: Lista de próximas citas

---

## 4. Flujo de Cambio de Entorno

### Generación Dinámica

```mermaid
flowchart TD
    A[Sesión Activa] --> B[Sistema detecta emoción]
    B --> C{¿Emoción cambió significativamente?}
    C -->|No| A
    C -->|Sí| D[n8n: evaluar_cambio_entorno]
    D --> E{¿Cambiar entorno?}
    E -->|No| A
    E -->|Sí| F[n8n: generar_entorno]
    F --> G[Genera prompt según emoción]
    G --> H[Llamada a Image Gen API]
    H --> I[Guarda URL en Redis]
    I --> J[Frontend: Cambia background]
    J --> K[Transición suave visual]
    K --> A
```

**Triggers para cambio**:
- Ansiedad → Calma (playa, naturaleza)
- Tristeza → Esperanza (amanecer, flores)
- Estrés → Orden (espacios limpios)
- Manual (usuario pide cambio)

---

## 5. Flujo de Escalamiento (Crisis)

### Detección de Crisis

```mermaid
flowchart TD
    A[Conversación Activa] --> B[n8n: Análisis continuo]
    B --> C{¿Detecta crisis?}
    C -->|No| A
    C -->|Sí| D[Alerta Interna]
    D --> E[Agente cambia tono]
    E --> F[Agente: Expresa preocupación]
    F --> G[Agente: Ofrece recursos]
    G --> H{¿Usuario acepta ayuda?}
    H -->|Sí| I[Muestra recursos profesionales]
    H -->|No| J[Mantiene tono empático]
    I --> K[Guarda en historial]
    J --> K
    K --> L[Notifica moderador humano opcional]
```

**Criterios de crisis**:
- Mención de autolesión
- Ideación suicida
- Lenguaje de desesperanza extrema
- Escalada emocional rápida

---

## 6. Flujo de Análisis Emocional

### Background Process

```mermaid
flowchart LR
    A[Audio del usuario] --> B[ElevenLabs transcribe]
    B --> C[n8n: evaluar_tono_emocional]
    C --> D[Análisis de contenido NLP]
    C --> E[Análisis de voz Prosody]
    D --> F[Combinar resultados]
    E --> F
    F --> G[Detectar emoción primaria]
    G --> H[Redis: Guardar historial]
    H --> I[Frontend: Actualizar UI]
    I --> J{¿Trigger acción?}
    J -->|Cambio entorno| K[Workflow entorno]
    J -->|Alerta| L[Workflow alerta]
    J -->|Ninguno| M[Continuar]
```

**Frecuencia**: Cada 30 segundos de conversación activa

---

## 7. Flujo de Historial

### Ver Sesiones Pasadas

```
Dashboard → Ver Historial → Lista de Sesiones
                              ↓
                     Selecciona Sesión
                              ↓
                   ┌──────────┴──────────┐
                   ↓                     ↓
            Detalles Básicos      Gráfico Emocional
            - Fecha/hora          - Timeline de emociones
            - Duración            - Picos/valles
            - Persona             - Promedio general
            - Costo                      ↓
                                 Insights Generados
                                 - Patrones detectados
                                 - Recomendaciones
```

---

## 8. Flujo de Pago/Créditos

### Compra de Créditos

```mermaid
flowchart TD
    A[Dashboard] --> B[Ver Saldo]
    B --> C{¿Saldo bajo?}
    C -->|No| D[Continuar normal]
    C -->|Sí| E[Click 'Añadir Créditos']
    E --> F[Selecciona Paquete]
    F --> G[Stripe/Payment Gateway]
    G --> H[Pago Exitoso]
    H --> I[Redis: Actualiza saldo]
    I --> J[Email: Confirmación]
    J --> K[Dashboard actualizado]
```

**Paquetes** (ejemplo):
- Básico: 3 sesiones (30min c/u)
- Estándar: 10 sesiones
- Premium: Ilimitado mensual

---

## TODO

- [ ] Crear prototipos visuales de cada flujo
- [ ] Definir tiempos exactos de cada paso
- [ ] Añadir casos de error en cada flujo
- [ ] Documentar fallbacks
- [ ] Crear user journey maps
- [ ] Testear flujos con usuarios reales
