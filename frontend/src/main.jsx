/**
 * main.jsx
 * Punto de entrada de la aplicación React
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './routes';
import './styles/global.css';

// TODO: Obtener publishable key de variables de entorno
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// TODO: Configurar Clerk
// TODO: Añadir providers adicionales si es necesario

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={clerkPubKey}>
            <App />
        </ClerkProvider>
    </React.StrictMode>
);
