import React from "react";
import './ButtonStyle.css';

function CreateButton({ text, openModal, openModalMethod,openModalState,openModalResv }) {
  const handleButtonClick = () => {
    if (openModal) {
      openModal('create');
    }
    else if (openModalMethod) {
      openModalMethod('create');
    }
    else if(openModalState){
      openModalState('create');
    }
    else if(openModalResv){
      openModalResv('create');
    }

    
  };
  return (
    <>
      <button className="create-button" onClick={handleButtonClick}>
        <span className="text-create-button">{text}</span>
        <span className="ico-image">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
            <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/>
          </svg>
        </span>
      </button>
    </>
  );
}

export default CreateButton;
