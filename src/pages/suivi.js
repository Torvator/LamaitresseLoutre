import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../utils/useAuth';
import { db } from '../utils/firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

// --- Données des fiches (ordre aligné sur sidebars.js) ---
const fichesData = {
  // ========================================
  // 📝 FRANÇAIS (5 fiches)
  // ========================================
  francais: {
    label: '📝 Français',
    fiches: [
      { id: 'grammaire', title: 'Grammaire' },
      { id: 'lecture', title: 'Lecture' },
      { id: 'culture-litteraire', title: 'Culture littéraire' },
      { id: 'expression-ecrite', title: 'Expression écrite' },
      { id: 'expression-orale', title: 'Expression orale' },
    ],
  },

  // ========================================
  // 🔢 MATHÉMATIQUES (12 fiches)
  // ========================================
  maths: {
    label: '🔢 Mathématiques',
    fiches: [
      { id: 'nombres-entiers-decimaux', title: 'Nombres entiers et décimaux' },
      { id: 'fractions-nombres-rationnels', title: 'Fractions et nombres rationnels' },
      { id: 'nombres-relatifs', title: 'Nombres relatifs' },
      { id: 'puissances-racines-carrees', title: 'Puissances et racines carrées' },
      { id: 'calcul-litteral', title: 'Calcul littéral' },
      { id: 'durees-calculs', title: 'Durées et calculs' },
      { id: 'organisation-gestion-donnees', title: 'Organisation et gestion de données' },
      { id: 'grandeurs-mesures', title: 'Grandeurs et mesures' },
      { id: 'geometrie-plane', title: 'Géométrie plane' },
      { id: 'geometrie-espace', title: 'Géométrie dans l\'espace' },
      { id: 'reperage', title: 'Repérage' },
      { id: 'algorithmique-programmation', title: 'Algorithmique et programmation' },
    ],
  },

  // ========================================
  // 📜 HISTOIRE (12 fiches)
  // ========================================
  histoire: {
    label: '📜 Histoire',
    fiches: [
      { id: 'prehistoire', title: 'Préhistoire' },
      { id: 'premieres-civilisations', title: 'Premières civilisations' },
      { id: 'grece-antique', title: 'Grèce antique' },
      { id: 'rome', title: 'Rome' },
      { id: 'moyen-age-societe-feodale', title: 'Moyen Âge - Société féodale' },
      { id: 'eglise-moyen-age', title: 'L\'Église au Moyen Âge' },
      { id: 'renaissance', title: 'La Renaissance' },
      { id: 'grandes-decouvertes', title: 'Les grandes découvertes' },
      { id: 'revolution-empire', title: 'Révolution et Empire' },
      { id: 'xixe-siecle', title: 'Le XIXe siècle' },
      { id: 'guerres-mondiales', title: 'Les guerres mondiales' },
      { id: 'monde-depuis-1945', title: 'Le monde depuis 1945' },
    ],
  },

  // ========================================
  // 🌍 GÉOGRAPHIE (8 fiches)
  // ========================================
  geographie: {
    label: '🌍 Géographie',
    fiches: [
      { id: 'geo_lieux_habite', title: 'Les lieux où j\'habite' },
      { id: 'geo_loger_travailler', title: 'Se loger, travailler' },
      { id: 'geo_consommer', title: 'Consommer' },
      { id: 'geo_demographie_developpement', title: 'Démographie et développement' },
      { id: 'geo_ressources', title: 'Les ressources' },
      { id: 'geo_risques_climat', title: 'Risques et climat' },
      { id: 'geo_urbanisation_mobilites', title: 'Urbanisation et mobilités' },
      { id: 'geo_france_ue_mondialisation', title: 'France, UE et mondialisation' },
    ],
  },

  // ========================================
  // 🌈 EMC (6 fiches)
  // ========================================
  emc: {
    label: '🌈 EMC',
    fiches: [
      { id: 'emc_sensibilite', title: 'La sensibilité' },
      { id: 'emc_droit_regle', title: 'Le droit et la règle' },
      { id: 'emc_jugement', title: 'Le jugement' },
      { id: 'emc_engagement', title: 'L\'engagement' },
      { id: 'emc_laicite', title: 'La laïcité' },
      { id: 'emc_egalite_discriminations', title: 'Égalité et discriminations' },
    ],
  },

  // ========================================
  // 🔬 SCIENCES & TECHNOLOGIE (15 fiches)
  // ========================================
  sciences: {
    label: '🔬 Sciences',
    fiches: [
      { id: 'matiere-etats-changements', title: 'Matière : états et changements' },
      { id: 'melanges-solutions', title: 'Mélanges et solutions' },
      { id: 'atomes-molecules-reactions', title: 'Atomes, molécules et réactions' },
      { id: 'energie-sources-conversions', title: 'Énergie : sources et conversions' },
      { id: 'electricite', title: 'Électricité' },
      { id: 'mouvement-forces', title: 'Mouvement et forces' },
      { id: 'lumiere-optique', title: 'Lumière et optique' },
      { id: 'son', title: 'Le son' },
      { id: 'vivant-classification-biodiversite', title: 'Vivant : classification et biodiversité' },
      { id: 'fonctions-nutrition', title: 'Fonctions de nutrition' },
      { id: 'reproduction-developpement', title: 'Reproduction et développement' },
      { id: 'ecosystemes-environnement', title: 'Écosystèmes et environnement' },
      { id: 'corps-humain-sante', title: 'Corps humain et santé' },
      { id: 'terre-systeme-solaire', title: 'Terre et système solaire' },
      { id: 'objets-techniques-programmation', title: 'Objets techniques et programmation' },
    ],
  },

  // ========================================
  // 🎨 ÉDUCATION ARTISTIQUE (5 fiches)
  // ========================================
  arts: {
    label: '🎨 Arts',
    fiches: [
      { id: 'arts-plastiques-fondamentaux', title: 'Arts plastiques - Fondamentaux' },
      { id: 'arts-plastiques-oeuvres-2026', title: 'Arts plastiques - Œuvres 2026' },
      { id: 'education-musicale-fondamentaux', title: 'Éducation musicale - Fondamentaux' },
      { id: 'education-musicale-oeuvres-2026', title: 'Éducation musicale - Œuvres 2026' },
      { id: 'histoire-des-arts-2026', title: 'Histoire des arts - Œuvres 2026' },
    ],
  },

  // ========================================
  // ⚽ EPS (2 fiches)
  // ========================================
  eps: {
    label: '⚽ EPS',
    fiches: [
      { id: 'eps-didactique-developpement', title: 'EPS - Didactique et développement moteur' },
      { id: 'eps-apsa-champs-apprentissage', title: 'EPS - Les APSA par champ d\'apprentissage' },
    ],
  },

  // ========================================
  // 🇬🇧 ANGLAIS (3 fiches)
  // ========================================
  anglais: {
    label: '🇬🇧 Anglais',
    fiches: [
      { id: 'anglais-grammaire', title: 'Anglais - Grammaire complète' },
      { id: 'anglais-didactique', title: 'Anglais - Didactique des langues' },
      { id: 'anglais-vocabulaire-culture', title: 'Anglais - Vocabulaire et culture' },
    ],
  },
};

