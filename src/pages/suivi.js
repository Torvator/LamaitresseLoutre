import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useAuth } from '../utils/useAuth';

const FICHES = {
  'Français': [
    { id: 'francais-test1', nom: 'Test 1', url: '/fiches/francais/test1' },
    { id: 'francais-test2', nom: 'Test 2', url: '/fiches/francais/test2' },
    { id: 'francais-test3', nom: 'Test 3', url: '/fiches/francais/test3' },
  ],
  'Mathématiques': [
    { id: 'maths-test1', nom: 'Test 1', url: '/fiches/mathematiques/test1' },
    { id: 'maths-test2', nom: 'Test 2', url: '/fiches/mathematiques/test2' },
  ],
  'Pluridisciplinaire': [
    { id: 'pluri-test1', nom: 'Test 1', url: '/fiches/pluridisciplinaire/test1' },
  ],
};

function BarreProgression({ label, total, maitrise, enCours }) {
  const pourcentageMaitrise = total > 0 ? (maitrise / total) * 100 : 0;
  const pourcentageEnCours = total > 0 ? (enCours / total) * 100 : 0;
  const pourcentageNonCommence = 100 - pourcentageMaitrise - pourcentageEnCours;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
      }}>
        <strong style={{ fontSize: '1.1rem' }}>{label}</strong>
        <span style={{ color: '#666' }}>
          {maitrise}/{total} maîtrisées
        </span>
      </div>
      
      <div style={{
        width: '100%',
        height: '30px',
        backgroundColor: '#f0f0f0',
        borderRadius: '15px',
        overflow: 'hidden',
        display: 'flex',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          width: `${pourcentageMaitrise}%`,
          backgroundColor: '#6bcf7f',
          transition: 'width 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: '0.85rem',
        }}>
          {pourcentageMaitrise > 10 && `${Math.round(pourcentageMaitrise)}%`}
        </div>
        
        <div style={{
          width: `${pourcentageEnCours}%`,
          backgroundColor: '#ffd93d',
          transition: 'width 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4a4a4a',
          fontWeight: '600',
          fontSize: '0.85rem',
        }}>
          {pourcentageEnCours > 10 && `${Math.round(pourcentageEnCours)}%`}
        </div>
        
        <div style={{
          width: `${pourcentageNonCommence}%`,
          backgroundColor: '#ff6b6b',
          transition: 'width 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: '0.85rem',
        }}>
          {pourcentageNonCommence > 10 && `${Math.round(pourcentageNonCommence)}%`}
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#666',
      }}>
        <span>🟢 {maitrise} Maîtrisées</span>
        <span>🟡 {enCours} En cours</span>
        <span>🔴 {total - maitrise - enCours} Non commencées</span>
      </div>
    </div>
  );
}

