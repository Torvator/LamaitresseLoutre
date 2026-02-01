import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@site/src/utils/firebase';
import { useAuth } from '@site/src/utils/useAuth';
import QuizQuestion from './QuizQuestion';

/**
 * QuizFiche - Quiz de validation pour une fiche de révision
 * 
 * Props:
 * - ficheId: identifiant de la fiche (ex: "matiere-etats-changements")
 * - questions: tableau de 10 questions au format:
 *   [{ id: 1, question: "...", options: ["A", "B", "C", "D"], correctIndex: 0 }, ...]
 * 
 * Fonctionnement:
 * - L'utilisateur répond aux 10 questions
 * - Il clique sur "Valider"
 * - Score 10/10 = fiche marquée comme MAITRISE + quizReussi: true
 * - Score < 10/10 = message d'encouragement, peut réessayer
 */
export default function QuizFiche({ ficheId, questions }) {
  const { user } = useAuth();
  const [answers, setAnswers] = useState({}); // { questionId: selectedIndex }
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [quizDejaReussi, setQuizDejaReussi] = useState(false);
  const [saving, setSaving] = useState(false);

  // Vérifier si le quiz a déjà été réussi
  useEffect(() => {
    const checkQuizStatus = async () => {
      if (!user) return;
      
      try {
        const ficheRef = doc(db, 'users', user.uid, 'fiches', ficheId);
        const ficheSnap = await getDoc(ficheRef);
        
        if (ficheSnap.exists() && ficheSnap.data().quizReussi) {
          setQuizDejaReussi(true);
        }
      } catch (error) {
        console.error('Erreur vérification quiz:', error);
      }
    };

    checkQuizStatus();
  }, [user, ficheId]);

  // Sélectionner une réponse
  const handleSelect = (questionId, answerIndex) => {
    if (showResults) return;
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  // Valider le quiz
  const handleValidate = async () => {
    // Calculer le score
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    
    setScore(correct);
    setShowResults(true);

    // Si 10/10, sauvegarder dans Firebase
    if (correct === 10 && user) {
      setSaving(true);
      try {
        const ficheRef = doc(db, 'users', user.uid, 'fiches', ficheId);
        await setDoc(ficheRef, {
          statut: 'MAITRISE',
          quizReussi: true,
          quizScore: correct,
          dateQuiz: new Date().toISOString(),
          dateModification: new Date().toISOString(),
        }, { merge: true });
        
        setQuizDejaReussi(true);
      } catch (error) {
        console.error('Erreur sauvegarde quiz:', error);
      }
      setSaving(false);
    }
  };

  // Réinitialiser pour réessayer
  const handleRetry = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  // Nombre de questions répondues
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === 10;

  return (
    <div style={{
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: '#fff9f0',
      borderRadius: '16px',
      border: '2px solid #ffcbb3',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#4a4a4a',
          marginBottom: '0.5rem',
        }}>
          📝 Quiz de validation
        </h2>
        <p style={{ color: '#666' }}>
          Réponds aux 10 questions pour valider cette fiche.
          <br />
          <strong>Objectif : 10/10 pour maîtriser la fiche !</strong>
        </p>
        
        {quizDejaReussi && !showResults && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#e8f5e9',
            borderRadius: '20px',
            display: 'inline-block',
          }}>
            <span style={{ color: '#2e7d32', fontWeight: '600' }}>
              ✓ Quiz déjà réussi ! Tu peux le refaire pour t'entraîner.
            </span>
          </div>
        )}
      </div>

      {/* Questions */}
      <div>
        {questions.map((q, index) => (
          <QuizQuestion
            key={q.id}
            question={q}
            questionNumber={index + 1}
            selectedAnswer={answers[q.id] ?? null}
            onSelect={(answerIndex) => handleSelect(q.id, answerIndex)}
            showResult={showResults}
          />
        ))}
      </div>

      {/* Barre de progression */}
      {!showResults && (
        <div style={{
          marginBottom: '1.5rem',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <div style={{
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '0.5rem',
          }}>
            <div style={{
              height: '100%',
              width: `${(answeredCount / 10) * 100}%`,
              backgroundColor: allAnswered ? '#6bcf7f' : '#ff9a9e',
              transition: 'width 0.3s ease',
            }} />
          </div>
          <span style={{ color: '#666', fontSize: '0.9rem' }}>
            {answeredCount}/10 questions répondues
          </span>
        </div>
      )}

      {/* Bouton Valider */}
      {!showResults && (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleValidate}
            disabled={!allAnswered}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'white',
              backgroundColor: allAnswered ? '#ff9a9e' : '#ccc',
              border: 'none',
              borderRadius: '25px',
              cursor: allAnswered ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s ease',
            }}
          >
            Valider mes réponses
          </button>
        </div>
      )}

      {/* Résultats */}
      {showResults && (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: score === 10 ? '#e8f5e9' : '#fff3e0',
          borderRadius: '16px',
          marginTop: '1rem',
        }}>
          {score === 10 ? (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ color: '#2e7d32', marginBottom: '0.5rem' }}>
                Félicitations Marie !
              </h3>
              <p style={{ color: '#4a4a4a', fontSize: '1.2rem' }}>
                <strong>{score}/10</strong> — Tu maîtrises cette fiche !
              </p>
              {saving && (
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Sauvegarde en cours...
                </p>
              )}
              <p style={{ color: '#666', marginTop: '1rem' }}>
                🦦 La fiche est maintenant marquée comme maîtrisée dans ton suivi.
              </p>
            </>
          ) : (
            <>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💪</div>
              <h3 style={{ color: '#e65100', marginBottom: '0.5rem' }}>
                Encore un petit effort !
              </h3>
              <p style={{ color: '#4a4a4a', fontSize: '1.2rem' }}>
                <strong>{score}/10</strong> — Il te faut 10/10 pour valider.
              </p>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>
                Relis les parties où tu as fait des erreurs et réessaie !
              </p>
            </>
          )}

          {/* Bouton réessayer */}
          <button
            onClick={handleRetry}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#ff9a9e',
              backgroundColor: 'white',
              border: '2px solid #ff9a9e',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            {score === 10 ? "Refaire le quiz" : "Réessayer"}
          </button>
        </div>
      )}
    </div>
  );
}
