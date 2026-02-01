import React from 'react';
import Link from '@docusaurus/Link';

/**
 * LienFiche - Bouton pour retourner à la fiche depuis un quiz
 * 
 * À placer en haut de chaque page quiz.
 * 
 * Props:
 * - fichePath: chemin vers la fiche (ex: "/docs/sciences/matiere-etats")
 * - titre: titre de la fiche (optionnel)
 */
export default function LienFiche({ fichePath, titre = "la fiche" }) {
  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1rem 1.5rem',
      backgroundColor: '#fff3e0',
      borderRadius: '12px',
      border: '1px solid #ffcc80',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <span style={{ fontSize: '1.5rem' }}>💡</span>
        <span style={{ color: '#e65100', fontWeight: '500' }}>
          Besoin de réviser avant le quiz ?
        </span>
      </div>
      
      <Link
        to={fichePath}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1.25rem',
          backgroundColor: 'white',
          color: '#e65100',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '0.9rem',
          textDecoration: 'none',
          border: '2px solid #ffcc80',
          transition: 'all 0.2s ease',
        }}
      >
        📚 Revoir {titre}
      </Link>
    </div>
  );
}
