import React from "react";
import './ModalReserva.css'

function ModalReserva({stateResv, setStateResv, modeResv}){

    const closeModalResv = () => {
        setStateResv(false);
    };

    return (

        stateResv && (
            <>
                <div className="modal-container-reservations">
                    <div className="content-modal-reservat">
                        <div className="header-reservations">
                            <span className="title-reservations">Nueva reserva</span>
                            <button className="butron-close-reser" onClick={closeModalResv}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/>
                                </svg>
                            </button>
                        </div>
                        <form className="content-reservations">
                            <div className="reservations-img-inputs">
                                <div className="inputs-reservations">

                                </div>
                                <div className="upload-images">
                                    
                                </div>
                            </div>
                            <div className="buttons-reservations">
                                {modeResv === 'create' ? 
                                    (<button type="button" className="button-save-reser">Crear</button>) 
                                    : 
                                    (<button type="button" className="button-save-reser">Editar</button>)
                                }
                                <button type="button" onClick={closeModalResv} className="button-cancel-reser">Cancelar</button>
                            </div>

                        </form>
                    </div>
                </div>

            </>
        )
        
    )
}
export default ModalReserva; 