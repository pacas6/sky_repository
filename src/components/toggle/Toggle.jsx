import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ToggleSwitch.css';

const ToggleSwitch = ({ onToggle }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggle = () => {
    setIsAnnual(!isAnnual);
    onToggle(!isAnnual); // Notifica o componente pai sobre a mudança de estado
  };

  return (
    <div className="toggle-container">
      <div className="toggle-button" onClick={toggle}>
        <CSSTransition
          in={!isAnnual}
          timeout={300}
          classNames="toggle"
          unmountOnExit
        >
          <div className="toggle-option mensal">
            MENSAL
          </div>
        </CSSTransition>
        <CSSTransition
          in={isAnnual}
          timeout={300}
          classNames="toggle"
          unmountOnExit
        >
          <div className="toggle-option anual">
            ANUAL
          </div>
        </CSSTransition>
      </div>
      <p className="save-text">{isAnnual ? 'POUPE 16%' : ''}</p>
    </div>
  );
};

export default ToggleSwitch;