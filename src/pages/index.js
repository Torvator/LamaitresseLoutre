import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAuth } from '../utils/useAuth';
import { redirectTo, ROUTES } from '../utils/routes';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { user } = useAuth();

  const handleLogout = async () => {
    if (confirm('Es-tu sûre de vouloir te déconnecter ?')) {
      try {
        await signOut(auth);
        redirectTo(ROUTES.LOGIN);
      } catch (err) {
        console.error('Erreur déconnexion:', err);
      }
    }
  };

  return (
    <header style={{
      padding: '4rem 0 2rem 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ffecd2 0%, #ffcbb3 25%, #ffb6b9 50%, #ffc9cb 75%, #ffd89b 100%)',
      position: 'relative',
    }}>
      {user && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.9rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff5252';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.transform = 'scale(1)';
            }}
          >
            🚪 Déconnexion
          </button>
        </div>
      )}

      <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 2rem'}}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#3d3d3d',
        }}>
          {siteConfig.title}
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#4a4a4a',
          fontWeight: '500',
        }}>
          {siteConfig.tagline}
        </p>
        {user && (
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginTop: '1rem',
          }}>
            Connectée en tant que : <strong>{user.email}</strong>
          </p>
        )}
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '4rem auto',
      padding: '0 2rem',
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
      }}>
        
        <p style={{
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#4a4a4a',
        }}>
          Puisse ce site créé avec amour et consommation électrique bien trop élevée t'aider dans ton souhait de réussir tes concours. 
          Tu y retrouveras tes fiches dans l'onglet <strong>📚 Mes Fiches</strong>, et l'onglet <strong>💬 Commentaires</strong> pour me tenir à jour de tes besoins de modification du site ou des fiches.
        </p>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#fff9f0',
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <h3 style={{color: '#ff9a9e', marginBottom: '1rem'}}>🚀 Prête à commencer ?</h3>
          <p style={{fontSize: '1.2rem'}}>Les fiches de révision sont prêtes !</p>
          <p style={{fontSize: '1.5rem', marginTop: '1rem'}}>💪 Bon courage Marie !</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      redirectTo(ROUTES.LOGIN);
    }
  }, [user, loading]);

  if (loading) {
    return (
      <Layout title="Accueil" description="Site de préparation au CRPE 2026">
        <div style={{
          maxWidth: '600px',
          margin: '4rem auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>Chargement...</p>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout title="Accueil" description="Site de préparation au CRPE 2026">
        <div style={{
          maxWidth: '600px',
          margin: '4rem auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>Redirection vers la connexion...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Accueil"
      description="Site de préparation au CRPE 2026">
      <HomepageHeader />
      <HomepageContent />
    </Layout>
  );
}
