import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useAuth } from '../utils/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';

// ========================================
// OBJET FICHES COMPLET - TOUTES LES MATIÈRES
// ========================================
const FICHES = {
  'Français': [
    // Grammaire et étude de la langue
    { id: 'francais-classes-de-mots', nom: 'Classes de mots', url: '/fiches/francais/classes-de-mots' },
    { id: 'francais-fonctions-grammaticales', nom: 'Fonctions grammaticales', url: '/fiches/francais/fonctions-grammaticales' },
    { id: 'francais-conjugaison', nom: 'Conjugaison', url: '/fiches/francais/conjugaison' },
    { id: 'francais-types-phrases', nom: 'Types et formes de phrases', url: '/fiches/francais/types-phrases' },
    { id: 'francais-orthographe', nom: 'Orthographe', url: '/fiches/francais/orthographe' },
    { id: 'francais-lexique', nom: 'Lexique et vocabulaire', url: '/fiches/francais/lexique' },
    
    // Lecture et compréhension
    { id: 'francais-lecture-litterale', nom: 'Lecture littérale', url: '/fiches/francais/lecture-litterale' },
    { id: 'francais-lecture-inferentielle', nom: 'Lecture inférentielle', url: '/fiches/francais/lecture-inferentielle' },
    { id: 'francais-genres-textuels', nom: 'Genres textuels', url: '/fiches/francais/genres-textuels' },
    
    // Culture littéraire
    { id: 'francais-roman', nom: 'Le roman', url: '/fiches/francais/roman' },
    { id: 'francais-poesie', nom: 'La poésie', url: '/fiches/francais/poesie' },
    { id: 'francais-theatre', nom: 'Le théâtre', url: '/fiches/francais/theatre' },
    
    // Expression
    { id: 'francais-expression-ecrite', nom: 'Expression écrite', url: '/fiches/francais/expression-ecrite' },
    { id: 'francais-expression-orale', nom: 'Expression orale', url: '/fiches/francais/expression-orale' },
  ],
  
  'Mathématiques': [
    // Nombres et calculs
    { id: 'maths-entiers-decimaux', nom: 'Nombres entiers et décimaux', url: '/fiches/mathematiques/entiers-decimaux' },
    { id: 'maths-fractions', nom: 'Fractions', url: '/fiches/mathematiques/fractions' },
    { id: 'maths-relatifs', nom: 'Nombres relatifs', url: '/fiches/mathematiques/relatifs' },
    { id: 'maths-puissances-racines', nom: 'Puissances et racines carrées', url: '/fiches/mathematiques/puissances-racines' },
    { id: 'maths-calcul-litteral', nom: 'Calcul littéral', url: '/fiches/mathematiques/calcul-litteral' },
    
    // Gestion de données
    { id: 'maths-proportionnalite', nom: 'Proportionnalité', url: '/fiches/mathematiques/proportionnalite' },
    { id: 'maths-statistiques', nom: 'Statistiques', url: '/fiches/mathematiques/statistiques' },
    { id: 'maths-probabilites', nom: 'Probabilités', url: '/fiches/mathematiques/probabilites' },
    { id: 'maths-fonctions', nom: 'Fonctions', url: '/fiches/mathematiques/fonctions' },
    
    // Grandeurs et mesures
    { id: 'maths-unites-mesures', nom: 'Unités et mesures', url: '/fiches/mathematiques/unites-mesures' },
    { id: 'maths-aires-perimetres', nom: 'Aires et périmètres', url: '/fiches/mathematiques/aires-perimetres' },
    { id: 'maths-volumes', nom: 'Volumes', url: '/fiches/mathematiques/volumes' },
    { id: 'maths-pythagore', nom: 'Théorème de Pythagore', url: '/fiches/mathematiques/pythagore' },
    { id: 'maths-thales', nom: 'Théorème de Thalès', url: '/fiches/mathematiques/thales' },
    { id: 'maths-trigonometrie', nom: 'Trigonométrie', url: '/fiches/mathematiques/trigonometrie' },
    
    // Géométrie
    { id: 'maths-geometrie-plane', nom: 'Géométrie plane', url: '/fiches/mathematiques/geometrie-plane' },
    { id: 'maths-geometrie-espace', nom: 'Géométrie dans l\'espace', url: '/fiches/mathematiques/geometrie-espace' },
    { id: 'maths-transformations', nom: 'Transformations', url: '/fiches/mathematiques/transformations' },
    
    // Algorithmique
    { id: 'maths-algorithmique', nom: 'Algorithmique', url: '/fiches/mathematiques/algorithmique' },
  ],
  
  'Anglais': [
    // Compétences linguistiques
    { id: 'anglais-comprehension-ecrite', nom: 'Compréhension écrite B2', url: '/fiches/anglais/comprehension-ecrite' },
    { id: 'anglais-comprehension-orale', nom: 'Compréhension orale B2', url: '/fiches/anglais/comprehension-orale' },
    { id: 'anglais-expression-ecrite', nom: 'Expression écrite B2', url: '/fiches/anglais/expression-ecrite' },
    { id: 'anglais-expression-orale', nom: 'Expression orale B2', url: '/fiches/anglais/expression-orale' },
    
    // Grammaire
    { id: 'anglais-temps-present', nom: 'Temps du présent', url: '/fiches/anglais/temps-present' },
    { id: 'anglais-temps-passe', nom: 'Temps du passé', url: '/fiches/anglais/temps-passe' },
    { id: 'anglais-temps-futur', nom: 'Temps du futur', url: '/fiches/anglais/temps-futur' },
    { id: 'anglais-modaux', nom: 'Modaux', url: '/fiches/anglais/modaux' },
    { id: 'anglais-conditionnels', nom: 'Conditionnels', url: '/fiches/anglais/conditionnels' },
    { id: 'anglais-voix-passive', nom: 'Voix passive', url: '/fiches/anglais/voix-passive' },
    { id: 'anglais-phrasal-verbs', nom: 'Phrasal verbs', url: '/fiches/anglais/phrasal-verbs' },
    
    // Vocabulaire
    { id: 'anglais-vie-quotidienne', nom: 'Vie quotidienne', url: '/fiches/anglais/vie-quotidienne' },
    { id: 'anglais-education', nom: 'Éducation et école', url: '/fiches/anglais/education' },
    { id: 'anglais-travail', nom: 'Travail et professions', url: '/fiches/anglais/travail' },
    { id: 'anglais-loisirs', nom: 'Loisirs et sports', url: '/fiches/anglais/loisirs' },
    
    // Didactique
    { id: 'anglais-cecrl', nom: 'CECRL et approche actionnelle', url: '/fiches/anglais/cecrl' },
    { id: 'anglais-activites-langagieres', nom: 'Activités langagières', url: '/fiches/anglais/activites-langagieres' },
    { id: 'anglais-eveil-cycle1', nom: 'Éveil aux langues (Cycle 1)', url: '/fiches/anglais/eveil-cycle1' },
    { id: 'anglais-initiation-cycle2', nom: 'Initiation (Cycle 2)', url: '/fiches/anglais/initiation-cycle2' },
    { id: 'anglais-approfondissement-cycle3', nom: 'Approfondissement (Cycle 3)', url: '/fiches/anglais/approfondissement-cycle3' },
    { id: 'anglais-albums-chansons', nom: 'Albums et chansons', url: '/fiches/anglais/albums-chansons' },
    
    // Culture
    { id: 'anglais-royaume-uni', nom: 'Royaume-Uni', url: '/fiches/anglais/royaume-uni' },
    { id: 'anglais-etats-unis', nom: 'États-Unis', url: '/fiches/anglais/etats-unis' },
    { id: 'anglais-fetes-traditions', nom: 'Fêtes et traditions', url: '/fiches/anglais/fetes-traditions' },
  ],
  
  'Histoire-Géographie-EMC': [
    // Histoire
    { id: 'hg-prehistoire', nom: 'La Préhistoire', url: '/fiches/histoire-geographie/prehistoire' },
    { id: 'hg-antiquite', nom: 'L\'Antiquité', url: '/fiches/histoire-geographie/antiquite' },
    { id: 'hg-moyen-age', nom: 'Le Moyen Âge', url: '/fiches/histoire-geographie/moyen-age' },
    { id: 'hg-temps-modernes', nom: 'Les Temps modernes', url: '/fiches/histoire-geographie/temps-modernes' },
    { id: 'hg-revolution', nom: 'La Révolution française', url: '/fiches/histoire-geographie/revolution' },
    { id: 'hg-19e-siecle', nom: 'Le XIXe siècle', url: '/fiches/histoire-geographie/19e-siecle' },
    { id: 'hg-guerres-mondiales', nom: 'Les guerres mondiales', url: '/fiches/histoire-geographie/guerres-mondiales' },
    { id: 'hg-monde-depuis-1945', nom: 'Le monde depuis 1945', url: '/fiches/histoire-geographie/monde-depuis-1945' },
    
    // Géographie
    { id: 'geo-lieux-habitation', nom: 'Lieux d\'habitation', url: '/fiches/histoire-geographie/lieux-habitation' },
    { id: 'geo-urbanisation', nom: 'Urbanisation', url: '/fiches/histoire-geographie/urbanisation' },
    { id: 'geo-ressources', nom: 'Ressources et développement', url: '/fiches/histoire-geographie/ressources' },
    { id: 'geo-mondialisation', nom: 'Mondialisation', url: '/fiches/histoire-geographie/mondialisation' },
    { id: 'geo-france-ue', nom: 'France et Union européenne', url: '/fiches/histoire-geographie/france-ue' },
    
    // EMC
    { id: 'emc-valeurs-republique', nom: 'Valeurs de la République', url: '/fiches/histoire-geographie/valeurs-republique' },
    { id: 'emc-laicite', nom: 'Laïcité', url: '/fiches/histoire-geographie/laicite' },
    { id: 'emc-egalite', nom: 'Égalité et discriminations', url: '/fiches/histoire-geographie/egalite' },
    { id: 'emc-droits-homme', nom: 'Droits de l\'Homme', url: '/fiches/histoire-geographie/droits-homme' },
  ],
  
  'Sciences et Technologie': [
    // Physique-Chimie
    { id: 'sciences-etats-matiere', nom: 'États de la matière', url: '/fiches/sciences/etats-matiere' },
    { id: 'sciences-melanges-solutions', nom: 'Mélanges et solutions', url: '/fiches/sciences/melanges-solutions' },
    { id: 'sciences-atomes-molecules', nom: 'Atomes et molécules', url: '/fiches/sciences/atomes-molecules' },
    { id: 'sciences-energie', nom: 'Énergie', url: '/fiches/sciences/energie' },
    { id: 'sciences-electricite', nom: 'Électricité', url: '/fiches/sciences/electricite' },
    { id: 'sciences-lumiere', nom: 'Lumière et couleurs', url: '/fiches/sciences/lumiere' },
    { id: 'sciences-son', nom: 'Son', url: '/fiches/sciences/son' },
    
    // SVT
    { id: 'svt-classification-vivant', nom: 'Classification du vivant', url: '/fiches/sciences/classification-vivant' },
    { id: 'svt-nutrition-vegetaux', nom: 'Nutrition des végétaux', url: '/fiches/sciences/nutrition-vegetaux' },
    { id: 'svt-nutrition-animaux', nom: 'Nutrition des animaux', url: '/fiches/sciences/nutrition-animaux' },
    { id: 'svt-reproduction', nom: 'Reproduction', url: '/fiches/sciences/reproduction' },
    { id: 'svt-evolution', nom: 'Évolution et biodiversité', url: '/fiches/sciences/evolution' },
    { id: 'svt-corps-humain-digestion', nom: 'Système digestif', url: '/fiches/sciences/corps-humain-digestion' },
    { id: 'svt-corps-humain-respiration', nom: 'Système respiratoire', url: '/fiches/sciences/corps-humain-respiration' },
    { id: 'svt-corps-humain-circulation', nom: 'Système circulatoire', url: '/fiches/sciences/corps-humain-circulation' },
    { id: 'svt-systeme-nerveux', nom: 'Système nerveux', url: '/fiches/sciences/systeme-nerveux' },
    { id: 'svt-immunite', nom: 'Système immunitaire', url: '/fiches/sciences/immunite' },
    { id: 'svt-terre-univers', nom: 'La Terre et l\'univers', url: '/fiches/sciences/terre-univers' },
    { id: 'svt-volcanisme-seismes', nom: 'Volcanisme et séismes', url: '/fiches/sciences/volcanisme-seismes' },
    
    // Technologie
    { id: 'techno-objets-techniques', nom: 'Objets techniques', url: '/fiches/sciences/objets-techniques' },
    { id: 'techno-materiaux', nom: 'Matériaux', url: '/fiches/sciences/materiaux' },
    { id: 'techno-programmation', nom: 'Information et programmation', url: '/fiches/sciences/programmation' },
  ],
  
  'Arts': [
    // Arts plastiques
    { id: 'arts-composition', nom: 'Composition et cadrage', url: '/fiches/arts/composition' },
    { id: 'arts-couleurs', nom: 'Couleurs', url: '/fiches/arts/couleurs' },
    { id: 'arts-materiaux', nom: 'Matériaux et techniques', url: '/fiches/arts/materiaux' },
    
    // Œuvres au programme 2026 - Arts plastiques
    { id: 'arts-kusama', nom: 'Yayoi Kusama - Dancing Pumpkin', url: '/fiches/arts/kusama' },
    { id: 'arts-alechinsky', nom: 'Pierre Alechinsky - Sorti de la poche', url: '/fiches/arts/alechinsky' },
    { id: 'arts-picasso', nom: 'Pablo Picasso - Tête de femme', url: '/fiches/arts/picasso' },
    { id: 'arts-de-stael', nom: 'Nicolas de Staël - Parc des Princes', url: '/fiches/arts/de-stael' },
    { id: 'arts-dora-maar', nom: 'Dora Maar - Main-coquillage', url: '/fiches/arts/dora-maar' },
    { id: 'arts-dame-licorne', nom: 'La Dame à la licorne', url: '/fiches/arts/dame-licorne' },
    
    // Œuvres au programme 2026 - Éducation musicale
    { id: 'musique-hindi-zahra', nom: 'Hindi Zahra - Beautiful tango', url: '/fiches/arts/hindi-zahra' },
    { id: 'musique-morgan-jourdain', nom: 'Morgan Jourdain - Le troupeau', url: '/fiches/arts/morgan-jourdain' },
    { id: 'musique-lise-borel', nom: 'Lise Borel - La ronde des mois', url: '/fiches/arts/lise-borel' },
    { id: 'musique-vivaldi', nom: 'Vivaldi - L\'été', url: '/fiches/arts/vivaldi' },
    { id: 'musique-jean-petit', nom: 'Jean-Petit qui danse', url: '/fiches/arts/jean-petit' },
    { id: 'musique-bizet', nom: 'Bizet - Marche', url: '/fiches/arts/bizet' },
    
    // Œuvres au programme 2026 - Histoire des arts
    { id: 'hda-moussorgski', nom: 'Moussorgski - Promenade', url: '/fiches/arts/moussorgski' },
    { id: 'hda-josephine-baker', nom: 'Zig - Joséphine Baker', url: '/fiches/arts/josephine-baker' },
    { id: 'hda-hokusai', nom: 'Hokusai - La grande vague', url: '/fiches/arts/hokusai' },
  ],
  
  'EPS': [
    // Culture sportive
    { id: 'eps-athletisme', nom: 'Activités athlétiques', url: '/fiches/eps/athletisme' },
    { id: 'eps-natation', nom: 'Natation', url: '/fiches/eps/natation' },
    { id: 'eps-combat', nom: 'Activités de combat', url: '/fiches/eps/combat' },
    { id: 'eps-artistiques', nom: 'Activités artistiques', url: '/fiches/eps/artistiques' },
    
    // Culture corporelle
    { id: 'eps-motricite', nom: 'Développer sa motricité', url: '/fiches/eps/motricite' },
    { id: 'eps-methodes', nom: 'Méthodes et outils', url: '/fiches/eps/methodes' },
    
    // Culture citoyenne
    { id: 'eps-sante', nom: 'Santé et activité physique', url: '/fiches/eps/sante' },
    { id: 'eps-regles', nom: 'Respect des règles', url: '/fiches/eps/regles' },
  ],
};

// ========================================
// COMPOSANTS (inchangés)
// ========================================

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

function SuiviContent() {
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
      <div style={{
        maxWidth: '1000px',
        margin: '4rem auto',
        padding: '0 2rem',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '1.2rem' }}>Chargement de ta progression...</p>
      </div>
    );
  }

  const { statsParMatiere = {}, toutesLesFiches = {} } = stats;
  
  const totalFiches = Object.values(FICHES).reduce((acc, fiches) => acc + fiches.length, 0);
  const totalMaitrise = Object.values(statsParMatiere).reduce((acc, s) => acc + (s?.maitrise || 0), 0);
  const totalEnCours = Object.values(statsParMatiere).reduce((acc, s) => acc + (s?.enCours || 0), 0);

  return (
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
  );
}

export default function Suivi() {
  return (
    <ProtectedRoute title="Suivi de progression" description="Suivi de ta progression CRPE">
      <Layout title="Suivi de progression" description="Suivi de ta progression CRPE">
        <SuiviContent />
      </Layout>
    </ProtectedRoute>
  );
}
