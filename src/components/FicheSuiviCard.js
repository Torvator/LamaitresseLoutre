import React from 'react';
import Link from '@docusaurus/Link';

/**
 * FicheSuiviCard - Carte de suivi pour une fiche individuelle
 * 
 * Affiche le statut, le badge quiz, et applique une surbrillance
 * spéciale si le quiz a été réussi.
 * 
 * Props:
 * - fiche: { id, titre, url, matiere }
 * - statut: "NON_COMMENCE" | "EN_COURS" | "MAITRISE"
 * - quizReussi: boolean
 */

const STATUTS = {
  NON_COMMENCE: {
    label: 'Non commencé',
    emoji: '🔴',
    color: '#ff6b6b',
    bgColor: '#ffebee',
  },
  EN_COURS: {
    label: 'En cours',
    emoji: '🟡',
    color: '#f9a825',
    bgColor: '#fff8e1',
  },
  MAITRISE: {
    label: 'Maîtrisé',
    emoji: '🟢',
    color: '#6bcf7f',
    bgColor: '#e8f5e9',
  },
};

export default function FicheSuiviCard({ fiche, statut = 'NON_COMMENCE', quizReussi = false }) {
  const currentStatut = STATUTS[statut] || STATUTS.NON_COMMENCE;
  
  // Style de surbrillance si quiz réussi
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    backgroundColor: quizReussi ? '#e8f5e9' : 'white',
    borderRadius: '12px',
    border: quizReussi 
      ? '2px solid #6bcf7f' 
      : '1px solid #e0e0e0',
    boxShadow: quizReussi 
      ? '0 4px 12px rgba(107, 207, 127, 0.3)' 
      : '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  // Effet brillant pour les fiches avec quiz réussi
  const shimmerStyle = quizReussi ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #6bcf7f, #81d4fa, #6bcf7f)',
  } : {};

  return (
    <div style={cardStyle}>
      {/* Barre brillante en haut si quiz réussi */}
      {quizReussi && <div style={shimmerStyle} />}
      
      {/* Titre de la fiche */}
      <Link 
        to={fiche.url}
        style={{
          fontSize: '1rem',
          fontWeight: '600',
          color: '#4a4a4a',
          textDecoration: 'none',
          marginBottom: '0.75rem',
        }}
      >
        {fiche.titre}
      </Link>

      {/* Badges statut + quiz */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        {/* Badge statut */}
        <span style={{
          padding: '0.25rem 0.5rem',
          backgroundColor: currentStatut.bgColor,
          color: currentStatut.color,
          borderRadius: '12px',
          fontSize: '0.75rem',
          fontWeight: '600',
        }}>
          {currentStatut.emoji} {currentStatut.label}
        </span>

        {/* Badge Quiz réussi */}
        {quizReussi && (
          <span style={{
            padding: '0.25rem 0.5rem',
            backgroundColor: '#e3f2fd',
            color: '#1976d2',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            border: '1px solid #90caf9',
          }}>
            📝 Quiz ✓
          </span>
        )}
      </div>
    </div>
  );
}
