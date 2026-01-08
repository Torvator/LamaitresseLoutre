import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useAuth } from '../utils/useAuth';
import { redirectTo, ROUTES } from '../utils/routes';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('login'); // 'login' ou 'signup'
  const { user } = useAuth();

  // Rediriger vers l'accueil si déjà connecté
  useEffect(() => {
    if (user) {
      redirectTo(ROUTES.HOME);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      // La redirection se fera automatiquement via useEffect
    } catch (err) {
      console.error('Erreur:', err);
      if (err.code === 'auth/invalid-credential') {
        setError('Email ou mot de passe incorrect');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Cet email est déjà utilisé');
      } else if (err.code === 'auth/weak-password') {
        setError('Le mot de passe doit contenir au moins 6 caractères');
      } else if (err.code === 'auth/invalid-email') {
        setError('Email invalide');
      } else {
        setError('Une erreur est survenue. Réessayez.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      redirectTo(ROUTES.LOGIN);
    } catch (err) {
      console.error('Erreur déconnexion:', err);
    }
  };

  if (user) {
    return (
      <Layout title="Connexion" description="Espace de connexion">
        <div style={{
          maxWidth: '500px',
          margin: '4rem auto',
          padding: '0 2rem',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
            textAlign: 'center',
          }}>
            <h1 style={{ color: '#ff9a9e', marginBottom: '2rem' }}>🦦 Connectée !</h1>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Tu es connectée en tant que : <br />
              <strong>{user.email}</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <a
                href="/LamaitresseLoutre/"
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#ff9a9e',
                  color: 'white',
                  textDecoration: 'none',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  display: 'inline-block',
                }}
              >
                🏠 Retour à l'accueil
              </a>

              <button
                onClick={handleLogout}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                🚪 Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Connexion" description="Espace de connexion">
      <div style={{
        maxWidth: '500px',
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
            🦦 {mode === 'login' ? 'Connexion' : 'Créer un compte'}
          </h1>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#4a4a4a',
              }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #ffe5e6',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#4a4a4a',
              }}>
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #ffe5e6',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
              {mode === 'signup' && (
                <small style={{ color: '#666', fontSize: '0.85rem' }}>
                  Minimum 6 caractères
                </small>
              )}
            </div>

            {error && (
              <div style={{
                padding: '0.75rem',
                backgroundColor: '#ffe5e6',
                color: '#ff6b6b',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: loading ? '#ccc' : '#ff9a9e',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              {loading ? 'Chargement...' : (mode === 'login' ? 'Se connecter' : 'Créer mon compte')}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => {
                setMode(mode === 'login' ? 'signup' : 'login');
                setError('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#ff9a9e',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '0.95rem',
              }}
            >
              {mode === 'login' ? 'Pas encore de compte ? Créer un compte' : 'Déjà un compte ? Se connecter'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
