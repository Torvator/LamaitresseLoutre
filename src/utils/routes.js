// URLs du site avec le bon baseUrl
export const ROUTES = {
  HOME: '/LamaitresseLoutre/',
  LOGIN: '/LamaitresseLoutre/login',
  PROFIL: '/LamaitresseLoutre/profil',
  SUIVI: '/LamaitresseLoutre/suivi',
  COMMENTAIRES: '/LamaitresseLoutre/commentaires',
};

// Fonction de redirection qui fonctionne partout
export function redirectTo(route) {
  window.location.href = route;
}
