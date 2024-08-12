// src/components/FAQItem.js
import React, { useState } from 'react';
import arrow from '../../assets/icons/arrow.png'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <img src={arrow} alt="globo" width={40}  className='arrow'/>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;