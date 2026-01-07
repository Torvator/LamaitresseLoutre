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
        <h2 style={{color: '#ff9a9e', marginBottom: '2rem'}}>🦦 Bienvenue Marie !</h2>
        
        <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
          Bienvenue sur ton espace personnel de préparation au <strong>CRPE 2026</strong>.
        </p>

        <h3 style={{color: '#3d3d3d', marginTop: '2rem', marginBottom: '1rem'}}>📅 Planning général</h3>
        <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          <li><strong>Janvier-Février</strong> : Fondations (Français + Mathématiques)</li>
          <li><strong>Mars</strong> : Entraînement intensif</li>
          <li><strong>Avril</strong> : Épreuves écrites (L3 + M2)</li>
          <li><strong>Mai-Juin</strong> : Oraux (si admissible)</li>
        </ul>

        <h3 style={{color: '#3d3d3d', marginTop: '2rem', marginBottom: '1rem'}}>🎯 Tes objectifs</h3>
        
        <h4 style={{color: '#ff9a9e', marginTop: '1.5rem'}}>Concours L3 (priorité)</h4>
        <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          <li>✅ Maîtriser le socle cycle 4</li>
          <li>✅ Éviter les notes éliminatoires</li>
          <li>✅ Score cible : <strong>12/20 minimum</strong> partout</li>
        </ul>

        <h4 style={{color: '#ff9a9e', marginTop: '1.5rem'}}>Concours M2 (bonus)</h4>
        <ul style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          <li>✅ Approfondir la didactique</li>
          <li>✅ Double chance de réussite !</li>
        </ul>

        <h3 style={{color: '#3d3d3d', marginTop: '2rem', marginBottom: '1rem'}}>📊 Progression actuelle</h3>
        <div style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <p><strong>Français</strong> : 🦦⚪⚪⚪⚪ (0/5)</p>
          <p><strong>Mathématiques</strong> : 🦦⚪⚪⚪⚪ (0/5)</p>
          <p><strong>Pluridisciplinaire</strong> : 🦦⚪⚪⚪⚪ (0/5)</p>
          <p><strong>Oraux</strong> : 🦦⚪⚪⚪⚪ (0/5)</p>
        </div>

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
