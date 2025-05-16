import React, { useState } from 'react';

const FAQs = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data (questions and placeholder answers)
  const faqs = [
    {
      question: 'What kind of image should I upload?',
      answer: 'Upload a clear, well-lit photo of your teeth, preferably showing the front view.',
    },
    {
      question: 'How accurate is the AI system?',
      answer: 'Our AI system is highly accurate, using advanced dental data and machine learning to analyze your condition.',
    },
    {
      question: 'Is this a free service?',
      answer: 'Yes, our service is completely free for users to upload photos and get recommendations.',
    },
    {
      question: 'Will I get a real provider’s name?',
      answer: 'Yes, you’ll receive recommendations with real provider names based on your location and dental needs.',
    },
  ];

  // Toggle accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black mb-8 text-center">
        FAQs
      </h2>

      {/* Accordion */}
      <div className="w-full  px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 bg-gray-50 rounded-md mb-2"
          >
            {/* Question */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-gray-600">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>

            {/* Answer (visible when open) */}
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;