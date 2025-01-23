import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component

function Quiz() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [quizFinished, setQuizFinished] = useState(false);
    const [language, setLanguage] = useState('en'); // Language state to toggle between 'en' and 'hi'

    const questions = [
        { 
            question: { 
                en: 'What is 2 + 2?', 
                hi: '2 + 2 क्या है?' 
            },
            options: [
                { en: '3', hi: '3' }, 
                { en: '4', hi: '4' }, 
                { en: '5', hi: '5' }
            ],
            answer: { en: '4', hi: '4' }
        },
        { 
            question: { 
                en: 'What is 3 + 5?', 
                hi: '3 + 5 क्या है?' 
            },
            options: [
                { en: '8', hi: '8' }, 
                { en: '7', hi: '7' }, 
                { en: '6', hi: '6' }
            ],
            answer: { en: '8', hi: '8' }
        },
        { 
            question: { 
                en: 'What is the capital of France?', 
                hi: 'फ्रांस की राजधानी क्या है?' 
            },
            options: [
                { en: 'Berlin', hi: 'बर्लिन' }, 
                { en: 'Paris', hi: 'पेरिस' }, 
                { en: 'Madrid', hi: 'मैड्रिड' }
            ],
            answer: { en: 'Paris', hi: 'पेरिस' }
        },
        { 
            question: { 
                en: 'Which planet is closest to the Sun?', 
                hi: 'सूरज के सबसे नजदीकी ग्रह कौन सा है?' 
            },
            options: [
                { en: 'Earth', hi: 'पृथ्वी' }, 
                { en: 'Mars', hi: 'मंगल' }, 
                { en: 'Mercury', hi: 'बुध' }
            ],
            answer: { en: 'Mercury', hi: 'बुध' }
        },
        { 
            question: { 
                en: 'What is the square root of 16?', 
                hi: '16 का वर्गमूल क्या है?' 
            },
            options: [
                { en: '2', hi: '2' }, 
                { en: '4', hi: '4' }, 
                { en: '8', hi: '8' }
            ],
            answer: { en: '4', hi: '4' }
        },
        { 
            question: { 
                en: 'What is the largest ocean on Earth?', 
                hi: 'पृथ्वी का सबसे बड़ा महासागर कौन सा है?' 
            },
            options: [
                { en: 'Atlantic', hi: 'एटलांटिक' }, 
                { en: 'Pacific', hi: 'प्रशांत' }, 
                { en: 'Indian', hi: 'भारतीय' }
            ],
            answer: { en: 'Pacific', hi: 'प्रशांत' }
        },
        { 
            question: { 
                en: 'Which country is known as the Land of the Rising Sun?', 
                hi: 'कौन सा देश सूर्योदय के देश के रूप में जाना जाता है?' 
            },
            options: [
                { en: 'China', hi: 'चीन' }, 
                { en: 'Japan', hi: 'जापान' }, 
                { en: 'Korea', hi: 'कोरिया' }
            ],
            answer: { en: 'Japan', hi: 'जापान' }
        },
        { 
            question: { 
                en: 'Who wrote the play Romeo and Juliet?', 
                hi: 'रोमियो और जूलियट नाटक किसने लिखा?' 
            },
            options: [
                { en: 'Shakespeare', hi: 'शेक्सपीयर' }, 
                { en: 'Dickens', hi: 'डिकेंस' }, 
                { en: 'Hemingway', hi: 'हेमिंग्वे' }
            ],
            answer: { en: 'Shakespeare', hi: 'शेक्सपीयर' }
        },
        { 
            question: { 
                en: 'What is the chemical symbol for water?', 
                hi: 'पानी का रासायनिक प्रतीक क्या है?' 
            },
            options: [
                { en: 'H2O', hi: 'H2O' }, 
                { en: 'O2', hi: 'O2' }, 
                { en: 'CO2', hi: 'CO2' }
            ],
            answer: { en: 'H2O', hi: 'H2O' }
        },
        { 
            question: { 
                en: 'What is the currency of the United Kingdom?', 
                hi: 'यूनाइटेड किंगडम की मुद्रा क्या है?' 
            },
            options: [
                { en: 'Dollar', hi: 'डॉलर' }, 
                { en: 'Pound', hi: 'पाउंड' }, 
                { en: 'Euro', hi: 'यूरो' }
            ],
            answer: { en: 'Pound', hi: 'पाउंड' }
        },
    ];

    const handleAnswer = (selected) => {
        setSelectedAnswer(selected);
        if (selected === questions[questionIndex].answer[language]) {
            setScore(score + 1);
            setFeedback(language === 'en' ? 'Correct!' : 'सही!');
        } else {
            setFeedback(language === 'en' ? 'Incorrect!' : 'गलत!');
        }
        setIsAnswered(true);
    };

    const nextQuestion = () => {
        if (questionIndex === questions.length - 1) {
            setQuizFinished(true);
        } else {
            setQuestionIndex(questionIndex + 1);
            setIsAnswered(false);
            setSelectedAnswer(null);
            setFeedback('');
        }
    };

    const tryAgain = () => {
        setScore(0);
        setQuestionIndex(0);
        setQuizFinished(false);
        setIsAnswered(false);
        setSelectedAnswer(null);
        setFeedback('');
    };

    return (
        <div>
            <Navbar />
            <div className="quiz-container">
                <h2 className="quiz-title">{language === 'en' ? 'Quiz Time!' : 'क्विज़ समय!'}</h2>

                {/* Language Toggle */}
                <div className="language-toggle">
                    <button onClick={() => setLanguage('en')} className={`btn ${language === 'en' ? 'active' : ''}`}>English</button>
                    <button onClick={() => setLanguage('hi')} className={`btn ${language === 'hi' ? 'active' : ''}`}>हिंदी</button>
                </div>

                {!quizFinished ? (
                    <div className="quiz-question-container">
                        <div className="question-header">
                            <span className="question-count">{`Question ${questionIndex + 1} of ${questions.length}`}</span>
                            <span className="score-display">Score: {score}</span>
                        </div>

                        <h4>{questions[questionIndex].question[language]}</h4>

                        <div className="options-container">
                            {questions[questionIndex].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    className={`btn btn-option 
                                        ${isAnswered && option[language] === questions[questionIndex].answer[language] ? 'correct' : ''} 
                                        ${isAnswered && option[language] !== questions[questionIndex].answer[language] && option[language] === selectedAnswer ? 'incorrect' : ''}`}
                                    onClick={() => handleAnswer(option[language])}
                                    disabled={isAnswered}
                                >
                                    {option[language]}
                                </button>
                            ))}
                        </div>

                        {isAnswered && (
                            <div className="feedback">
                                <p>{feedback}</p>
                                <div className="next-button-container">
                                    <button className="btn btn-next" onClick={nextQuestion}>
                                        {language === 'en' ? 'Next Question' : 'अगला प्रश्न'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="final-result">
                        <h3>{language === 'en' ? 'Quiz Finished!' : 'क्विज़ समाप्त हुआ!'}</h3>
                        <h4>{language === 'en' ? `Your Final Score: ${score} out of ${questions.length}` : `आपका अंतिम स्कोर: ${score} में से ${questions.length}`}</h4>
                        <button className="btn btn-primary" onClick={tryAgain}>
                            {language === 'en' ? 'Try Again' : 'फिर से प्रयास करें'}
                        </button>
                    </div>
                )}
            </div>

            {/* Inline CSS */}
            <style>{`
                .quiz-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    margin-top: 100px; /* Increased margin-top for more space between navbar and quiz */
                }

                .quiz-title {
                    text-align: center;
                    color: #4CAF50;
                    font-size: 28px;
                    margin-bottom: 20px;
                }

                .language-toggle {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .language-toggle button {
                    padding: 10px 20px;
                    margin: 0 10px;
                    border: 1px solid #007bff;
                    background-color: #fff;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }

                .language-toggle button.active {
                    background-color: #007bff;
                    color: white;
                }

                .quiz-question-container {
                    padding: 20px;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .question-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    width: 100%;
                    font-size: 16px;
                    color: #555;
                    font-weight: 600;
                }

                .question-count {
                    font-size: 16px;
                    color: #4CAF50;
                }

                .score-display {
                    font-size: 16px;
                    font-weight: bold;
                    color: #4CAF50;
                }

                h4 {
                    color: #333;
                    font-size: 20px;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .options-container {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    text-align: center;
                    width: 100%;
                }

                .btn-option {
                    background-color: #007bff;
                    color: white;
                    padding: 15px 25px;
                    font-size: 18px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .btn-option:hover {
                    background-color: #0056b3;
                    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
                    transform: translateY(-2px);
                }

                .btn-option.correct {
                    background-color: #28a745;
                }

                .btn-option.incorrect {
                    background-color: #dc3545;
                }

                .btn-option:disabled {
                    background-color: #ddd;
                    cursor: not-allowed;
                    box-shadow: none;
                }

                .feedback {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 18px;
                    color: #333;
                }

                .next-button-container {
                    margin-top: 20px;
                    text-align: center;
                }

                .btn-next {
                    background-color: #28a745;
                    border: none;
                    padding: 12px 20px;
                    font-size: 18px;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn-next:hover {
                    background-color: #218838;
                }

                .final-result {
                    text-align: center;
                    padding: 30px;
                    background-color: #f0f0f0;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                }

                .final-result h3 {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .final-result h4 {
                    font-size: 22px;
                    margin-bottom: 15px;
                    color: #4CAF50;
                }

                .final-result button {
                    background-color: #007bff;
                    padding: 15px 25px;
                    color: white;
                    font-size: 18px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .final-result button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
}

export default Quiz;
