import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FAQs = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animations occur only once
    });
  }, []);

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
      {/* Heading with AOS */}
      <h2
        className="text-4xl font-bold text-black mb-8 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        FAQs
      </h2>

      {/* Accordion with AOS */}
      <div className="w-full px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 bg-gray-50 rounded-md mb-2"
            data-aos="fade-up"
            data-aos-delay={`${200 + index * 100}`} // Staggered delay: 200ms, 300ms, 400ms, 500ms
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