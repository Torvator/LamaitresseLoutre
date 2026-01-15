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
  // I. Nombres et Calculs (6 fiches)
  { id: 'maths-nombres-entiers', titre: 'Nombres entiers et décimaux', matiere: 'Mathématiques', url: '/docs/maths/nombres-entiers-decimaux' },
  { id: 'maths-fractions', titre: 'Fractions et nombres rationnels', matiere: 'Mathématiques', url: '/docs/maths/fractions-nombres-rationnels' },
  { id: 'maths-relatifs', titre: 'Nombres relatifs', matiere: 'Mathématiques', url: '/docs/maths/nombres-relatifs' },
  { id: 'maths-puissances', titre: 'Puissances et racines carrées', matiere: 'Mathématiques', url: '/docs/maths/puissances-racines-carrees' },
  { id: 'maths-calcul-litteral', titre: 'Calcul littéral', matiere: 'Mathématiques', url: '/docs/maths/calcul-litteral' },
  { id: 'maths-durees', titre: 'Durées et calculs', matiere: 'Mathématiques', url: '/docs/maths/durees-calculs' },
  
  // II. Organisation et gestion de données (1 fiche)
  { id: 'maths-organisation', titre: 'Organisation et gestion de données', matiere: 'Mathématiques', url: '/docs/maths/organisation-gestion-donnees' },
  
  // III. Grandeurs et mesures (1 fiche)
  { id: 'maths-grandeurs', titre: 'Grandeurs et mesures', matiere: 'Mathématiques', url: '/docs/maths/grandeurs-mesures' },
  
  // IV. Géométrie (3 fiches)
  { id: 'maths-geometrie-plane', titre: 'Géométrie plane', matiere: 'Mathématiques', url: '/docs/maths/geometrie-plane' },
  { id: 'maths-geometrie-espace', titre: 'Géométrie dans l\'espace', matiere: 'Mathématiques', url: '/docs/maths/geometrie-espace' },
  { id: 'maths-reperage', titre: 'Repérage', matiere: 'Mathématiques', url: '/docs/maths/reperage' },
  
  // V. Algorithmique et programmation (1 fiche)
  { id: 'maths-algorithmique', titre: 'Algorithmique et programmation', matiere: 'Mathématiques', url: '/docs/maths/algorithmique-programmation' },
  
  // ========================================
  // HISTOIRE (6 fiches sur 12)
  // ========================================
  // Antiquité (4 fiches)
  { id: 'histoire-prehistoire', titre: 'La Préhistoire', matiere: 'Histoire', url: '/docs/histoire/prehistoire' },
  { id: 'histoire-civilisations', titre: 'Les premières civilisations', matiere: 'Histoire', url: '/docs/histoire/premieres-civilisations' },
  { id: 'histoire-grece', titre: 'La Grèce antique', matiere: 'Histoire', url: '/docs/histoire/grece-antique' },
  { id: 'histoire-rome', titre: 'Rome', matiere: 'Histoire', url: '/docs/histoire/rome' },
  
  // Moyen Âge (2 fiches)
  { id: 'histoire-moyen-age', titre: 'Le Moyen Âge - Société féodale', matiere: 'Histoire', url: '/docs/histoire/moyen-age-societe-feodale' },
  { id: 'histoire-eglise', titre: 'L\'Église au Moyen Âge', matiere: 'Histoire', url: '/docs/histoire/eglise-moyen-age' },
  
  // À venir : Renaissance, Grandes Découvertes, Révolution, XIXe, Guerres mondiales, Monde depuis 1945
];

