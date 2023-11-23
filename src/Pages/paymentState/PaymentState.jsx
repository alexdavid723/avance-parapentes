import React, { useState, useEffect } from "react";
import ModalPyState from "../../components/Modal/ModalPyState";
import CreateButton from "../../components/Buttons/CreateButton";
import axios from "axios";

function PaymentState() {
    const [stateModalSet, setModalStateSet] = useState(false);
    const [modalModeState, setModalModeState] = useState('create');
    const [estados, setEstados] = useState([]);
    const [newEstado, setNewEstado] = useState({
        nombre: '',
        descripcion: '',
    });

    useEffect(() => {
        fetchEstados();
    }, []);

    const fetchEstados = async () => {
        try {
            const response = await axios.get("http://localhost:5000/estado");
            setEstados(response.data);
        } catch (error) {
            console.error("Error fetching estados:", error);
        }
    };

    const openModalPay = (modeState) => {
        setModalModeState(modeState);
        setModalStateSet(true);
    };

    const handleSaveEstado = async () => {
        try {
            if (!newEstado.nombre.trim() || !newEstado.descripcion.trim()) {
                console.error("Nombre y descripción son campos obligatorios.");
                return;
            }

            let response;

            if (modalModeState === 'create') {
                response = await axios.post("http://localhost:5000/estado", newEstado);
                console.log("Nuevo estado de pago creado:", response.data);
            } else {
                const estadoId = obtenerIdDelEstado(); // Asegúrate de que tienes esta función definida
                if (!estadoId) {
                    console.error("No se pudo obtener el ID del estado para la actualización.");
                    return;
                }

                response = await axios.put(`http://localhost:5000/estado/${estadoId}`, newEstado);
                console.log("Estado de pago actualizado:", response.data);
            }

            // Limpiar el nuevo estado después de la creación/actualización
            setNewEstado({ nombre: '', descripcion: '' });

            // Esperar a que la operación se complete antes de actualizar la lista y cerrar el modal
            await fetchEstados();

            // Cierra el modal después de completar las operaciones
            setModalStateSet(false);
            console.log('newEstado después de cerrar el modal:', newEstado);
        } catch (error) {
            console.error("Error saving estado:", error);
        }
    };

    return (
        <>
            <div className="package-container">
                <div className="container">
                    <div className="header-info"></div>
                    <div className="content-info">
                        <div className="content-top">
                            <div className="options-left">
                                <CreateButton text='Nuevo' openModalState={() => openModalPay('create')} />
                            </div>
                            <div className="options-right">
                                <div className="option-card">
                                    {/* Iconos */}
                                </div>
                                <div className="option-list">
                                    {/* Iconos */}
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            <div className="table-header">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>N</th>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="table-content">
                                <table>
                                    <tbody>
                                        {estados.map((estado, index) => (
                                            <tr key={estado.id}>
                                                <td>{index + 1}</td>
                                                <td>{estado.nombre}</td>
                                                <td>{estado.descripcion}</td>
                                                <td>
                                                    <div className="content-actions">
                                                        {/* Botones de acción */}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="content-button">
                            <span>pagination</span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalPyState
                statePay={stateModalSet}
                setStatePay={setModalStateSet}
                modePay={modalModeState}
                onSaveEstado={handleSaveEstado}
                newEstado={newEstado}
                setNewEstado={setNewEstado} // Asegúrate de pasar setNewEstado
            />
        </>
    );
}

export default PaymentState;
