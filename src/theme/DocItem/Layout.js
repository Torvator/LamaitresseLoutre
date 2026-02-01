import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import ProtectedRoute from '@site/src/components/ProtectedRoute';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

/**
 * Composant bouton Quiz intégré
 * Apparaît automatiquement en bas de chaque fiche
 */
function BoutonQuiz({ ficheId, matiere }) {
  const quizPath = `/quiz/${matiere}/${ficheId}`;
  
  return (
    <div style={{
      marginTop: '3rem',
      marginBottom: '2rem',
      padding: '2rem',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
      borderRadius: '16px',
      border: '2px solid #90caf9',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        📝
      </div>
      
      <h3 style={{
        margin: '0 0 0.5rem 0',
        color: '#1565c0',
        fontSize: '1.3rem',
      }}>
        Prête à tester tes connaissances ?
      </h3>
      
      <p style={{
        color: '#666',
        marginBottom: '1.5rem',
        fontSize: '1rem',
      }}>
        Valide ta maîtrise de cette notion avec un quiz de 10 questions.
        <br />
        <strong>Objectif : 10/10 pour débloquer la compétence !</strong>
      </p>
      
      <Link
        to={quizPath}
        style={{
          display: 'inline-block',
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
      >
        🎯 Faire le quiz
      </Link>
      
      <p style={{
        marginTop: '1rem',
        marginBottom: 0,
        color: '#888',
        fontSize: '0.85rem',
      }}>
        Tu peux refaire le quiz autant de fois que tu veux !
      </p>
    </div>
  );
}

/**
 * Extrait la matière et l'ID de fiche depuis l'URL
 * Ex: /docs/sciences/matiere-etats-changements 
 *     → { matiere: 'sciences', ficheId: 'matiere-etats-changements' }
 */
function extractFicheInfo(pathname) {
  // Pattern: /docs/[matiere]/[ficheId]
  const match = pathname.match(/\/docs\/([^/]+)\/([^/]+)\/?$/);
  
  if (match) {
    return {
      matiere: match[1],
      ficheId: match[2],
    };
  }
  
  return null;
}

/**
 * Liste des quiz disponibles
 * Ajoute ici les quiz au fur et à mesure que tu les crées
 * Format: 'matiere/ficheId'
 */
const QUIZ_DISPONIBLES = [
  'sciences/matiere-etats-changements',
  // Ajoute les nouveaux quiz ici :
  // 'sciences/melanges-solutions',
  // 'maths/fractions-nombres-rationnels',
  // 'histoire/prehistoire',
  // etc.
];

/**
 * Vérifie si un quiz existe pour cette fiche
 */
function quizExiste(matiere, ficheId) {
  return QUIZ_DISPONIBLES.includes(`${matiere}/${ficheId}`);
}

/**
 * Layout wrapper pour les fiches
 * - Protège avec authentification
 * - Ajoute automatiquement le bouton Quiz si le quiz existe
 */
export default function DocItemLayoutWrapper(props) {
  const location = useLocation();
  const ficheInfo = extractFicheInfo(location.pathname);
  
  // Vérifie si on est sur une fiche (pas sur /docs/intro par exemple)
  const estUneFiche = ficheInfo !== null;
  
  // Vérifie si un quiz existe pour cette fiche
  const aUnQuiz = estUneFiche && quizExiste(ficheInfo.matiere, ficheInfo.ficheId);

  return (
    <ProtectedRoute>
      <Layout {...props} />
      
      {/* Affiche le bouton Quiz seulement si le quiz existe */}
      {aUnQuiz && (
        <div className="container margin-top--lg margin-bottom--lg">
          <BoutonQuiz 
            matiere={ficheInfo.matiere} 
            ficheId={ficheInfo.ficheId} 
          />
        </div>
      )}
    </ProtectedRoute>
  );
}