// Composant FicheItem
function FicheItem({ fiche, status, onStatusChange, disabled }) {
  const statusColors = {
    'NON_COMMENCE': { bg: '#ffebee', border: '#f44336', emoji: '🔴' },
    'EN_COURS': { bg: '#fff3e0', border: '#ff9800', emoji: '🟡' },
    'MAITRISE': { bg: '#e8f5e9', border: '#4caf50', emoji: '🟢' },
  };

  const mapStatus = (s) => {
    if (s === 'non-commence') return 'NON_COMMENCE';
    if (s === 'en-cours') return 'EN_COURS';
    if (s === 'maitrise') return 'MAITRISE';
    return s || 'NON_COMMENCE';
  };

  const currentStatus = statusColors[mapStatus(status)] || statusColors['NON_COMMENCE'];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        marginBottom: '8px',
        backgroundColor: currentStatus.bg,
        borderLeft: `4px solid ${currentStatus.border}`,
        borderRadius: '4px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '1.2em' }}>{currentStatus.emoji}</span>
        <span style={{ fontWeight: '500' }}>{fiche.title}</span>
      </div>
      <select
        value={mapStatus(status)}
        onChange={(e) => onStatusChange(fiche.id, e.target.value)}
        disabled={disabled}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          cursor: disabled ? 'wait' : 'pointer',
          opacity: disabled ? 0.7 : 1,
        }}
      >
        <option value="NON_COMMENCE">📚 Non commencé</option>
        <option value="EN_COURS">📖 En cours</option>
        <option value="MAITRISE">✅ Maîtrisé</option>
      </select>
    </div>
  );
}

