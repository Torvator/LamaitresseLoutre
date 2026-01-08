import React, { useEffect } from 'react';
import { useAuth } from '../utils/useAuth';
import { redirectTo, ROUTES } from '../utils/routes';
import Layout from '@theme/Layout';

export default function ProtectedRoute({ children, title, description }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      redirectTo(ROUTES.LOGIN);
    }
  }, [user, loading]);

  if (loading) {
    return (
      <Layout title={title} description={description}>
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
      <Layout title={title} description={description}>
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

  return children;
}
