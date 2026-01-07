import React from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../utils/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useHistory, Redirect } from '@docusaurus/router';

export default function Profil() {
  const { user, loading } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirection forcée
      window.location.href = '/LamaitresseLoutre/login';
    } catch (err) {
      console.error('Erreur déconnexion:', err);
      alert('Erreur lors de la déconnexion');
    }
  };

  if (loading) {
    return (
      <Layout title="Profil" description="Mon profil">
        <div style={{
          maxWidth: '600px',
          margin: '4rem auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem' }}>Chargement...</p>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout title="Profil" description="Mon profil">
      <div style={{
        maxWidth: '600px',
        margin: '4rem auto',
        padding: '0 2rem',
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
        }}>
          <h1 style={{ color: '#ff9a9e', textAlign: 'center', marginBottom: '2rem' }}>
            🦦 Mon Profil
          </h1>

          <div style={{
            padding: '1.5rem',
            backgroundColor: '#fff9f0',
            borderRadius: '12px',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
              Connectée en tant que :
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#4a4a4a', margin: 0 }}>
              {user.email}
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleLogout}
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1.1rem',
                width: '100%',
                maxWidth: '300px',
                boxShadow: '0 4px 8px rgba(255, 107, 107, 0.3)',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ff5252';
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#ff6b6b';
                e.target.style.transform = 'scale(1)';
              }}
            >
              🚪 Se déconnecter
            </button>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#ffe5e6',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              💡 <strong>Astuce :</strong> Tes données sont synchronisées sur tous tes appareils !
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="/"
              style={{
                color: '#ff9a9e',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