function ListeFiches({ fiches, titre, statut, couleur }) {
  if (fiches.length === 0) return null;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: couleur, marginBottom: '1rem' }}>
        {titre} ({fiches.length})
      </h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fiches.map(fiche => (
          <li key={fiche.id} style={{
            padding: '0.75rem',
            marginBottom: '0.5rem',
            backgroundColor: '#fff9f0',
            borderRadius: '8px',
            borderLeft: `4px solid ${couleur}`,
          }}>
            <a href={fiche.url} style={{
              textDecoration: 'none',
              color: '#4a4a4a',
              fontWeight: '500',
            }}>
              {fiche.matiere} → {fiche.nom}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Suivi() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const chargerStats = async () => {
      try {
        const statsParMatiere = {};
        const toutesLesFiches = {
          maitrisees: [],
          enCours: [],
          nonCommencees: [],
        };

        // Récupérer toutes les fiches depuis Firebase
        const fichesRef = collection(db, 'users', user.uid, 'fiches');
        const fichesSnapshot = await getDocs(fichesRef);
        
        const statutsMap = {};
        fichesSnapshot.forEach((doc) => {
          statutsMap[doc.id] = doc.data().statut;
        });

        Object.entries(FICHES).forEach(([matiere, fiches]) => {
          const maitrise = fiches.filter(f => statutsMap[f.id] === 'MAITRISE').length;
          const enCours = fiches.filter(f => statutsMap[f.id] === 'EN_COURS').length;

          statsParMatiere[matiere] = {
            total: fiches.length,
            maitrise,
            enCours,
          };

          fiches.forEach(fiche => {
            const statut = statutsMap[fiche.id];
            const ficheAvecMatiere = { ...fiche, matiere };
            
            if (statut === 'MAITRISE') {
              toutesLesFiches.maitrisees.push(ficheAvecMatiere);
            } else if (statut === 'EN_COURS') {
              toutesLesFiches.enCours.push(ficheAvecMatiere);
            } else {
              toutesLesFiches.nonCommencees.push(ficheAvecMatiere);
            }
          });
        });

        setStats({ statsParMatiere, toutesLesFiches });
      } catch (error) {
        console.error('Erreur chargement stats:', error);
      } finally {
        setLoading(false);
      }
    };

    chargerStats();
  }, [user]);

  if (loading) {
    return (
      <Layout title="Suivi de progression" description="Suivi de ta progression CRPE">
        <div style={{
          maxWidth: '1000px',
          margin: '4rem auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem' }}>Chargement de ta progression...</p>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout title="Suivi de progression" description="Suivi de ta progression CRPE">
        <div style={{
          maxWidth: '600px',
          margin: '4rem auto',
          padding: '0 2rem',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
            textAlign: 'center',
          }}>
            <h1 style={{ color: '#ff9a9e', marginBottom: '2rem' }}>🔒 Connexion requise</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Tu dois te connecter pour voir ta progression !
            </p>
            <a
              href="/login"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                backgroundColor: '#ff9a9e',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              Se connecter
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  const { statsParMatiere = {}, toutesLesFiches = {} } = stats;
  
  const totalFiches = Object.values(FICHES).reduce((acc, fiches) => acc + fiches.length, 0);
  const totalMaitrise = Object.values(statsParMatiere).reduce((acc, s) => acc + (s?.maitrise || 0), 0);
  const totalEnCours = Object.values(statsParMatiere).reduce((acc, s) => acc + (s?.enCours || 0), 0);

  return (
    <Layout title="Suivi de progression" description="Suivi de ta progression CRPE">
      <div style={{
        maxWidth: '1000px',
        margin: '2rem auto',
        padding: '0 2rem',
      }}>
        {/* En-tête */}
        <div style={{
          background: 'linear-gradient(135deg, #ffecd2 0%, #ffcbb3 25%, #ffb6b9 50%, #ffc9cb 75%, #ffd89b 100%)',
          padding: '2rem',
          borderRadius: '16px',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{ color: '#3d3d3d', marginBottom: '1rem' }}>
            📊 Suivi de Progression
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>
            Continue comme ça Marie ! 💪
          </p>
        </div>

        {/* Progression globale */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
          marginBottom: '2rem',
        }}>
          <h2 style={{ color: '#ff9a9e', marginBottom: '2rem' }}>
            🎯 Progression Globale
          </h2>
          
          <BarreProgression
            label="Toutes matières"
            total={totalFiches}
            maitrise={totalMaitrise}
            enCours={totalEnCours}
          />
        </div>

        {/* Progression par matière */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
          marginBottom: '2rem',
        }}>
          <h2 style={{ color: '#ff9a9e', marginBottom: '2rem' }}>
            📚 Par Matière
          </h2>
          
          {Object.entries(statsParMatiere).map(([matiere, stat]) => (
            <BarreProgression
              key={matiere}
              label={matiere}
              total={stat.total}
              maitrise={stat.maitrise}
              enCours={stat.enCours}
            />
          ))}
        </div>

        {/* Listes de fiches par statut */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
        }}>
          <h2 style={{ color: '#ff9a9e', marginBottom: '2rem' }}>
            📝 Détail des Fiches
          </h2>
          
          <ListeFiches
            fiches={toutesLesFiches.maitrisees || []}
            titre="🟢 Fiches Maîtrisées"
            statut="MAITRISE"
            couleur="#6bcf7f"
          />
          
          <ListeFiches
            fiches={toutesLesFiches.enCours || []}
            titre="🟡 Fiches En Cours"
            statut="EN_COURS"
            couleur="#ffd93d"
          />
          
          <ListeFiches
            fiches={toutesLesFiches.nonCommencees || []}
            titre="🔴 Fiches Non Commencées"
            statut="NON_COMMENCE"
            couleur="#ff6b6b"
          />
        </div>

        {/* Message motivant */}
        <div style={{
          marginTop: '2rem',
          padding: '2rem',
          backgroundColor: '#fff9f0',
          borderRadius: '12px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#4a4a4a' }}>
            {totalMaitrise === 0 && "🦦 C'est parti ! Commence par une première fiche !"}
            {totalMaitrise > 0 && totalMaitrise < totalFiches && 
              `🦦 Super travail ! Tu as déjà maîtrisé ${totalMaitrise} fiche${totalMaitrise > 1 ? 's' : ''} !`}
            {totalMaitrise === totalFiches && "🎉 BRAVO ! Tu as maîtrisé toutes les fiches ! 🦦"}
          </p>
        </div>
      </div>
    </Layout>
  );
}
