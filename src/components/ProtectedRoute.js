import React from 'react';
import { useAuth } from '../utils/useAuth';
import Layout from '@theme/Layout';
import { Redirect } from '@docusaurus/router';

export default function ProtectedRoute({ children, title, description }) {
  const { user, loading } = useAuth();

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
    return <Redirect to="/login" />;
  }

  return children;
}
