import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, Award, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../data/quizData';

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    const isCorrect = selectedOption === currentQ.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setIsAnswerSubmitted(true);
    setUserAnswers(prev => [...prev, {
      questionId: currentQ.id,
      selected: selectedOption,
      isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getBadge = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 85) return { title: 'Punjab Scholar & Heritage Champion', color: 'var(--color-emerald)' };
    if (percentage >= 60) return { title: 'Knowledgeable Explorer', color: 'var(--color-mustard)' };
    return { title: 'Curious Enthusiast', color: 'var(--color-crimson)' };
  };

  return (
    <section id="quiz" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <HelpCircle size={14} />
            <span>Interactive Knowledge Challenge</span>
          </span>
          <h2 className="section-title">
            Punjab Heritage Quiz
          </h2>
          <p className="section-subtitle">
            Test your understanding of Punjab’s geography, history, freedom struggle, cuisine, and cultural traditions.
          </p>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {!quizCompleted ? (
            <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)' }}>
              {/* Progress Bar & Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-mustard-hover)' }}>
                    Question {currentIdx + 1} of {quizQuestions.length}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Score: <strong>{score}</strong>
                  </span>
                </div>

                {/* Animated Progress Bar Track */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-full)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${((currentIdx + 1) / quizQuestions.length) * 100}%`,
                    height: '100%',
                    backgroundColor: 'var(--color-emerald)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 0.4s ease'
                  }}></div>
                </div>
              </div>

              {/* Question Category & Text */}
              <div style={{ marginBottom: '1.75rem' }}>
                <span className="section-tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', marginBottom: '0.5rem' }}>
                  {currentQ.category}
                </span>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginTop: '0.4rem', lineHeight: '1.35' }}>
                  {currentQ.question}
                </h3>
              </div>

              {/* 4 Options Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {currentQ.options.map((opt, optIdx) => {
                  let optBg = 'var(--bg-secondary)';
                  let optBorder = 'var(--border-medium)';
                  let optColor = 'var(--text-primary)';

                  if (isAnswerSubmitted) {
                    if (optIdx === currentQ.correctAnswer) {
                      optBg = 'var(--color-emerald-subtle)';
                      optBorder = 'var(--color-emerald)';
                      optColor = 'var(--color-emerald)';
                    } else if (optIdx === selectedOption) {
                      optBg = 'var(--color-crimson-subtle)';
                      optBorder = 'var(--color-crimson)';
                      optColor = 'var(--color-crimson)';
                    }
                  } else if (selectedOption === optIdx) {
                    optBg = 'var(--color-mustard-subtle)';
                    optBorder = 'var(--color-mustard)';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={isAnswerSubmitted}
                      style={{
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        fontSize: '1rem',
                        fontWeight: 500,
                        backgroundColor: optBg,
                        border: `2px solid ${optBorder}`,
                        color: optColor,
                        cursor: isAnswerSubmitted ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          border: `1.5px solid ${optBorder}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isAnswerSubmitted && optIdx === currentQ.correctAnswer && (
                        <CheckCircle size={20} style={{ color: 'var(--color-emerald)' }} />
                      )}
                      {isAnswerSubmitted && selectedOption === optIdx && optIdx !== currentQ.correctAnswer && (
                        <XCircle size={20} style={{ color: 'var(--color-crimson)' }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Educational Explanation */}
              {isAnswerSubmitted && (
                <div style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: selectedOption === currentQ.correctAnswer ? 'var(--color-emerald-subtle)' : 'var(--color-crimson-subtle)',
                  border: `1px solid ${selectedOption === currentQ.correctAnswer ? 'var(--color-emerald)' : 'var(--color-crimson)'}`,
                  marginBottom: '1.75rem',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: selectedOption === currentQ.correctAnswer ? 'var(--color-emerald)' : 'var(--color-crimson)',
                    marginBottom: '0.4rem'
                  }}>
                    {selectedOption === currentQ.correctAnswer ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Correct! Outstanding!</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={18} />
                        <span>Incorrect. The correct answer is: {currentQ.options[currentQ.correctAnswer]}</span>
                      </>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.55', color: 'var(--text-primary)' }}>
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                {!isAnswerSubmitted ? (
                  <button
                    className="btn btn-gold"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    style={{
                      opacity: selectedOption === null ? 0.6 : 1,
                      cursor: selectedOption === null ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleNextQuestion}
                  >
                    <span>{currentIdx + 1 === quizQuestions.length ? 'View Final Results' : 'Next Question'}</span>
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Final Results Screen */
            <div className="card" style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--bg-card)' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-mustard-subtle)',
                color: 'var(--color-mustard-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <Award size={44} />
              </div>

              <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
                Quiz Completed
              </span>

              <h3 style={{ fontSize: '2.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Your Score: {score} / {quizQuestions.length}
              </h3>

              <div style={{ fontSize: '1.15rem', color: getBadge().color, fontWeight: 700, marginBottom: '1.5rem' }}>
                Honorary Badge: {getBadge().title}
              </div>

              <p style={{ maxWidth: '540px', margin: '0 auto 2.5rem auto', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {score >= 10
                  ? 'Incredible mastery! You have an exceptional grasp of Punjab’s history, cultural nuances, sacred geography, and contributions to India.'
                  : score >= 7
                  ? 'Great effort! You know Punjab well and appreciate its rich heritage, traditions, and legendary figures.'
                  : 'A good start! Re-read the chapters on History, Geography, and Personalities to deepen your appreciation of Punjab.'}
              </p>

              <button
                className="btn btn-gold"
                onClick={handleRestartQuiz}
                style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
              >
                <RotateCcw size={18} />
                <span>Restart Quiz</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
