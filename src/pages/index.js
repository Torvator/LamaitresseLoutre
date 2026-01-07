import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{
      padding: '4rem 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ffecd2 0%, #ffcbb3 25%, #ffb6b9 50%, #ffc9cb 75%, #ffd89b 100%)',
    }}>
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
          <p style={{fontSize: '1.2rem'}}>Les fiches de révision arrivent bientôt !</p>
          <p style={{fontSize: '1.5rem', marginTop: '1rem'}}>💪 Bon courage Marie !</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil`}
      description="Site de préparation au CRPE 2026">
      <HomepageHeader />
      <HomepageContent />
    </Layout>
  );
}
