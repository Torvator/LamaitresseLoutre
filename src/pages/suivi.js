import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

// Liste complète des fiches avec leur ID, titre et matière
const fiches = [
  // ========================================
  // FRANÇAIS (5 fiches)
  // ========================================
  { id: 'francais-grammaire', titre: 'Grammaire', matiere: 'Français', url: '/docs/francais/grammaire' },
  { id: 'francais-lecture', titre: 'Lecture', matiere: 'Français', url: '/docs/francais/lecture' },
  { id: 'francais-culture', titre: 'Culture littéraire', matiere: 'Français', url: '/docs/francais/culture-litteraire' },
  { id: 'francais-ecrit', titre: 'Expression écrite', matiere: 'Français', url: '/docs/francais/expression-ecrite' },
  { id: 'francais-oral', titre: 'Expression orale', matiere: 'Français', url: '/docs/francais/expression-orale' },
  
  // ========================================
  // MATHÉMATIQUES (12 fiches)
  // ========================================
  { id: 'maths-nombres-entiers', titre: 'Nombres entiers et décimaux', matiere: 'Mathématiques', url: '/docs/maths/nombres-entiers-decimaux' },
  { id: 'maths-fractions', titre: 'Fractions et nombres rationnels', matiere: 'Mathématiques', url: '/docs/maths/fractions-nombres-rationnels' },
  { id: 'maths-relatifs', titre: 'Nombres relatifs', matiere: 'Mathématiques', url: '/docs/maths/nombres-relatifs' },
  { id: 'maths-puissances', titre: 'Puissances et racines carrées', matiere: 'Mathématiques', url: '/docs/maths/puissances-racines-carrees' },
  { id: 'maths-calcul-litteral', titre: 'Calcul littéral', matiere: 'Mathématiques', url: '/docs/maths/calcul-litteral' },
  { id: 'maths-durees', titre: 'Durées et calculs', matiere: 'Mathématiques', url: '/docs/maths/durees-calculs' },
  { id: 'maths-organisation', titre: 'Organisation et gestion de données', matiere: 'Mathématiques', url: '/docs/maths/organisation-gestion-donnees' },
  { id: 'maths-grandeurs', titre: 'Grandeurs et mesures', matiere: 'Mathématiques', url: '/docs/maths/grandeurs-mesures' },
  { id: 'maths-geometrie-plane', titre: 'Géométrie plane', matiere: 'Mathématiques', url: '/docs/maths/geometrie-plane' },
  { id: 'maths-geometrie-espace', titre: 'Géométrie dans l\'espace', matiere: 'Mathématiques', url: '/docs/maths/geometrie-espace' },
  { id: 'maths-reperage', titre: 'Repérage', matiere: 'Mathématiques', url: '/docs/maths/reperage' },
  { id: 'maths-algorithmique', titre: 'Algorithmique et programmation', matiere: 'Mathématiques', url: '/docs/maths/algorithmique-programmation' },
  
  // ========================================
  // HISTOIRE (12 fiches - COMPLET !)
  // ========================================
  { id: 'histoire-prehistoire', titre: 'La Préhistoire', matiere: 'Histoire', url: '/docs/histoire/prehistoire' },
  { id: 'histoire-civilisations', titre: 'Les premières civilisations', matiere: 'Histoire', url: '/docs/histoire/premieres-civilisations' },
  { id: 'histoire-grece', titre: 'La Grèce antique', matiere: 'Histoire', url: '/docs/histoire/grece-antique' },
  { id: 'histoire-rome', titre: 'Rome', matiere: 'Histoire', url: '/docs/histoire/rome' },
  { id: 'histoire-moyen-age', titre: 'Le Moyen Âge - Société féodale', matiere: 'Histoire', url: '/docs/histoire/moyen-age-societe-feodale' },
  { id: 'histoire-eglise', titre: 'L\'Église au Moyen Âge', matiere: 'Histoire', url: '/docs/histoire/eglise-moyen-age' },
  { id: 'histoire-renaissance', titre: 'La Renaissance', matiere: 'Histoire', url: '/docs/histoire/renaissance' },
  { id: 'histoire-decouvertes', titre: 'Les Grandes Découvertes', matiere: 'Histoire', url: '/docs/histoire/grandes-decouvertes' },
  { id: 'histoire-revolution', titre: 'La Révolution française et l\'Empire', matiere: 'Histoire', url: '/docs/histoire/revolution-empire' },
  { id: 'histoire-xixe', titre: 'Le XIXe siècle', matiere: 'Histoire', url: '/docs/histoire/xixe-siecle' },
  { id: 'histoire-guerres', titre: 'Les deux guerres mondiales', matiere: 'Histoire', url: '/docs/histoire/guerres-mondiales' },
  { id: 'histoire-1945', titre: 'Le monde depuis 1945', matiere: 'Histoire', url: '/docs/histoire/monde-depuis-1945' },
  
  // ========================================
  // GÉOGRAPHIE (8 fiches - COMPLET !)
  // ========================================
  { id: 'geo-lieux', titre: 'Découvrir les lieux où j\'habite', matiere: 'Géographie', url: '/docs/geographie/geo_lieux_habite' },
  { id: 'geo-loger', titre: 'Se loger, travailler, se cultiver', matiere: 'Géographie', url: '/docs/geographie/geo_loger_travailler' },
  { id: 'geo-consommer', titre: 'Consommer en France', matiere: 'Géographie', url: '/docs/geographie/geo_consommer' },
  { id: 'geo-demographie', titre: 'Démographie et développement', matiere: 'Géographie', url: '/docs/geographie/geo_demographie_developpement' },
  { id: 'geo-ressources', titre: 'Ressources et énergies', matiere: 'Géographie', url: '/docs/geographie/geo_ressources' },
  { id: 'geo-risques', titre: 'Risques et changement climatique', matiere: 'Géographie', url: '/docs/geographie/geo_risques_climat' },
  { id: 'geo-urbanisation', titre: 'Urbanisation et mobilités', matiere: 'Géographie', url: '/docs/geographie/geo_urbanisation_mobilites' },
  { id: 'geo-mondialisation', titre: 'France, UE et mondialisation', matiere: 'Géographie', url: '/docs/geographie/geo_france_ue_mondialisation' },
  
  // ========================================
  // EMC - Enseignement Moral et Civique (6 fiches - COMPLET !)
  // ========================================
  { id: 'emc-sensibilite', titre: 'La sensibilité : soi et les autres', matiere: 'EMC', url: '/docs/emc/emc_sensibilite' },
  { id: 'emc-droit', titre: 'Le droit et la règle', matiere: 'EMC', url: '/docs/emc/emc_droit_regle' },
  { id: 'emc-jugement', titre: 'Le jugement : penser par soi-même', matiere: 'EMC', url: '/docs/emc/emc_jugement' },
  { id: 'emc-engagement', titre: 'L\'engagement : agir individuellement et collectivement', matiere: 'EMC', url: '/docs/emc/emc_engagement' },
  { id: 'emc-laicite', titre: 'Laïcité et liberté de conscience', matiere: 'EMC', url: '/docs/emc/emc_laicite' },
  { id: 'emc-egalite', titre: 'Égalité et lutte contre les discriminations', matiere: 'EMC', url: '/docs/emc/emc_egalite_discriminations' },
  
  // ========================================
  // SCIENCES & TECHNOLOGIE (8/15 fiches - Physique-Chimie COMPLET !)
  // ========================================
  // Physique-Chimie (8 fiches - COMPLET !)
  { id: 'sciences-matiere', titre: 'La matière : états et changements', matiere: 'Sciences', url: '/docs/sciences/matiere-etats-changements' },
  { id: 'sciences-melanges', titre: 'Mélanges et solutions', matiere: 'Sciences', url: '/docs/sciences/melanges-solutions' },
  { id: 'sciences-atomes', titre: 'Atomes, molécules et réactions chimiques', matiere: 'Sciences', url: '/docs/sciences/atomes-molecules-reactions' },
  { id: 'sciences-energie', titre: 'L\'énergie : sources et conversions', matiere: 'Sciences', url: '/docs/sciences/energie-sources-conversions' },
  { id: 'sciences-electricite', titre: 'L\'électricité', matiere: 'Sciences', url: '/docs/sciences/electricite' },
  { id: 'sciences-mouvement', titre: 'Mouvement et forces', matiere: 'Sciences', url: '/docs/sciences/mouvement-forces' },
  { id: 'sciences-lumiere', titre: 'Lumière et optique', matiere: 'Sciences', url: '/docs/sciences/lumiere-optique' },
  { id: 'sciences-son', titre: 'Le son', matiere: 'Sciences', url: '/docs/sciences/son' },
  
  // Sciences de la Vie - SVT (À VENIR)
  // { id: 'sciences-vivant', titre: 'Le vivant : classification et biodiversité', matiere: 'Sciences', url: '/docs/sciences/vivant-classification-biodiversite' },
  // { id: 'sciences-nutrition', titre: 'Fonctions de nutrition', matiere: 'Sciences', url: '/docs/sciences/fonctions-nutrition' },
  // { id: 'sciences-reproduction', titre: 'Reproduction et développement', matiere: 'Sciences', url: '/docs/sciences/reproduction-developpement' },
  // { id: 'sciences-corps', titre: 'Corps humain et santé', matiere: 'Sciences', url: '/docs/sciences/corps-humain-sante' },
  
  // Sciences de la Terre (À VENIR)
  // { id: 'sciences-ecosystemes', titre: 'Écosystèmes et environnement', matiere: 'Sciences', url: '/docs/sciences/ecosystemes-environnement' },
  // { id: 'sciences-terre', titre: 'La Terre et le système solaire', matiere: 'Sciences', url: '/docs/sciences/terre-systeme-solaire' },
  
  // Technologie (À VENIR)
  // { id: 'sciences-technologie', titre: 'Objets techniques et programmation', matiere: 'Sciences', url: '/docs/sciences/objets-techniques-programmation' },
];

