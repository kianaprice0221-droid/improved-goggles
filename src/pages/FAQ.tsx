import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients see engagement improvements within 2-4 weeks and significant follower growth around 2-3 months. We recommend a 3-6 month commitment for optimal results and building a strong, engaged community."
    },
    {
      question: "Do I need to provide content, or do you create it?",
      answer: "We handle everything! Our team creates all content including graphics, videos, captions, and hashtags. We just need occasional input like product photos or specific announcements. You'll approve a content calendar each month."
    },
    {
      question: "Which platforms do you manage?",
      answer: "We specialize in Instagram, TikTok, YouTube, Twitter/X, LinkedIn, and Facebook. During our consultation, we'll recommend the best platforms for your business and target audience."
    },
    {
      question: "What makes you different?",
      answer: "We provide personalized attention to every client, stay on top of trends and algorithm changes, focus on authentic engagement over vanity metrics, and maintain transparent reporting. You'll have a dedicated account manager available whenever you need them."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! After the minimum 3-month commitment, you can cancel with 30 days notice. No hidden fees or cancellation charges. We want you to stay because you love our work."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-content">
      <div className="faq-hero">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Everything you need to know about our process and services</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <h2>Still have questions?</h2>
        <p>We're here to help! Reach out to us anytime.</p>
      </div>
    </div>
  );
}

export default FAQ;
