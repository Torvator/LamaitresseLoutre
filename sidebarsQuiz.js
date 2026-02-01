/**
 * sidebarsQuiz.js - Navigation pour la section Quiz
 * 
 * IMPORTANT : N'ajouter une catégorie que quand elle contient au moins 1 quiz !
 * Sinon Docusaurus plante au build.
 */

module.exports = {
  quizSidebar: [
    'intro',
    {
      type: 'category',
      label: '🔬 Sciences',
      items: [
        'sciences/matiere-etats-changements',
      ],
    },
    // ============================================
    // DÉCOMMENTER AU FUR ET À MESURE QUE TU AJOUTES DES QUIZ
    // ============================================
    // {
    //   type: 'category',
    //   label: '📝 Français',
    //   items: [
    //     'francais/grammaire',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🔢 Mathématiques',
    //   items: [
    //     'maths/nombres-entiers-decimaux',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '📜 Histoire',
    //   items: [
    //     'histoire/prehistoire',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🌍 Géographie',
    //   items: [
    //     'geographie/geo_lieux_habite',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🌈 EMC',
    //   items: [
    //     'emc/emc_sensibilite',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🎨 Arts',
    //   items: [
    //     'arts/arts-plastiques-fondamentaux',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '⚽ EPS',
    //   items: [
    //     'eps/eps-didactique-developpement',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🇬🇧 Anglais',
    //   items: [
    //     'anglais/anglais-grammaire',
    //   ],
    // },
  ],
};
