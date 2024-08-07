// src/components/FAQList.js
import React from 'react';
import FAQItem from './faqsItem.jsx';
import { faqs } from '../faqs/faqs.js';
import '../faqs/faqStyle.css'

const FAQList = () => {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;