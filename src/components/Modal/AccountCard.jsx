// AccountCard.jsx
import React from "react";
import "./AccountCard.css"; // Puedes agregar estilos según tus preferencias

const AccountCard = ({ account, onClose }) => {
    return (
        <div className="account-card">
          <div className="title">Datos de la cuenta</div>
          <div className="card-content">
            <div className="image-container">
              <img src={account.urlImagen} alt="Imagen de la cuenta" />
            </div>
            <div className="details-column">
              <p>Nombre: {account.nombre}</p>
              <p>Descripción: {account.descripcion}</p>
              <p>Número: {account.numero}</p>
              <p>CCI: {account.cci}</p>
              <p>Estado: {account.estado ? "Activo" : "Inactivo"}</p>
            </div>
          </div>
          <button className="close-card" onClick={onClose}>
            Cerrar
          </button>
        </div>
      );
    };
    
    
    

export default AccountCard;
