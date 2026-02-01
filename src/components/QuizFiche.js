import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@site/src/utils/firebase';
import { useAuth } from '@site/src/utils/useAuth';
import Link from '@docusaurus/Link';
import QuizQuestion from './QuizQuestion';

/**
 * QuizFiche - Quiz de validation pour une fiche de révision
 * 
 * Props:
 * - ficheId: identifiant de la fiche (ex: "matiere-etats-changements")
 * - matiere: nom de la matière (ex: "sciences") - pour le lien retour
 * - questions: tableau de 10 questions au format:
 *   [{ 
 *     id: 1, 
 *     question: "...", 
 *     options: ["A", "B", "C", "D"], 
 *     correctIndex: 0,
 *     explication: "..." // optionnel - affiché dans la correction
 *   }, ...]
 * 
 * Fonctionnement:
 * - L'utilisateur répond aux 10 questions
 * - Il clique sur "Valider"
 * - Score 10/10 = fiche marquée comme MAITRISE + quizReussi: true
 * - Bouton "Voir la correction" pour afficher les bonnes réponses
 * - Lien vers la fiche pour réviser
 */
export default function QuizFiche({ ficheId, matiere, questions }) {
  const { user } = useAuth();
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [score, setScore] = useState(0);
  const [quizDejaReussi, setQuizDejaReussi] = useState(false);
  const [saving, setSaving] = useState(false);

  // Construire le chemin vers la fiche
  const fichePath = `/docs/${matiere}/${ficheId}`;

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
    setShowCorrection(false);
    setScore(0);
  };

  // Afficher/masquer la correction
  const toggleCorrection = () => {
    setShowCorrection(!showCorrection);
  };

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
                Consulte la correction et relis la fiche pour progresser !
              </p>
            </>
          )}

          {/* Boutons d'action */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1.5rem',
          }}>
            {/* Bouton Voir la correction */}
            <button
              onClick={toggleCorrection}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1976d2',
                backgroundColor: 'white',
                border: '2px solid #1976d2',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {showCorrection ? '🔼 Masquer la correction' : '🔽 Voir la correction'}
            </button>

            {/* Bouton Réessayer */}
            <button
              onClick={handleRetry}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#ff9a9e',
                backgroundColor: 'white',
                border: '2px solid #ff9a9e',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              🔄 {score === 10 ? "Refaire le quiz" : "Réessayer"}
            </button>
          </div>
        </div>
      )}

      {/* Section Correction */}
      {showCorrection && (
        <div style={{
          marginTop: '2rem',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '2px solid #e0e0e0',
        }}>
          <h3 style={{
            color: '#4a4a4a',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>
            📋 Correction détaillée
          </h3>

          {questions.map((q, index) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctIndex;
            
            return (
              <div
                key={q.id}
                style={{
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: isCorrect ? '#e8f5e9' : '#ffebee',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${isCorrect ? '#6bcf7f' : '#ff6b6b'}`,
                }}
              >
                {/* Question */}
                <p style={{
                  fontWeight: '600',
                  color: '#4a4a4a',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    lineHeight: '24px',
                    textAlign: 'center',
                    backgroundColor: isCorrect ? '#6bcf7f' : '#ff6b6b',
                    color: 'white',
                    borderRadius: '50%',
                    marginRight: '0.5rem',
                    fontSize: '0.8rem',
                  }}>
                    {index + 1}
                  </span>
                  {q.question}
                </p>

                {/* Réponse de l'utilisateur si incorrecte */}
                {!isCorrect && userAnswer !== undefined && (
                  <p style={{
                    color: '#c62828',
                    fontSize: '0.9rem',
                    marginBottom: '0.25rem',
                  }}>
                    ❌ Ta réponse : <strong>{q.options[userAnswer]}</strong>
                  </p>
                )}

                {/* Bonne réponse */}
                <p style={{
                  color: '#2e7d32',
                  fontSize: '0.9rem',
                  marginBottom: '0.25rem',
                }}>
                  ✅ Bonne réponse : <strong>{q.options[q.correctIndex]}</strong>
                </p>

                {/* Explication si disponible */}
                {q.explication && (
                  <p style={{
                    color: '#666',
                    fontSize: '0.85rem',
                    marginTop: '0.5rem',
                    fontStyle: 'italic',
                    paddingLeft: '1rem',
                    borderLeft: '2px solid #ddd',
                  }}>
                    💡 {q.explication}
                  </p>
                )}
              </div>
            );
          })}

          {/* Lien vers la fiche */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: '#fff3e0',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <p style={{
              color: '#e65100',
              fontWeight: '500',
              marginBottom: '1rem',
            }}>
              📚 Besoin de réviser certaines notions ?
            </p>
            <Link
              to={fichePath}
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                backgroundColor: '#ff9800',
                color: 'white',
                borderRadius: '20px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              📖 Revoir la fiche de cours
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
