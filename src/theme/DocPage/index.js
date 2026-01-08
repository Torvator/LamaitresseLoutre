import React, { useEffect } from 'react';
import DocPage from '@theme-original/DocPage';
import { useAuth } from '../../utils/useAuth';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';

export default function DocPageWrapper(props) {
  const { user, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!loading && !user) {
      history.push('/login');
    }
  }, [user, loading, history]);

  if (loading) {
    return (
      <Layout>
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
      <Layout>
        <div style={{
          maxWidth: '600px',
          margin: '4rem auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>Redirection...</p>
        </div>
      </Layout>
    );
  }

  return <DocPage {...props} />;
}
