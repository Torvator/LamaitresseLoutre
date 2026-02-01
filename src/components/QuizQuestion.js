import React from 'react';

/**
 * QuizQuestion - Composant pour afficher une question QCM
 * 
 * Props:
 * - question: { id, question, options, correctIndex }
 * - selectedAnswer: index de la réponse sélectionnée (ou null)
 * - onSelect: callback quand l'utilisateur sélectionne une réponse
 * - showResult: boolean - afficher si correct/incorrect
 * - questionNumber: numéro de la question (1-10)
 */
export default function QuizQuestion({ 
  question, 
  selectedAnswer, 
  onSelect, 
  showResult,
  questionNumber 
}) {
  
  const getOptionStyle = (index) => {
    const baseStyle = {
      display: 'block',
      width: '100%',
      padding: '1rem 1.25rem',
      marginBottom: '0.5rem',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      backgroundColor: 'white',
      cursor: showResult ? 'default' : 'pointer',
      textAlign: 'left',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
    };

    // Si on affiche les résultats
    if (showResult) {
      if (index === question.correctIndex) {
        // Bonne réponse = vert
        return {
          ...baseStyle,
          borderColor: '#6bcf7f',
          backgroundColor: '#e8f5e9',
        };
      }
      if (index === selectedAnswer && index !== question.correctIndex) {
        // Mauvaise réponse sélectionnée = rouge
        return {
          ...baseStyle,
          borderColor: '#ff6b6b',
          backgroundColor: '#ffebee',
        };
      }
      return baseStyle;
    }

    // Mode sélection
    if (index === selectedAnswer) {
      return {
        ...baseStyle,
        borderColor: '#ff9a9e',
        backgroundColor: '#fff5f5',
      };
    }

    return baseStyle;
  };

  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1.5rem',
      backgroundColor: '#fafafa',
      borderRadius: '16px',
    }}>
      {/* Numéro et question */}
      <p style={{
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#4a4a4a',
        marginBottom: '1rem',
      }}>
        <span style={{
          display: 'inline-block',
          width: '32px',
          height: '32px',
          lineHeight: '32px',
          textAlign: 'center',
          backgroundColor: '#ff9a9e',
          color: 'white',
          borderRadius: '50%',
          marginRight: '0.75rem',
          fontSize: '0.9rem',
        }}>
          {questionNumber}
        </span>
        {question.question}
      </p>

      {/* Options */}
      <div style={{ marginLeft: '2.5rem' }}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && onSelect(index)}
            disabled={showResult}
            style={getOptionStyle(index)}
          >
            <span style={{ marginRight: '0.75rem', fontWeight: '500' }}>
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
            {showResult && index === question.correctIndex && (
              <span style={{ marginLeft: '0.5rem' }}>✓</span>
            )}
            {showResult && index === selectedAnswer && index !== question.correctIndex && (
              <span style={{ marginLeft: '0.5rem' }}>✗</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
