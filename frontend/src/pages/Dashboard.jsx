/**
 * Dashboard.jsx
 * Panel principal del usuario
 * Permite seleccionar persona y gestionar sesiones
 */

import React from 'react';

const Dashboard = () => {
    // TODO: Implementar selección de personas (zen, profesional, amigo)
    // TODO: Mostrar historial de sesiones desde Redis
    // TODO: Integrar estado de usuario con Clerk
    // TODO: Añadir navegación a Session

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Selecciona tu modo preferido</p>
            {/* TODO: Añadir cards de personas */}
            {/* TODO: Mostrar saldo del usuario */}
        </div>
    );
};

export default Dashboard;
