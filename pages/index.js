import React, { useState } from 'react';
import arrow_right_blue from '../assets/arrow_right_blue.png';
import img2 from '../assets/img2.webp';
import img1 from '../assets/img1.webp';
import arrowLeft from '../assets/arrow_left.webp';
import { saveResponse } from '../utils/supabaseClient';

const questions_L = [
  {
    id: 1,
    question: 'What’s your actual role?',
    options: ['Assistant', 'Technical', 'Analyst', 'Director', 'Other'],
    type: 'radio',
  },
  {
    id: 2,
    question: 'How many years of experience?',
    options: [
      'Less than 1 year',
      '1-3 years',
      '4-6 years',
      'More than 6 years',
    ],
    type: 'radio',
  },
  {
    id: 3,
    question:
      'What are the biggest challenges you currently face in your work?',
    options: [
      'Campaign management',
      'Customer journey personalization',
      'Integration of different tools',
      'Features',
      'Other',
    ],
    type: 'radio',
  },
  {
    id: 4,
    question:
      'What tools do you currently use to manage your marketing at work?',
    options: [
      'CRM tools (e.g., Salesforce, HubSpot)',
      'Content management systems (e.g. WordPress, Joomla)',
      'Social media management (e.g., Hootsuite, Buffer)',
      'Analytics tools (e.g., Google Analytics, Hotjar)',
      'Other',
    ],
    type: 'radio',
  },

  {
    id: 5,
    question:
      'Which of the following features do you consider most promising or necessary in an all-in-one platform? (select as many as needed)',
    options: [
      'Tools for Campaign Management',
      'Marketing Automation',
      'Integration with social networks',
      'Content personalization',
      'Lead and contact management',
      'Analytics and Reporting',
      'Chatbots and Customer Service',
      'Security and regulatory compliance',
    ],
    type: 'checkbox',
  },

  {
    id: 6,
    question:
      'What improvements or new features would you like to see in a marketing platform? (Open response)',
    options: [],
    type: 'text',
  },
];

function SurveyPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [otherText, setOtherText] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false); // Novo estado para rastrear o término

  const handleOptionChange = (event) => {
    const value = event.target.value;
    const questionId = questions_L[currentQuestionIndex].id;
    const type = questions_L[currentQuestionIndex].type;

    if (type === 'checkbox') {
      const currentSelectedOptions = selectedOptions[questionId] || [];

      if (value === 'Other') {
        if (currentSelectedOptions.includes(value)) {
          setSelectedOptions({
            ...selectedOptions,
            [questionId]: [],
          });
          setOtherText({
            ...otherText,
            [questionId]: '',
          });
        } else {
          setSelectedOptions({
            ...selectedOptions,
            [questionId]: [value],
          });
          setOtherText({
            ...otherText,
            [questionId]: '',
          });
        }
      } else {
        if (currentSelectedOptions.length < 3) {
          setSelectedOptions({
            ...selectedOptions,
            [questionId]: [...currentSelectedOptions, value],
          });
        }
      }
    } else {
      setAnswers({
        ...answers,
        [questionId]: value,
      });
      if (value === 'Other') {
        setOtherText({
          ...otherText,
          [questionId]: '',
        });
      }
    }
  };

  const handleOtherTextChange = (event) => {
    const questionId = questions_L[currentQuestionIndex].id;
    setOtherText({
      ...otherText,
      [questionId]: event.target.value,
    });
  };

  const handleTextAnswerChange = (event) => {
    const questionId = questions_L[currentQuestionIndex].id;
    setAnswers({
      ...answers,
      [questionId]: event.target.value,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions_L.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinalize = async () => {
    const finalAnswers = { ...answers };

    Object.keys(selectedOptions).forEach((questionId) => {
      if (selectedOptions[questionId].includes('Other')) {
        finalAnswers[questionId] = {
          options: selectedOptions[questionId].filter(
            (option) => option !== 'Other'
          ),
          otherText: otherText[questionId] || '',
        };
      } else {
        finalAnswers[questionId] = selectedOptions[questionId];
      }
    });

    Object.keys(otherText).forEach((questionId) => {
      if (answers[questionId] === 'Other') {
        finalAnswers[questionId] = otherText[questionId];
      }
    });

    try {
      const response = await saveResponse(name, email, finalAnswers);

      if (response.error) {
        throw response.error;
      }

      console.log('Respostas salvas com sucesso!');
      setFinished(true); // Defina o estado para indicar que o formulário foi concluído
    } catch (error) {
      console.error('Erro ao salvar respostas:', error.message);
      alert(
        'Ocorreu um erro ao salvar suas respostas. Por favor, tente novamente.'
      );
    }
  };

  const handleStart = () => {
    if (name && email) {
      setSubmitted(true);
    } else {
      alert('Por favor, preencha o nome e o e-mail.');
    }
  };

  const { question, options, type } = questions_L[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions_L.length) * 100;
  const currentQuestionId = questions_L[currentQuestionIndex].id;

  if (finished) {
    // Renderize uma mensagem de agradecimento se o formulário estiver concluído
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
        <h2 className='text-2xl font-bold mb-6 text-center'>
          Thank you for your participation! 🎉
        </h2>
        <p className='text-lg text-center'>
          Your answers have been sent successfully.
        </p>
      </div>
    );
  }

  if (!submitted) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
        <div>
          <img
            src={img1.src}
            className='h-44 w-full px-8 pt-6 pb-4 justify-center items-center gap-2 inline-flex'
            alt='Logo superior - logo'
          />
        </div>

        <div className='w-full max-w-lg bg-white rounded-lg shadow p-6'>
          <h2 className='text-2xl font-bold mb-6 text-center'>
            🥰 Enter your details and let's go to the quiz!!! 🥰
          </h2>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 mb-4 border border-gray-300 rounded'
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 mb-4 border border-gray-300 rounded'
          />

          <div className='inline-flex items-center gap-2 rounded-full border border-sky-700'>
            <button
              onClick={handleStart}
              className='text-sky-700 text-sm sm:text-base md:text-lg font-semibold leading-normal flex items-center gap-2 px-4 py-2'
            >
              Starting questions
              <img
                src={arrow_right_blue.src}
                className='h-4 w-4'
                alt='arrow right'
                style={{ backgroundColor: 'transparent' }}
              />
            </button>
          </div>
        </div>

        <div className='flex flex-col justify-end'>
          <img
            src={img2.src}
            className='h-56 w-full px-8 pt-6 pb-4 justify-center items-center gap-2 inline-flex'
            alt='Logo inferior -  more logo'
          />
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <div>
        <img
          src={img1.src}
          className='h-44 w-full px-8 pt-6 pb-4 justify-center items-center gap-2 inline-flex'
          alt='Logo superior - logo'
        />
      </div>

      <div className='w-full max-w-lg bg-white rounded-lg shadow p-6'>
        <div className='mb-4'>
          {/* Número da Questão */}
          <div className='flex justify-between items-center mb-4'>
            <h2 className={`text-purple-600 text-lg font-semibold `}>
              Question {currentQuestionIndex + 1}
            </h2>
          </div>

          {/* Barra de Progresso */}
          <div className='w-full bg-gray-300 rounded-full h-2.5 mb-4'>
            <div
              className='bg-purple-600 h-2.5 rounded-full'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h2 className='text-2xl font-bold mb-6'>
          {currentQuestionIndex + 1}. {question}
        </h2>
        {type === 'radio' && (
          <div className='space-y-4'>
            {options.map((option) => (
              <label
                key={option}
                className='flex items-center space-x-2 cursor-pointer'
              >
                <input
                  type='radio'
                  name={question}
                  value={option}
                  checked={answers[currentQuestionId] === option}
                  onChange={handleOptionChange}
                  className='h-4 w-4 text-blue-500'
                />
                <span>{option}</span>
              </label>
            ))}
            {answers[currentQuestionId] === 'Other' && (
              <input
                type='text'
                value={otherText[currentQuestionId] || ''}
                onChange={handleOtherTextChange}
                placeholder='Please specify'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            )}
          </div>
        )}
        {type === 'checkbox' && (
          <div className='space-y-4'>
            {options.map((option) => (
              <label
                key={option}
                className='flex items-center space-x-2 cursor-pointer'
              >
                <input
                  type='checkbox'
                  name={question}
                  value={option}
                  checked={selectedOptions[currentQuestionId]?.includes(option)}
                  onChange={handleOptionChange}
                  className='h-4 w-4 text-blue-500'
                />
                <span>{option}</span>
              </label>
            ))}
            {selectedOptions[currentQuestionId]?.includes('Other') && (
              <input
                type='text'
                value={otherText[currentQuestionId] || ''}
                onChange={handleOtherTextChange}
                placeholder='Please specify'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            )}
          </div>
        )}
        {type === 'text' && (
          <textarea
            value={answers[currentQuestionId] || ''}
            onChange={handleTextAnswerChange}
            className='w-full px-3 py-2 border border-gray-300 rounded'
          ></textarea>
        )}

        <div className='flex justify-between mt-6'>
          <button
            onClick={handlePrevious}
            className='inline-flex items-center gap-2 text-sky-700 px-4 py-2 text-sm font-semibold leading-normal rounded-full border border-sky-700 disabled:opacity-10 disabled:cursor-not-allowed'
            disabled={currentQuestionIndex === 0}
          >
            <img
              src={arrowLeft.src}
              className='h-4 w-4'
              alt='arrow left'
              style={{ backgroundColor: 'transparent' }}
            />
            Back
          </button>
          {currentQuestionIndex < questions_L.length - 1 ? (
            <button
              onClick={handleNext}
              className='inline-flex items-center gap-2 text-sky-700 px-4 py-2 text-sm font-semibold leading-normal rounded-full border border-sky-700'
            >
              Next
              <img
                src={arrow_right_blue.src}
                className='h-4 w-4'
                alt='arrow right'
                style={{ backgroundColor: 'transparent' }}
              />
            </button>
          ) : (
            <button
              onClick={handleFinalize}
              className='inline-flex items-center gap-2 text-sky-700 px-4 py-2 text-sm font-semibold leading-normal rounded-full border border-sky-700'
            >
              Finish
            </button>
          )}
        </div>
      </div>

      <div className='flex flex-col justify-end'>
        <img
          src={img2.src}
          className='h-56 w-full px-8 pt-6 pb-4 justify-center items-center gap-2 inline-flex'
          alt='Logo inferior - logo'
        />
      </div>
    </div>
  );
}

export default SurveyPage;
