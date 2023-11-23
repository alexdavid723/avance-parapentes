import React from "react";
import './ModalPyState.css';
import axios from "axios";

const ModalPyState = ({ statePay, setStatePay, modePay, onSaveEstado, newEstado, setNewEstado }) => {
    const closeModalPay = () => {
        setNewEstado({ nombre: '', descripcion: '' });
        setStatePay(false);
      };
      
    const obtenerIdDelEstado = () => {
        // Implementa la lógica para obtener el ID del estado según tus necesidades
        // Por ejemplo, podrías almacenar el ID en el estado o pasarlo como prop desde el componente padre
        // Asegúrate de tener una lógica válida para obtener el ID
    };

    const handleSave = async () => {
        try {
            if (!newEstado.nombre.trim() || !newEstado.descripcion.trim()) {
                console.error("Nombre y descripción son campos obligatorios.");
                return null;
            }

            let response;
            if (modePay === 'create') {
                response = await axios.post("http://localhost:5000/estado", newEstado);
                console.log("Nuevo estado de pago creado:", response.data);
            } else if (modePay === 'update') {
                const estadoId = obtenerIdDelEstado();
                if (!estadoId) {
                    console.error("No se pudo obtener el ID del estado para la actualización.");
                    return null;
                }

                response = await axios.put(`http://localhost:5000/estado/${estadoId}`, newEstado);
                console.log("Estado de pago actualizado:", response.data);
            }

            closeModalPay();
            onSaveEstado();
            console.log('newEstado después de onSaveEstado:', newEstado);
            return response;
        } catch (error) {
            console.error("Error al realizar la operación:", error);
            return null;
        }
    };

    return (
        statePay && (
            <>
                <div className="container-modal-state">
                    <div className="modal-state">
                        <div className="content-modal-state">
                            <div className="content-body-state">
                                <div className="header-state">
                                    <span className="title-state-pay">{modePay === 'create' ? 'Nuevo Paquete' : 'Actualizar'}</span>
                                    <button className="button-close-pay" onClick={closeModalPay}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="input-name-state">
                                    <input
                                        type="text"
                                        value={newEstado.nombre}
                                        onChange={(e) => setNewEstado({ ...newEstado, nombre: e.target.value })}
                                    />
                                    <label className="title-name-state">Nombre</label>
                                </div>
                                <div className="input-description-state">
                                    <textarea
                                        className="input-description"
                                        value={newEstado.descripcion}
                                        onChange={(e) => setNewEstado({ ...newEstado, descripcion: e.target.value })}
                                    ></textarea>
                                    <label className="title-description-state">Descripcion</label>
                                </div>
                            </div>
                            <div className="futter-state">
                                <button type="button" className="button-save" onClick={handleSave}>
                                    {modePay === 'create' ? 'Crear' : 'Actualizar'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

export default ModalPyState;
