import React from 'react';
import Link from '@docusaurus/Link';

/**
 * LienQuiz - Bouton pour accéder au quiz depuis une fiche
 * 
 * À placer en bas de chaque fiche MDX, avant le message d'encouragement.
 * 
 * Props:
 * - quizPath: chemin vers le quiz (ex: "/quiz/sciences/matiere-etats")
 * - matiere: nom de la matière pour personnaliser le message (optionnel)
 */
export default function LienQuiz({ quizPath, matiere = "cette notion" }) {
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
        Valide ta maîtrise de {matiere} avec un quiz de 10 questions.
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
