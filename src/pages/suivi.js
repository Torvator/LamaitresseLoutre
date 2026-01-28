import React, { useState, useEffect } from 'react';

// Données des fiches par matière
const fichesData = {
  sciences: {
    label: '🔬 Sciences et Technologie',
    fiches: [
      { id: 'matiere-etats-changements', title: 'Matière : états et changements', category: 'Matière et Énergie' },
      { id: 'melanges-solutions', title: 'Mélanges et solutions', category: 'Matière et Énergie' },
      { id: 'atomes-molecules-reactions', title: 'Atomes, molécules et réactions', category: 'Matière et Énergie' },
      { id: 'energie-sources-conversions', title: 'Énergie : sources et conversions', category: 'Matière et Énergie' },
      { id: 'electricite', title: 'Électricité', category: 'Matière et Énergie' },
      { id: 'mouvement-forces', title: 'Mouvement et forces', category: 'Mouvement et Signaux' },
      { id: 'lumiere-optique', title: 'Lumière et optique', category: 'Mouvement et Signaux' },
      { id: 'son', title: 'Le son', category: 'Mouvement et Signaux' },
      { id: 'vivant-classification-biodiversite', title: 'Vivant : classification et biodiversité', category: 'Le Vivant' },
      { id: 'fonctions-nutrition', title: 'Fonctions de nutrition', category: 'Le Vivant' },
      { id: 'reproduction-developpement', title: 'Reproduction et développement', category: 'Le Vivant' },
      { id: 'ecosystemes-environnement', title: 'Écosystèmes et environnement', category: 'Le Vivant' },
      { id: 'corps-humain-sante', title: 'Corps humain et santé', category: 'Corps Humain' },
      { id: 'terre-systeme-solaire', title: 'Terre et système solaire', category: 'Terre et Univers' },
      { id: 'objets-techniques-programmation', title: 'Objets techniques et programmation', category: 'Technologie' },
    ],
  },
  arts: {
    label: '🎨 Éducation Artistique',
    fiches: [
      { id: 'arts-plastiques-fondamentaux', title: 'Arts plastiques - Fondamentaux', category: 'Arts Plastiques' },
      { id: 'arts-plastiques-oeuvres-2026', title: 'Arts plastiques - Œuvres 2026', category: 'Arts Plastiques' },
      { id: 'education-musicale-fondamentaux', title: 'Éducation musicale - Fondamentaux', category: 'Éducation Musicale' },
      { id: 'education-musicale-oeuvres-2026', title: 'Éducation musicale - Œuvres 2026', category: 'Éducation Musicale' },
      { id: 'histoire-des-arts-2026', title: 'Histoire des arts - Œuvres 2026', category: 'Histoire des Arts' },
    ],
  },
  eps: {
    label: '⚽ EPS',
    fiches: [
      { id: 'eps-didactique-developpement', title: 'EPS - Didactique et développement moteur', category: 'EPS' },
      { id: 'eps-apsa-champs-apprentissage', title: 'EPS - Les APSA par champ d\'apprentissage', category: 'EPS' },
    ],
  },
  anglais: {
    label: '🇬🇧 Anglais',
    fiches: [
      { id: 'anglais-grammaire', title: 'Anglais - Grammaire complète', category: 'Anglais' },
      { id: 'anglais-didactique', title: 'Anglais - Didactique des langues', category: 'Anglais' },
      { id: 'anglais-vocabulaire-culture', title: 'Anglais - Vocabulaire et culture', category: 'Anglais' },
    ],
  },
};

// Composant pour une fiche individuelle
function FicheItem({ fiche, status, onStatusChange }) {
  const statusColors = {
    'non-commence': { bg: '#ffebee', border: '#f44336', emoji: '🔴' },
    'en-cours': { bg: '#fff3e0', border: '#ff9800', emoji: '🟡' },
    'maitrise': { bg: '#e8f5e9', border: '#4caf50', emoji: '🟢' },
  };

  const currentStatus = statusColors[status] || statusColors['non-commence'];

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
        value={status}
        onChange={(e) => onStatusChange(fiche.id, e.target.value)}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          cursor: 'pointer',
        }}
      >
        <option value="non-commence">📚 Non commencé</option>
        <option value="en-cours">📖 En cours</option>
        <option value="maitrise">✅ Maîtrisé</option>
      </select>
    </div>
  );
}