// Suite du fichier identique...
function SuiviPage() {
  const [fichesMaitrisees, setFichesMaitrisees] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fichesMaitrisees');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fichesMaitrisees', JSON.stringify(fichesMaitrisees));
    }
  }, [fichesMaitrisees]);

  const toggleFiche = (ficheId) => {
    setFichesMaitrisees((prev) =>
      prev.includes(ficheId)
        ? prev.filter((id) => id !== ficheId)
        : [...prev, ficheId]
    );
  };

  const nbTotal = fiches.length;
  const nbMaitrisees = fichesMaitrisees.length;
  const pourcentage = Math.round((nbMaitrisees / nbTotal) * 100);

  const fichesFrancais = fiches.filter(f => f.matiere === 'Français');
  const fichesMaths = fiches.filter(f => f.matiere === 'Mathématiques');
  const fichesHistoire = fiches.filter(f => f.matiere === 'Histoire');
  const fichesGeo = fiches.filter(f => f.matiere === 'Géographie');
  const fichesEMC = fiches.filter(f => f.matiere === 'EMC');
  const fichesSciences = fiches.filter(f => f.matiere === 'Sciences');
  
  const nbFrancaisMaitrisees = fichesFrancais.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbMathsMaitrisees = fichesMaths.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbHistoireMaitrisees = fichesHistoire.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbGeoMaitrisees = fichesGeo.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbEMCMaitrisees = fichesEMC.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbSciencesMaitrisees = fichesSciences.filter(f => fichesMaitrisees.includes(f.id)).length;
  
  const pourcentageFrancais = Math.round((nbFrancaisMaitrisees / fichesFrancais.length) * 100) || 0;
  const pourcentageMaths = Math.round((nbMathsMaitrisees / fichesMaths.length) * 100) || 0;
  const pourcentageHistoire = Math.round((nbHistoireMaitrisees / fichesHistoire.length) * 100) || 0;
  const pourcentageGeo = Math.round((nbGeoMaitrisees / fichesGeo.length) * 100) || 0;
  const pourcentageEMC = Math.round((nbEMCMaitrisees / fichesEMC.length) * 100) || 0;
  const pourcentageSciences = Math.round((nbSciencesMaitrisees / fichesSciences.length) * 100) || 0;

  // Composant pour une liste de matière
  const MatiereListe = ({ fiches, matiere, emoji, couleurBg, couleurBorder, couleurCheck }) => (
    <div style={{
      backgroundColor: couleurBg,
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      border: `2px solid ${couleurBorder}`
    }}>
      <h3 style={{ marginTop: 0, borderBottom: `2px solid ${couleurBorder}`, paddingBottom: '0.5rem' }}>
        {emoji} {matiere}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
        {fiches.map((fiche) => (
          <div
            key={fiche.id}
            onClick={() => toggleFiche(fiche.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              backgroundColor: fichesMaitrisees.includes(fiche.id) ? '#e8f5e9' : 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              border: fichesMaitrisees.includes(fiche.id) ? '2px solid #4caf50' : '1px solid #ddd',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              border: fichesMaitrisees.includes(fiche.id) ? 'none' : `2px solid ${couleurCheck}`,
              backgroundColor: fichesMaitrisees.includes(fiche.id) ? '#4caf50' : 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem',
              flexShrink: 0
            }}>
              {fichesMaitrisees.includes(fiche.id) && (
                <span style={{ color: 'white', fontWeight: 'bold' }}>✓</span>
              )}
            </div>
            <a
              href={fiche.url}
              onClick={(e) => e.stopPropagation()}
              style={{
                textDecoration: fichesMaitrisees.includes(fiche.id) ? 'line-through' : 'none',
                color: fichesMaitrisees.includes(fiche.id) ? '#666' : '#333',
                fontWeight: '500'
              }}
            >
              {fiche.titre}
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout title="Suivi des révisions" description="Suivez votre progression dans les révisions CRPE">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>📊 Suivi des révisions</h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
          Coche les fiches que tu as maîtrisées pour suivre ta progression !
        </p>

        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: '#e9ecef',
            borderRadius: '10px',
            height: '40px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}>
            <div style={{
              backgroundColor: pourcentage >= 75 ? '#28a745' : pourcentage >= 50 ? '#ffc107' : '#17a2b8',
              height: '100%',
              width: `${pourcentage}%`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'width 0.5s ease'
            }}>
              {pourcentage}%
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            <strong>{nbMaitrisees}</strong> sur <strong>{nbTotal}</strong> fiches maîtrisées
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <div style={{ backgroundColor: '#fff9f0', borderRadius: '12px', padding: '1.5rem', border: '2px solid #f0e6d2' }}>
            <h3 style={{ marginTop: 0 }}>📝 Français</h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '30px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#e67e22', height: '100%', width: `${pourcentageFrancais}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {pourcentageFrancais}%
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{nbFrancaisMaitrisees}/{fichesFrancais.length} maîtrisées</p>
          </div>

          <div style={{ backgroundColor: '#f0f9ff', borderRadius: '12px', padding: '1.5rem', border: '2px solid #d2e9f7' }}>
            <h3 style={{ marginTop: 0 }}>🔢 Maths</h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '30px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#3498db', height: '100%', width: `${pourcentageMaths}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {pourcentageMaths}%
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{nbMathsMaitrisees}/{fichesMaths.length} maîtrisées</p>
          </div>

          <div style={{ backgroundColor: '#fef5f0', borderRadius: '12px', padding: '1.5rem', border: '2px solid #f7e3d2' }}>
            <h3 style={{ marginTop: 0 }}>📜 Histoire</h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '30px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#c0392b', height: '100%', width: `${pourcentageHistoire}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {pourcentageHistoire}%
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{nbHistoireMaitrisees}/{fichesHistoire.length} maîtrisées</p>
          </div>

          <div style={{ backgroundColor: '#f0fff4', borderRadius: '12px', padding: '1.5rem', border: '2px solid #d2f7e3' }}>
            <h3 style={{ marginTop: 0 }}>🌍 Géo</h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '30px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#27ae60', height: '100%', width: `${pourcentageGeo}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {pourcentageGeo}%
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{nbGeoMaitrisees}/{fichesGeo.length} maîtrisées</p>
          </div>

          <div style={{ backgroundColor: '#fce4ec', borderRadius: '12px', padding: '1.5rem', border: '2px solid #f7c2d8' }}>
            <h3 style={{ marginTop: 0 }}>🌈 EMC</h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '30px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#c2185b', height: '100%', width: `${pourcentageEMC}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {pourcentageEMC}%
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{nbEMCMaitrisees}/{fichesEMC.length} maîtrisées</p>
          </div>

          <div style={{ backgroundColor: '#e3f2fd', borderRadius: '12px', padding: '1.5rem', border: '2px solid #c2e0f7' }}>
            <h3 style={{ marginTop: 0 }}>🔬 Sciences</h3>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', height: '30px', overflow: 'hidden', marginBottom: '0.5rem' }}>
              <div style={{ backgroundColor: '#1565c0', height: '100%', width: `${pourcentageSciences}%`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {pourcentageSciences}%
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{nbSciencesMaitrisees}/{fichesSciences.length} maîtrisées</p>
          </div>
        </div>

        <MatiereListe fiches={fichesFrancais} matiere="Français" emoji="📝" couleurBg="#fff9f0" couleurBorder="#e67e22" couleurCheck="#e67e22" />
        <MatiereListe fiches={fichesMaths} matiere="Mathématiques" emoji="🔢" couleurBg="#f0f9ff" couleurBorder="#3498db" couleurCheck="#17a2b8" />
        <MatiereListe fiches={fichesHistoire} matiere="Histoire" emoji="📜" couleurBg="#fef5f0" couleurBorder="#c0392b" couleurCheck="#c0392b" />
        <MatiereListe fiches={fichesGeo} matiere="Géographie" emoji="🌍" couleurBg="#f0fff4" couleurBorder="#27ae60" couleurCheck="#27ae60" />
        <MatiereListe fiches={fichesEMC} matiere="EMC" emoji="🌈" couleurBg="#fce4ec" couleurBorder="#c2185b" couleurCheck="#c2185b" />
        <MatiereListe fiches={fichesSciences} matiere="Sciences" emoji="🔬" couleurBg="#e3f2fd" couleurBorder="#1565c0" couleurCheck="#1565c0" />

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#fff9f0',
          borderRadius: '12px',
          border: '2px solid #f0e6d2'
        }}>
          {pourcentage === 100 ? (
            <>
              <h2 style={{ color: '#2e8555', marginTop: 0 }}>🎉 Félicitations Marie ! 🎉</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                Tu as maîtrisé toutes les fiches !<br />
                Continue à réviser régulièrement pour bien ancrer tes connaissances.
              </p>
            </>
          ) : pourcentage >= 75 ? (
            <>
              <h2 style={{ color: '#e67e22', marginTop: 0 }}>💪 Super progression !</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                Plus que {nbTotal - nbMaitrisees} fiche{nbTotal - nbMaitrisees > 1 ? 's' : ''} à maîtriser !
              </p>
            </>
          ) : pourcentage >= 50 ? (
            <>
              <h2 style={{ color: '#3498db', marginTop: 0 }}>🚀 Continue comme ça !</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>Tu es à mi-chemin ! Garde le rythme !</p>
            </>
          ) : (
            <>
              <h2 style={{ color: '#95a5a6', marginTop: 0 }}>🦦 Courage Marie !</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>Chaque fiche maîtrisée est un pas de plus vers la réussite !</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SuiviPage;
