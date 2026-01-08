import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../utils/useAuth';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

// 🔑 EMAIL ADMIN
const ADMIN_EMAIL = 'pro.alexis.costa@gmail.com';

function MessageBubble({ message, isAdmin, isOwnMessage }) {
  const bubbleColor = isAdmin ? '#ff9a9e' : '#6bcf7f';
  const bgColor = isOwnMessage ? bubbleColor : '#f5f5f5';
  const textColor = isOwnMessage ? 'white' : '#4a4a4a';
  const align = isOwnMessage ? 'flex-end' : 'flex-start';

  // Gestion sécurisée de la date
  let dateDisplay = 'Envoi en cours...';
  if (message.date && message.date.toDate) {
    try {
      dateDisplay = new Date(message.date.toDate()).toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      dateDisplay = 'Date invalide';
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: align,
      marginBottom: '1rem',
    }}>
      <div style={{
        maxWidth: '70%',
        padding: '1rem',
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem',
        }}>
          <strong style={{ fontSize: '0.9rem' }}>
            {isAdmin ? '👨‍💼 Admin' : '👤 ' + (message.userEmail ? message.userEmail.split('@')[0] : 'Utilisateur')}
          </strong>
          {isAdmin && (
            <span style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.5rem',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius: '8px',
            }}>
              ADMIN
            </span>
          )}
        </div>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', lineHeight: '1.5' }}>
          {message.texte}
        </p>
        <small style={{ fontSize: '0.8rem', opacity: 0.8 }}>
          {dateDisplay}
        </small>
      </div>
    </div>
  );
}

function CommentairesContent() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const { user, loading: authLoading } = useAuth();

  // Vérification sécurisée de l'admin
  const isAdmin = user?.email === ADMIN_EMAIL;

  // Écouter les messages en temps réel
  useEffect(() => {
    if (!user) return;

    try {
      const q = query(
        collection(db, 'commentaires'),
        orderBy('date', 'asc')
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const messagesData = [];
        snapshot.forEach((doc) => {
          messagesData.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messagesData);
        setLoading(false);
      }, (error) => {
        console.error('Erreur chargement messages:', error);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Erreur initialisation:', error);
      setLoading(false);
    }
  }, [user]);

  // Attendre que l'authentification soit chargée
  if (authLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>Chargement...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>Vous devez être connecté</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || sending) return;

    setSending(true);
    try {
      await addDoc(collection(db, 'commentaires'), {
        texte: message,
        userEmail: user.email,
        userId: user.uid,
        isAdmin: isAdmin,
        date: serverTimestamp(),
      });
      setMessage('');
    } catch (error) {
      console.error('Erreur envoi message:', error);
      alert('Erreur lors de l\'envoi du message. Vérifiez les règles Firebase.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{
      maxWidth: '900px',
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
          💬 Messagerie
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#4a4a4a' }}>
          {isAdmin ? 'Espace admin - Répondez aux utilisateurs' : 'Communiquez avec l\'administrateur'}
        </p>
      </div>

      {/* Zone de messages */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
        marginBottom: '2rem',
        minHeight: '400px',
        maxHeight: '600px',
        overflowY: 'auto',
      }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: '#666' }}>Chargement des messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>
              Aucun message pour le moment. Soyez le premier à écrire !
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isAdmin={msg.isAdmin}
              isOwnMessage={msg.userId === user.uid}
            />
          ))
        )}
      </div>

      {/* Formulaire d'envoi */}
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(255, 182, 185, 0.15)',
      }}>
        <h2 style={{ color: '#ff9a9e', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
          {isAdmin ? '💬 Répondre' : '✉️ Nouveau message'}
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={isAdmin ? "Écrivez votre réponse..." : "Écrivez votre message à l'admin..."}
            rows={4}
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

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}>
            <small style={{ color: '#666' }}>
              Connecté en tant que : <strong>{user.email}</strong>
              {isAdmin && <span style={{ color: '#ff9a9e' }}> (Admin)</span>}
            </small>

            <button
              type="submit"
              disabled={sending || !message.trim()}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: sending ? '#ccc' : (isAdmin ? '#ff9a9e' : '#6bcf7f'),
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '600',
                cursor: sending ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
              }}
              onMouseOver={(e) => {
                if (!sending && message.trim()) {
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              {sending ? 'Envoi...' : '📤 Envoyer'}
            </button>
          </div>
        </form>
      </div>

      {/* Info temps réel */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#fff9f0',
        borderRadius: '12px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
          ✨ <strong>Messages en temps réel</strong> - Les nouveaux messages apparaissent automatiquement
        </p>
      </div>
    </div>
  );
}

export default function Commentaires() {
  return (
    <ProtectedRoute title="Messagerie" description="Zone de messagerie">
      <Layout title="Messagerie" description="Zone de messagerie">
        <CommentairesContent />
      </Layout>
    </ProtectedRoute>
  );
}
