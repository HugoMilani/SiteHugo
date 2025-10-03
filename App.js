import React from 'react';
// 1. Importa o provedor de autenticação que criamos
import { AuthProvider } from './src/context/AuthContext';
// 2. Importa o navegador principal (que criaremos logo mais)
import AppNavigator from './src/navigation/AppNavigator';

// O componente principal do nosso aplicativo
export default function App() {
  return (
    // Envolve toda a navegação com o AuthProvider
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}