function SuiviPage() {
  // État pour stocker les fiches maîtrisées (stocké dans localStorage)
  const [fichesMaitrisees, setFichesMaitrisees] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('fichesMaitrisees');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fichesMaitrisees', JSON.stringify(fichesMaitrisees));
    }
  }, [fichesMaitrisees]);

  // Toggle une fiche (maîtrisée/non maîtrisée)
  const toggleFiche = (ficheId) => {
    setFichesMaitrisees((prev) =>
      prev.includes(ficheId)
        ? prev.filter((id) => id !== ficheId)
        : [...prev, ficheId]
    );
  };

  // Calculer les statistiques
  const nbTotal = fiches.length;
  const nbMaitrisees = fichesMaitrisees.length;
  const pourcentage = Math.round((nbMaitrisees / nbTotal) * 100);

  // Statistiques par matière
  const fichesFrancais = fiches.filter(f => f.matiere === 'Français');
  const fichesMaths = fiches.filter(f => f.matiere === 'Mathématiques');
  const fichesHistoire = fiches.filter(f => f.matiere === 'Histoire');
  
  const nbFrancaisMaitrisees = fichesFrancais.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbMathsMaitrisees = fichesMaths.filter(f => fichesMaitrisees.includes(f.id)).length;
  const nbHistoireMaitrisees = fichesHistoire.filter(f => fichesMaitrisees.includes(f.id)).length;
  
  const pourcentageFrancais = Math.round((nbFrancaisMaitrisees / fichesFrancais.length) * 100);
  const pourcentageMaths = Math.round((nbMathsMaitrisees / fichesMaths.length) * 100);
  const pourcentageHistoire = Math.round((nbHistoireMaitrisees / fichesHistoire.length) * 100);

  return (
    <Layout
      title="Suivi des révisions"
      description="Suivez votre progression dans les révisions du CRPE"
    >
      <div className="container" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        <h1>📊 Suivi des révisions</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Coche les fiches que tu as maîtrisées pour suivre ta progression !
        </p>

        {/* Progression globale */}
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          borderRadius: '12px', 
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginTop: 0 }}>🎯 Progression globale</h2>
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            height: '40px',
            overflow: 'hidden',
            marginBottom: '1rem'
          }}>
            <div style={{
              backgroundColor: '#2e8555',
              height: '100%',
              width: `${pourcentage}%`,
              transition: 'width 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {pourcentage}%
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', margin: 0 }}>
            <strong>{nbMaitrisees}</strong> sur <strong>{nbTotal}</strong> fiches maîtrisées
          </p>
        </div>

        {/* Progression par matière */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {/* Français */}
          <div style={{ 
            backgroundColor: '#fff9f0', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '2px solid #f0e6d2'
          }}>
            <h3 style={{ marginTop: 0 }}>📝 Français</h3>
            <div style={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              height: '30px',
              overflow: 'hidden',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                backgroundColor: '#e67e22',
                height: '100%',
                width: `${pourcentageFrancais}%`,
                transition: 'width 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                {pourcentageFrancais}%
              </div>
            </div>
            <p style={{ margin: 0 }}>
              <strong>{nbFrancaisMaitrisees}</strong> / {fichesFrancais.length} fiches
            </p>
          </div>

          {/* Mathématiques */}
          <div style={{ 
            backgroundColor: '#f0f9ff', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '2px solid #d2e6f0'
          }}>
            <h3 style={{ marginTop: 0 }}>🔢 Mathématiques</h3>
            <div style={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              height: '30px',
              overflow: 'hidden',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                backgroundColor: '#3498db',
                height: '100%',
                width: `${pourcentageMaths}%`,
                transition: 'width 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                {pourcentageMaths}%
              </div>
            </div>
            <p style={{ margin: 0 }}>
              <strong>{nbMathsMaitrisees}</strong> / {fichesMaths.length} fiches
            </p>
          </div>
          
          {/* Histoire */}
          <div style={{ 
            backgroundColor: '#fef5f0', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '2px solid #f0e0d2'
          }}>
            <h3 style={{ marginTop: 0 }}>📜 Histoire</h3>
            <div style={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px', 
              height: '30px',
              overflow: 'hidden',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                backgroundColor: '#c0392b',
                height: '100%',
                width: `${pourcentageHistoire}%`,
                transition: 'width 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}>
                {pourcentageHistoire}%
              </div>
            </div>
            <p style={{ margin: 0 }}>
              <strong>{nbHistoireMaitrisees}</strong> / {fichesHistoire.length} fiches
            </p>
          </div>
        </div>

        {/* Liste des fiches par matière */}
        <h2>📚 Fiches de révision</h2>

        {/* FRANÇAIS */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            backgroundColor: '#fff9f0', 
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #e67e22'
          }}>
            📝 Français ({nbFrancaisMaitrisees}/{fichesFrancais.length})
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            {fichesFrancais.map((fiche) => (
              <div
                key={fiche.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: fichesMaitrisees.includes(fiche.id) ? '#d4edda' : '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #dee2e6',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFiche(fiche.id)}
              >
                <input
                  type="checkbox"
                  checked={fichesMaitrisees.includes(fiche.id)}
                  onChange={() => toggleFiche(fiche.id)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <div style={{ flex: 1 }}>
                  <a 
                    href={fiche.url}
                    style={{ 
                      fontSize: '1.1rem',
                      fontWeight: fichesMaitrisees.includes(fiche.id) ? 'bold' : 'normal',
                      textDecoration: 'none',
                      color: '#1c1e21'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {fiche.titre}
                  </a>
                </div>
                {fichesMaitrisees.includes(fiche.id) && (
                  <span style={{ color: '#28a745', fontSize: '1.5rem' }}>✓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MATHÉMATIQUES */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            backgroundColor: '#f0f9ff', 
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #3498db'
          }}>
            🔢 Mathématiques ({nbMathsMaitrisees}/{fichesMaths.length})
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            {fichesMaths.map((fiche) => (
              <div
                key={fiche.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: fichesMaitrisees.includes(fiche.id) ? '#d1ecf1' : '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #dee2e6',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFiche(fiche.id)}
              >
                <input
                  type="checkbox"
                  checked={fichesMaitrisees.includes(fiche.id)}
                  onChange={() => toggleFiche(fiche.id)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <div style={{ flex: 1 }}>
                  <a 
                    href={fiche.url}
                    style={{ 
                      fontSize: '1.1rem',
                      fontWeight: fichesMaitrisees.includes(fiche.id) ? 'bold' : 'normal',
                      textDecoration: 'none',
                      color: '#1c1e21'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {fiche.titre}
                  </a>
                </div>
                {fichesMaitrisees.includes(fiche.id) && (
                  <span style={{ color: '#17a2b8', fontSize: '1.5rem' }}>✓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* HISTOIRE */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            backgroundColor: '#fef5f0', 
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            borderLeft: '4px solid #c0392b'
          }}>
            📜 Histoire ({nbHistoireMaitrisees}/{fichesHistoire.length})
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            {fichesHistoire.map((fiche) => (
              <div
                key={fiche.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: fichesMaitrisees.includes(fiche.id) ? '#f8d7da' : '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #dee2e6',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFiche(fiche.id)}
              >
                <input
                  type="checkbox"
                  checked={fichesMaitrisees.includes(fiche.id)}
                  onChange={() => toggleFiche(fiche.id)}
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <div style={{ flex: 1 }}>
                  <a 
                    href={fiche.url}
                    style={{ 
                      fontSize: '1.1rem',
                      fontWeight: fichesMaitrisees.includes(fiche.id) ? 'bold' : 'normal',
                      textDecoration: 'none',
                      color: '#1c1e21'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {fiche.titre}
                  </a>
                </div>
                {fichesMaitrisees.includes(fiche.id) && (
                  <span style={{ color: '#c0392b', fontSize: '1.5rem' }}>✓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Message de motivation */}
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
              <h2 style={{ color: '#2e8555', marginTop: 0 }}>
                🎉 Félicitations Marie ! 🎉
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                Tu as maîtrisé toutes les fiches !<br />
                Continue à réviser régulièrement pour bien ancrer tes connaissances.
              </p>
            </>
          ) : pourcentage >= 75 ? (
            <>
              <h2 style={{ color: '#e67e22', marginTop: 0 }}>
                💪 Super progression !
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                Plus que {nbTotal - nbMaitrisees} fiche{nbTotal - nbMaitrisees > 1 ? 's' : ''} à maîtriser !<br />
                Tu es sur la bonne voie !
              </p>
            </>
          ) : pourcentage >= 50 ? (
            <>
              <h2 style={{ color: '#3498db', marginTop: 0 }}>
                🚀 Continue comme ça !
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                Tu es à mi-chemin ! Garde le rythme !
              </p>
            </>
          ) : (
            <>
              <h2 style={{ color: '#95a5a6', marginTop: 0 }}>
                🦦 Courage Marie !
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
                Chaque fiche maîtrisée est un pas de plus vers la réussite !<br />
                Commence par les fiches qui te semblent les plus accessibles.
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SuiviPage;
