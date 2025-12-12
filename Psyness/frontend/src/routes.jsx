/**
 * routes.jsx
 * Configuración de rutas de la aplicación
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Session from './pages/Session';
import NotFound from './pages/NotFound';

const App = () => {
    // TODO: Configurar rutas protegidas
    // TODO: Añadir layouts si es necesario

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />

                {/* TODO: Proteger rutas con Clerk */}
                <Route
                    path="/dashboard"
                    element={
                        <>
                            <SignedIn>
                                <Dashboard />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />

                <Route
                    path="/session/:personaId"
                    element={
                        <>
                            <SignedIn>
                                <Session />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
