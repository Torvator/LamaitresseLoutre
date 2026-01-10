import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useAuth } from '../utils/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';

// ========================================
// OBJET FICHES - UNIQUEMENT FRANÇAIS POUR L'INSTANT
// ========================================
const FICHES = {
  'Français': [
    { id: 'francais-grammaire', nom: 'Grammaire et étude de la langue', url: '/francais/grammaire' },
    { id: 'francais-lecture', nom: 'Lecture et compréhension', url: '/francais/lecture' },
    { id: 'francais-culture-litteraire', nom: 'Culture littéraire', url: '/francais/culture-litteraire' },
    { id: 'francais-expression-ecrite', nom: 'Expression écrite', url: '/francais/expression-ecrite' },
    { id: 'francais-expression-orale', nom: 'Expression orale', url: '/francais/expression-orale' },
  ],
  // Les autres matières seront ajoutées au fur et à mesure
};

// ========================================
// COMPOSANTS
// ========================================

function BarreProgression({ progression }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ 
        width: '100%', 
        backgroundColor: '#e0e0e0', 
        borderRadius: '10px', 
        height: '30px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${progression}%`, 
          backgroundColor: '#4caf50', 
          height: '100%',
          transition: 'width 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px'
        }}>
          <span style={{ 
            color: 'white', 
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            {Math.round(progression)}%
          </span>
        </div>
      </div>
    </div>
  );
}

function ListeFiches({ matiere, fiches, fichesValidees, onToggle }) {
  // Ne pas afficher les matières vides
  if (!fiches || fiches.length === 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ 
        borderBottom: '3px solid #2e8555', 
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        {matiere}
      </h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {fiches.map((fiche) => {
          const estValidee = fichesValidees[fiche.id] || false;
          return (
            <div 
              key={fiche.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: estValidee ? '#e8f5e9' : '#fff',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ flex: 1 }}>
                <a 
                  href={fiche.url} 
                  style={{ 
                    textDecoration: 'none', 
                    color: '#1976d2',
                    fontWeight: '500',
                    fontSize: '1.1rem'
                  }}
                >
                  {fiche.nom}
                </a>
              </div>
              <button
                onClick={() => onToggle(fiche.id)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '5px',
                  border: 'none',
                  backgroundColor: estValidee ? '#4caf50' : '#9e9e9e',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s ease'
                }}
              >
                {estValidee ? '✓ Maîtrisée' : 'Non commencée'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SuiviContent() {
  const { user } = useAuth();
  const [fichesValidees, setFichesValidees] = useState({});
  const [loading, setLoading] = useState(true);

  // Charger les fiches validées depuis Firebase
  useEffect(() => {
    async function chargerProgression() {
      if (!user) return;
      
      try {
        const fichesRef = collection(db, `users/${user.uid}/fiches`);
        const snapshot = await getDocs(fichesRef);
        
        const validees = {};
        snapshot.forEach((doc) => {
          validees[doc.id] = doc.data().validee || false;
        });
        
        setFichesValidees(validees);
      } catch (error) {
        console.error('Erreur chargement progression:', error);
      } finally {
        setLoading(false);
      }
    }

    chargerProgression();
  }, [user]);

  // Calculer la progression globale
  const totalFiches = Object.values(FICHES).flat().length;
  const fichesValidees_count = Object.values(fichesValidees).filter(Boolean).length;
  const progression = totalFiches > 0 ? (fichesValidees_count / totalFiches) * 100 : 0;

  // Fonction pour toggle l'état d'une fiche
  const toggleFiche = async (ficheId) => {
    const nouvelEtat = !fichesValidees[ficheId];
    setFichesValidees(prev => ({ ...prev, [ficheId]: nouvelEtat }));

    // Sauvegarder dans Firebase
    if (user) {
      try {
        const { setDoc, doc } = await import('firebase/firestore');
        await setDoc(doc(db, `users/${user.uid}/fiches/${ficheId}`), {
          validee: nouvelEtat,
          dateModification: new Date()
        });
      } catch (error) {
        console.error('Erreur sauvegarde:', error);
      }
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <p>Chargement de votre progression...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        📊 Suivi de révisions CRPE 2026
      </h1>

      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '1.5rem', 
        borderRadius: '10px',
        marginBottom: '3rem'
      }}>
        <h3 style={{ marginTop: 0 }}>Progression globale</h3>
        <BarreProgression progression={progression} />
        <p style={{ textAlign: 'center', margin: 0, color: '#666' }}>
          {fichesValidees_count} / {totalFiches} fiches maîtrisées
        </p>
      </div>

      {Object.entries(FICHES).map(([matiere, fiches]) => (
        <ListeFiches
          key={matiere}
          matiere={matiere}
          fiches={fiches}
          fichesValidees={fichesValidees}
          onToggle={toggleFiche}
        />
      ))}
      
      <div style={{ 
        marginTop: '3rem', 
        padding: '1.5rem', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, color: '#1976d2', fontWeight: '500' }}>
          🚀 D'autres matières arrivent bientôt : Mathématiques, Anglais, Histoire-Géo, Sciences, Arts, EPS !
        </p>
      </div>
    </div>
  );
}

export default function Suivi() {
  return (
    <Layout title="Suivi des révisions" description="Suivez votre progression">
      <ProtectedRoute>
        <SuiviContent />
      </ProtectedRoute>
    </Layout>
  );
}
