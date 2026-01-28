import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import ProtectedRoute from '@site/src/components/ProtectedRoute';

export default function DocItemLayoutWrapper(props) {
  return (
    <ProtectedRoute 
      title="Accès restreint" 
      description="Cette ressource est réservée aux utilisateurs connectés."
    >
      <Layout {...props} />
    </ProtectedRoute>
  );
}