// Composant MatiereSection
function MatiereSection({ matiereKey, matiere, statuts, onStatusChange, loading }) {
  const totalFiches = matiere.fiches.length;
  
  const getNormStatus = (id) => statuts[id] || 'NON_COMMENCE';
  
  const fichesTerminees = matiere.fiches.filter(
    (f) => getNormStatus(f.id) === 'MAITRISE'
  ).length;
  const fichesEnCours = matiere.fiches.filter(
    (f) => getNormStatus(f.id) === 'EN_COURS'
  ).length;
  
  const progression = Math.round((fichesTerminees / totalFiches) * 100);

  return (
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ marginBottom: '8px' }}>{matiere.label}</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <div style={{ flex: 1, height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
          <div
            style={{
              width: `${progression}%`,
              height: '100%',
              backgroundColor: progression === 100 ? '#4caf50' : '#2196f3',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <span style={{ fontWeight: 'bold', minWidth: '60px' }}>{progression}%</span>
      </div>
      <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '16px' }}>
        🟢 {fichesTerminees} maîtrisées | 🟡 {fichesEnCours} en cours | 🔴 {totalFiches - fichesTerminees - fichesEnCours} non commencées
      </div>
      {matiere.fiches.map((fiche) => (
        <FicheItem
          key={fiche.id}
          fiche={fiche}
          status={statuts[fiche.id]}
          onStatusChange={onStatusChange}
          disabled={loading}
        />
      ))}
    </div>
  );
}

function SuiviProgressionContent() {
  const [statuts, setStatuts] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchProgression = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'fiches'));
        const firebaseData = {};
        querySnapshot.forEach((doc) => {
          firebaseData[doc.id] = doc.data().statut;
        });
        setStatuts(firebaseData);
      } catch (error) {
        console.error("Erreur de chargement:", error);
      } finally {
        setDataLoading(false);
      }
    };

    fetchProgression();
  }, [user]);

  const handleStatusChange = async (ficheId, newStatus) => {
    setStatuts(prev => ({ ...prev, [ficheId]: newStatus }));

    try {
      await setDoc(doc(db, 'users', user.uid, 'fiches', ficheId), {
        statut: newStatus,
        lastUpdate: new Date().toISOString()
      }, { merge: true });
    } catch (error) {
      console.error("Erreur de sauvegarde:", error);
      alert("Erreur de connexion. La sauvegarde a échoué.");
    }
  };

  if (authLoading || dataLoading) {
    return <div style={{textAlign: 'center', padding: '50px'}}>Chargement de votre progression...</div>;
  }

  const allFiches = Object.values(fichesData).flatMap((m) => m.fiches);
  const totalFiches = allFiches.length;
  const fichesTerminees = allFiches.filter((f) => statuts[f.id] === 'MAITRISE').length;
  const progressionGlobale = Math.round((fichesTerminees / totalFiches) * 100);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '24px', borderRadius: '8px', marginBottom: '32px' }}>
        <h1 style={{ marginTop: 0 }}>📊 Suivi de progression</h1>
        <p>Progression globale : <strong>{progressionGlobale}%</strong></p>
        <div style={{ height: '20px', backgroundColor: '#e0e0e0', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ width: `${progressionGlobale}%`, height: '100%', backgroundColor: '#4caf50' }} />
        </div>
      </div>

      {Object.entries(fichesData).map(([key, matiere]) => (
        <MatiereSection
          key={key}
          matiereKey={key}
          matiere={matiere}
          statuts={statuts}
          onStatusChange={handleStatusChange}
          loading={dataLoading}
        />
      ))}
    </div>
  );
}

export default function Suivi() {
  return (
    <ProtectedRoute title="Suivi" description="Votre tableau de bord">
      <Layout>
        <SuiviProgressionContent />
      </Layout>
    </ProtectedRoute>
  );
}
