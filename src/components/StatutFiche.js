import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useAuth } from '../utils/useAuth';

const STATUTS = {
  NON_COMMENCE: { emoji: '🔴', label: 'Non commencé', couleur: '#ff6b6b' },
  EN_COURS: { emoji: '🟡', label: 'En cours', couleur: '#ffd93d' },
  MAITRISE: { emoji: '🟢', label: 'Maîtrisé', couleur: '#6bcf7f' },
};

export default function StatutFiche({ ficheId }) {
  const [statut, setStatut] = useState('NON_COMMENCE');
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Charger le statut depuis Firebase
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const chargerStatut = async () => {
      try {
        const docRef = doc(db, 'users', user.uid, 'fiches', ficheId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setStatut(data.statut || 'NON_COMMENCE');
        }
      } catch (error) {
        console.error('Erreur chargement statut:', error);
      } finally {
        setLoading(false);
      }
    };

    chargerStatut();
  }, [ficheId, user]);

  // Fonction pour changer de statut
  const changerStatut = async () => {
    if (!user) {
      alert('Vous devez être connecté pour modifier le statut');
      return;
    }

    const ordreStatuts = ['NON_COMMENCE', 'EN_COURS', 'MAITRISE'];
    const indexActuel = ordreStatuts.indexOf(statut);
    const nouveauStatut = ordreStatuts[(indexActuel + 1) % ordreStatuts.length];
    
    setStatut(nouveauStatut);

    // Sauvegarder dans Firebase
    try {
      const docRef = doc(db, 'users', user.uid, 'fiches', ficheId);
      await setDoc(docRef, {
        statut: nouveauStatut,
        dateModification: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Erreur sauvegarde statut:', error);
      alert('Erreur lors de la sauvegarde. Vérifiez votre connexion.');
    }
  };

  if (loading) {
    return (
      <div style={{
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#fff9f0',
        borderRadius: '12px',
        textAlign: 'center',
      }}>
        <span>Chargement...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#fff9f0',
        borderRadius: '12px',
        border: '2px solid #ff9a9e',
      }}>
        <p style={{ margin: 0, textAlign: 'center', color: '#4a4a4a' }}>
          🔒 Connectez-vous pour suivre votre progression
        </p>
      </div>
    );
  }

  const statutActuel = STATUTS[statut];

  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1rem',
      backgroundColor: '#fff9f0',
      borderRadius: '12px',
      border: `2px solid ${statutActuel.couleur}`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '1.5rem' }}>{statutActuel.emoji}</span>
          <span style={{ 
            fontWeight: '600',
            color: statutActuel.couleur,
          }}>
            {statutActuel.label}
          </span>
        </div>
        
        <button
          onClick={changerStatut}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: statutActuel.couleur,
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Changer le statut
        </button>
      </div>
    </div>
  );
}
