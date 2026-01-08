import React, { useState } from 'react';
import Layout from '@theme/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../utils/useAuth';

function CommentairesContent() {
  const [commentaire, setCommentaire] = useState('');
  const [commentaires, setCommentaires] = useState([]);
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentaire.trim()) {
      setCommentaires([
        {
          id: Date.now(),
          texte: commentaire,
          date: new Date().toLocaleDateString('fr-FR'),
        },
        ...commentaires,
      ]);
      setCommentaire('');
      alert('Commentaire enregistré ! (Pour l\'instant, ils ne sont pas sauvegardés en ligne)');
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '0 2rem',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #ffecd2 0%, #ffcbb3 25%, #ffb6b9 50%, #ffc9cb 75%, #ffd89b 100%)',
        padding: '2rem',
        borderRadius: '16px',
        marginBottom: '2rem',
        textAlign: 'center',
      }}>
        <h1 style={{ color: '#3d3d3d', marginBottom: '1rem' }}>
          💬 Commentaires
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4a4a4a' }}>
          Partage tes besoins de modification du site ou des fiches
        </p>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
        marginBottom: '2rem',
      }}>
        <h2 style={{ color: '#ff9a9e', marginBottom: '1.5rem' }}>
          Nouveau commentaire
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
            placeholder="Écris ton commentaire ou ta suggestion ici..."
            rows={5}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '8px',
              border: '2px solid #ffe5e6',
              fontSize: '1rem',
              resize: 'vertical',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: '1rem',
              padding: '0.75rem 2rem',
              backgroundColor: '#ff9a9e',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff7e84';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ff9a9e';
            }}
          >
            ✉️ Envoyer
          </button>
        </form>
      </div>

      {commentaires.length > 0 && (
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
        }}>
          <h2 style={{ color: '#ff9a9e', marginBottom: '1.5rem' }}>
            Mes commentaires ({commentaires.length})
          </h2>

          {commentaires.map((c) => (
            <div
              key={c.id}
              style={{
                padding: '1rem',
                backgroundColor: '#fff9f0',
                borderRadius: '8px',
                marginBottom: '1rem',
                borderLeft: '4px solid #ff9a9e',
              }}
            >
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{c.texte}</p>
              <small style={{ color: '#666' }}>{c.date}</small>
            </div>
          ))}
        </div>
      )}

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#fff9f0',
        borderRadius: '12px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
          💡 <strong>Note :</strong> Les commentaires ne sont pas encore sauvegardés en ligne.
          Cette fonctionnalité sera ajoutée prochainement !
        </p>
      </div>
    </div>
  );
}

export default function Commentaires() {
  return (
    <ProtectedRoute title="Commentaires" description="Zone de commentaires">
      <Layout title="Commentaires" description="Zone de commentaires">
        <CommentairesContent />
      </Layout>
    </ProtectedRoute>
  );
}
