import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import ProtectedRoute from '@site/src/components/ProtectedRoute';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

// ============================================================================
// LISTE DES QUIZ DISPONIBLES
// ⚠️ METTRE À JOUR CETTE LISTE QUAND ON AJOUTE UN NOUVEAU QUIZ
// Format : 'matiere/ficheId' (doit correspondre au chemin dans /quiz/)
// ============================================================================
const QUIZ_DISPONIBLES = [
  // 📝 Français (5 quiz)
  'francais/grammaire',
  'francais/lecture',
  'francais/culture-litteraire',
  'francais/expression-ecrite',
  'francais/expression-orale',
  
  // 🔢 Mathématiques (12 quiz)
  'maths/nombres-entiers-decimaux',
  'maths/fractions-nombres-rationnels',
  'maths/nombres-relatifs',
  'maths/puissances-racines-carrees',
  'maths/calcul-litteral',
  'maths/durees-calculs',
  'maths/organisation-gestion-donnees',
  'maths/grandeurs-mesures',
  'maths/geometrie-plane',
  'maths/geometrie-espace',
  'maths/reperage',
  'maths/algorithmique-programmation',
  
  // 📜 Histoire (à venir)
  // 'histoire/prehistoire',
  // ...
  
  // 🌍 Géographie (à venir)
  // 'geographie/geo_lieux_habite',
  // ...
  
  // 🌈 EMC (à venir)
  // 'emc/emc_sensibilite',
  // ...
  
  // 🔬 Sciences (à venir)
  // 'sciences/matiere-etats-changements',
  // ...
  
  // 🎨 Arts (à venir)
  // 'arts/arts-plastiques-fondamentaux',
  // ...
  
  // ⚽ EPS (à venir)
  // 'eps/eps-didactique-developpement',
  // ...
  
  // 🇬🇧 Anglais (à venir)
  // 'anglais/anglais-grammaire',
  // ...
];

/**
 * Bouton stylisé pour accéder au quiz
 */
function BoutonQuiz({ ficheId, matiere }) {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '3rem 0',
        padding: '2rem',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        borderRadius: '16px',
      }}
    >
      <Link
        to={`/LamaitresseLoutre/quiz/${matiere}/${ficheId}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 2.5rem',
          backgroundColor: '#1976d2',
          color: 'white',
          borderRadius: '25px',
          fontWeight: '600',
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#1565c0';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(25, 118, 210, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#1976d2';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
        }}
      >
        <span style={{ fontSize: '1.3rem' }}>📝</span>
        <span>Faire le quiz</span>
        <span style={{ fontSize: '1.3rem' }}>→</span>
      </Link>
    </div>
  );
}

/**
 * Extrait la matière et l'ID de fiche depuis le pathname
 * @param {string} pathname - Ex: /LamaitresseLoutre/fiches/francais/grammaire
 * @returns {{ matiere: string, ficheId: string } | null}
 */
function extractFicheInfo(pathname) {
  // Pattern pour /LamaitresseLoutre/fiches/{matiere}/{ficheId}
  const match = pathname.match(/\/fiches\/([^/]+)\/([^/]+)\/?$/);
  if (match) {
    return { 
      matiere: match[1], 
      ficheId: match[2] 
    };
  }
  return null;
}

/**
 * Vérifie si un quiz existe pour cette fiche
 * @param {string} matiere 
 * @param {string} ficheId 
 * @returns {boolean}
 */
function quizExiste(matiere, ficheId) {
  return QUIZ_DISPONIBLES.includes(`${matiere}/${ficheId}`);
}

/**
 * Wrapper pour toutes les pages de fiches (DocItem)
 * - Protège l'accès avec authentification
 * - Affiche automatiquement le bouton Quiz si un quiz existe
 */
export default function DocItemLayoutWrapper(props) {
  const location = useLocation();
  const ficheInfo = extractFicheInfo(location.pathname);
  const aUnQuiz = ficheInfo && quizExiste(ficheInfo.matiere, ficheInfo.ficheId);

  return (
    <ProtectedRoute>
      <Layout {...props} />
      {aUnQuiz && (
        <BoutonQuiz 
          matiere={ficheInfo.matiere} 
          ficheId={ficheInfo.ficheId} 
        />
      )}
    </ProtectedRoute>
  );
}