// Composant pour une catégorie de matière
function MatiereSection({ matiereKey, matiere, statuts, onStatusChange }) {
  const totalFiches = matiere.fiches.length;
  const fichesTerminees = matiere.fiches.filter(
    (f) => statuts[f.id] === 'maitrise'
  ).length;
  const fichesEnCours = matiere.fiches.filter(
    (f) => statuts[f.id] === 'en-cours'
  ).length;
  const progression = Math.round((fichesTerminees / totalFiches) * 100);

  return (
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ marginBottom: '8px' }}>{matiere.label}</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            flex: 1,
            height: '8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progression}%`,
              height: '100%',
              backgroundColor: progression === 100 ? '#4caf50' : '#2196f3',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <span style={{ fontWeight: 'bold', minWidth: '60px' }}>
          {progression}%
        </span>
      </div>
      <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '16px' }}>
        🟢 {fichesTerminees} maîtrisées | 🟡 {fichesEnCours} en cours | 🔴{' '}
        {totalFiches - fichesTerminees - fichesEnCours} non commencées
      </div>
      {matiere.fiches.map((fiche) => (
        <FicheItem
          key={fiche.id}
          fiche={fiche}
          status={statuts[fiche.id] || 'non-commence'}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

// Composant principal de suivi
export default function SuiviProgression() {
  const [statuts, setStatuts] = useState({});

  // Charger les statuts depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem('crpe-progression');
    if (saved) {
      setStatuts(JSON.parse(saved));
    }
  }, []);

  // Sauvegarder les statuts dans localStorage à chaque modification
  const handleStatusChange = (ficheId, newStatus) => {
    const newStatuts = { ...statuts, [ficheId]: newStatus };
    setStatuts(newStatuts);
    localStorage.setItem('crpe-progression', JSON.stringify(newStatuts));
  };

  // Calculer les statistiques globales
  const allFiches = Object.values(fichesData).flatMap((m) => m.fiches);
  const totalFiches = allFiches.length;
  const fichesTerminees = allFiches.filter(
    (f) => statuts[f.id] === 'maitrise'
  ).length;
  const fichesEnCours = allFiches.filter(
    (f) => statuts[f.id] === 'en-cours'
  ).length;
  const progressionGlobale = Math.round((fichesTerminees / totalFiches) * 100);

  // Réinitialiser la progression
  const resetProgression = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser toute la progression ?')) {
      setStatuts({});
      localStorage.removeItem('crpe-progression');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* En-tête avec statistiques globales */}
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '24px',
          borderRadius: '8px',
          marginBottom: '32px',
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: '16px' }}>
          📊 Suivi de progression CRPE 2026
        </h1>
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2196f3' }}>
              {totalFiches}
            </div>
            <div style={{ color: '#666' }}>Fiches totales</div>
          </div>
          <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#4caf50' }}>
              {fichesTerminees}
            </div>
            <div style={{ color: '#666' }}>Maîtrisées</div>
          </div>
          <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#ff9800' }}>
              {fichesEnCours}
            </div>
            <div style={{ color: '#666' }}>En cours</div>
          </div>
          <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
            <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#f44336' }}>
              {totalFiches - fichesTerminees - fichesEnCours}
            </div>
            <div style={{ color: '#666' }}>À faire</div>
          </div>
        </div>

        {/* Barre de progression globale */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>Progression globale</span>
            <span style={{ fontWeight: 'bold' }}>{progressionGlobale}%</span>
          </div>
          <div
            style={{
              height: '20px',
              backgroundColor: '#e0e0e0',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressionGlobale}%`,
                height: '100%',
                backgroundColor: progressionGlobale === 100 ? '#4caf50' : '#2196f3',
                transition: 'width 0.3s ease',
                background: progressionGlobale === 100 
                  ? '#4caf50' 
                  : 'linear-gradient(90deg, #4caf50 0%, #2196f3 100%)',
              }}
            />
          </div>
        </div>

        {/* Message d'encouragement */}
        <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
          {progressionGlobale === 0 && "🚀 C'est parti ! Commence par la matière de ton choix."}
          {progressionGlobale > 0 && progressionGlobale < 25 && "💪 Bon début ! Continue comme ça !"}
          {progressionGlobale >= 25 && progressionGlobale < 50 && "📚 Tu avances bien ! Un quart du chemin parcouru !"}
          {progressionGlobale >= 50 && progressionGlobale < 75 && "🌟 Bravo ! Tu es à mi-chemin !"}
          {progressionGlobale >= 75 && progressionGlobale < 100 && "🔥 Excellent ! La ligne d'arrivée approche !"}
          {progressionGlobale === 100 && "🎉 FÉLICITATIONS ! Tu as terminé toutes les fiches !"}
        </div>

        {/* Bouton reset */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button
            onClick={resetProgression}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9em',
            }}
          >
            🔄 Réinitialiser la progression
          </button>
        </div>
      </div>

      {/* Sections par matière */}
      {Object.entries(fichesData).map(([key, matiere]) => (
        <MatiereSection
          key={key}
          matiereKey={key}
          matiere={matiere}
          statuts={statuts}
          onStatusChange={handleStatusChange}
        />
      ))}

      {/* Footer */}
      <div
        style={{
          marginTop: '32px',
          padding: '16px',
          backgroundColor: '#f0f7ff',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0 }}>
          🦦 <strong>Bon courage Marie !</strong> Ta progression est sauvegardée automatiquement.
        </p>
      </div>
    </div>
  );
}
