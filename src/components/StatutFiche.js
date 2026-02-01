import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '@site/src/utils/firebase';
import { useAuth } from '@site/src/utils/useAuth';

/**
 * StatutFiche - Composant de suivi de progression pour une fiche
 * 
 * Affiche le statut actuel (Non commencé / En cours / Maîtrisé)
 * + Badge "Quiz ✓" si le quiz a été réussi
 * 
 * Props:
 * - ficheId: identifiant unique de la fiche
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

export default function StatutFiche({ ficheId }) {
  const { user } = useAuth();
  const [statut, setStatut] = useState('NON_COMMENCE');
  const [quizReussi, setQuizReussi] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    // Écouter les changements en temps réel
    const ficheRef = doc(db, 'users', user.uid, 'fiches', ficheId);
    const unsubscribe = onSnapshot(ficheRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStatut(data.statut || 'NON_COMMENCE');
        setQuizReussi(data.quizReussi || false);
      }
      setLoading(false);
    }, (error) => {
      console.error('Erreur lecture statut:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, ficheId]);

  const handleChangeStatut = async (nouveauStatut) => {
    if (!user) return;

    try {
      const ficheRef = doc(db, 'users', user.uid, 'fiches', ficheId);
      await setDoc(ficheRef, {
        statut: nouveauStatut,
        dateModification: new Date().toISOString(),
      }, { merge: true });
    } catch (error) {
      console.error('Erreur mise à jour statut:', error);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
        Chargement...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const currentStatut = STATUTS[statut] || STATUTS.NON_COMMENCE;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1.5rem',
      backgroundColor: '#fafafa',
      borderRadius: '12px',
      marginBottom: '2rem',
    }}>
      {/* Ligne statut + badge quiz */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {/* Statut actuel */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '1.2rem' }}>📊</span>
          <span style={{ fontWeight: '500', color: '#4a4a4a' }}>Statut :</span>
          <span style={{
            padding: '0.35rem 0.75rem',
            backgroundColor: currentStatut.bgColor,
            color: currentStatut.color,
            borderRadius: '20px',
            fontWeight: '600',
            fontSize: '0.9rem',
          }}>
            {currentStatut.emoji} {currentStatut.label}
          </span>
        </div>

        {/* Badge Quiz réussi */}
        {quizReussi && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.75rem',
            backgroundColor: '#e3f2fd',
            borderRadius: '20px',
            border: '2px solid #90caf9',
          }}>
            <span style={{ fontSize: '1rem' }}>📝</span>
            <span style={{
              color: '#1976d2',
              fontWeight: '600',
              fontSize: '0.9rem',
            }}>
              Quiz réussi ✓
            </span>
          </div>
        )}
      </div>

      {/* Boutons de changement de statut */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}>
        {Object.entries(STATUTS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleChangeStatut(key)}
            disabled={statut === key}
            style={{
              padding: '0.5rem 1rem',
              border: statut === key ? `2px solid ${value.color}` : '2px solid #e0e0e0',
              borderRadius: '20px',
              backgroundColor: statut === key ? value.bgColor : 'white',
              color: statut === key ? value.color : '#666',
              fontWeight: statut === key ? '600' : '400',
              cursor: statut === key ? 'default' : 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
            }}
          >
            {value.emoji} {value.label}
          </button>
        ))}
      </div>

      {/* Message si quiz non fait mais fiche maîtrisée manuellement */}
      {statut === 'MAITRISE' && !quizReussi && (
        <p style={{
          margin: 0,
          fontSize: '0.85rem',
          color: '#666',
          fontStyle: 'italic',
        }}>
          💡 Pense à faire le quiz en bas de page pour valider tes connaissances !
        </p>
      )}
    </div>
  );
}
