import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/useAuth';
import { redirectTo, ROUTES } from '../utils/routes';
import Layout from '@theme/Layout';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function ProtectedRoute({ children, title, description }) {
  const { user, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);

  // Détection pour s'assurer qu'on est bien côté navigateur
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 1. BYPASS POUR LA CONSTRUCTION (BUILD) ET LE MOTEUR DE RECHERCHE
  // Si on est côté serveur (build), on rend le contenu pour qu'il soit indexé.
  if (!ExecutionEnvironment.canUseDOM) {
    return children;
  }

  // 2. LOGIQUE DE PROTECTION CÔTÉ CLIENT
  // Une fois que le JS prend le relais dans le navigateur :
  
  useEffect(() => {
    // Si l'auth est chargée et qu'il n'y a pas d'utilisateur, on redirige
    if (!loading && !user) {
      redirectTo(ROUTES.LOGIN);
    }
  }, [user, loading]);

  // Pendant le chargement de l'auth
  if (loading) {
    return (
      <Layout title={title} description={description}>
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <p>Chargement...</p>
        </div>
      </Layout>
    );
  }

  // Si pas connecté (le useEffect ci-dessus va rediriger, mais on affiche un écran d'attente)
  if (!user) {
    return (
      <Layout title={title} description={description}>
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <p>Redirection vers la connexion...</p>
        </div>
      </Layout>
    );
  }

  // Si connecté, on affiche le contenu
  return children;
}