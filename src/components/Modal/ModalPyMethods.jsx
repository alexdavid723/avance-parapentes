import React, { useState, useEffect } from "react";
import axios from "axios";
import './ModalPyMethods.css'
import Swal from "sweetalert2";


const ModalPyMethods = ({ stateMtd, setStateMtd , mtdmode, accountActual, updateAccountsList }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        imagen: null,
        numero: "",
        cci: "",
        estado: false,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("accountActual:", accountActual);
        // Si hay un paquete actual, cargar sus datos en el formulario
        if (mtdmode === 'edit' && accountActual && accountActual.id) {
            setFormData((prevData) => ({
                ...prevData,
                nombre: accountActual.nombre || "",
                descripcion: accountActual.descripcion || "",
                numero: accountActual.numero?.toString() || "",
                cci: accountActual.cci?.toString() || "",
                estado: accountActual.estado || false,
            }));

            // Mostrar la imagen actual
            setSelectedImage(accountActual.urlImagen);
        }else {
            // Si el modo no es 'edit', limpiar los datos del formulario
            setFormData({
                nombre: "",
                descripcion: "",
                imagen: null,
                numero: "",
                cci: "",
                estado: false,
            });
            setSelectedImage(null);
        }
    }, [mtdmode, accountActual]);
   
    const closeModal = () => {
        setStateMtd(false);
        setError(null); // Limpiar cualquier mensaje de error al cerrar el modal
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
            setFormData((prevData) => ({
                ...prevData,
                imagen: file,
            }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Convertir valores a números o booleanos si es necesario
        const updatedValue =
            name === "numero" ? parseInt(value, 10) : name === "cci" ? parseInt(value) : name === "estado" ? value === "true" : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));
    };

    const handleSave = async () => {
        try {
            // Verificar si paqueteActual.id está definido
            if (!accountActual || !accountActual.id) {
                console.error("La cuenta actual o su ID no están definidos.");
                setError("No se puede realizar la operación. Por favor, inténtelo de nuevo.");
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append("nombre", formData.nombre);
            formDataToSend.append("descripcion", formData.descripcion);
            formDataToSend.append("numero", formData.numero);
            formDataToSend.append("cci", formData.cci);
            formDataToSend.append("estado", formData.estado);

            if (formData.imagen) {
                formDataToSend.append("imagen", formData.imagen);
            }

            // Usar paqueteActual.id directamente aquí
            const response = await axios.put(`http://localhost:5000/formapago/${accountActual.id}`, formDataToSend);

            if (response && response.data) {
                Swal.fire({
                    title: "Cuenta Modificado con exito!",
                    icon: "success"
                  });

                // Aquí puedes manejar la respuesta del servidor como sea necesario

                // Cerrar el modal después de guardar
                
                
                closeModal();
                updateAccountsList(response.data);
            } else {
                console.error("La respuesta del servidor no contiene datos.");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            setError("Error al realizar la solicitud. Por favor, inténtelo de nuevo.");
        }
    };

    const handleCreate = async () => {
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("nombre", formData.nombre);
            formDataToSend.append("descripcion", formData.descripcion);
            formDataToSend.append("numero", formData.numero);
            formDataToSend.append("cci", formData.cci);
            formDataToSend.append("estado", formData.estado);

            if (formData.imagen) {
                formDataToSend.append("imagen", formData.imagen);
            }

            const response = await axios.post("http://localhost:5000/formapago", formDataToSend);

            if (response && response.data) {
                Swal.fire({
                    title: "Cuenta agregado con exito!",
                    icon: "success"
                  });
                // Aquí puedes manejar la respuesta del servidor como sea necesario

                // Cerrar el modal después de guardar
                
               
                closeModal();
                setFormData({
                    nombre_paquete: "",
                    descripcion: "",
                    imagen: null,
                    numero: "",
                    cci: "",
                    estado: false,
                });
                setSelectedImage(null);
                updateAccountsList(response.data);
            } else {
                console.error("La respuesta del servidor no contiene datos.");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            setError("Error al realizar la solicitud. Por favor, inténtelo de nuevo.");
        }
    };

    return(
        stateMtd && (
            <>
                <div className="container-modal-accounts">
                    <div className="content-modal-accounts">
                        <div className="header-methods">
                            <div className="title-closeMetds">
                                <span>{mtdmode === 'create' ? 'Nuevo Paquete':'update'}</span>
                                <button className="ico-close-metds" type='button' onClick={closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <form className="form-methods">
                            <div className="content-inputs">
                                <div className="img-inputs-nde">
                                    <div className="img-method">
                                        <div className="view-img">
                                        {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt="Vista previa"
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                    ) : (
                                        <span>No image selected</span>
                                    )}
                                        </div>
                                        <div className="upload-img">
                                        <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                        </div>
                                    </div>
                                    <div className="inputs-text-methods">
                                        <div className="input-name-method">
                                        <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                    />
                                    <label className="title-name">Nombre</label>
                                        </div>
                                        <div className="area-description-method">
                                        <textarea
                                        className="input-description"
                                        name="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <label className="title-description">Descripción</label>
                                        </div> 
                                        <div className="state-method">
                                            <label className="title-state-method">Estado</label>
                                            <select
                                            id="estado"
                                            name="estado"
                                            value={formData.estado.toString()}
                                            onChange={handleInputChange}
                                        >
                                            <option value="true">Activo</option>
                                            <option value="false">Inactivo</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputs-num-cci">
                                    <div className="content-num-cci">
                                        <div className="input-number-method">
                                        <input
                                        type="text"
                                        name="numero"
                                        value={formData.numero}
                                        onChange={handleInputChange}
                                    />
                                    <label className="title-name">Numero</label>
                                        </div>
                                        <div className="input-cci-method">
                                        <input
                                        type="text"
                                        name="cci"
                                        value={formData.cci}
                                        onChange={handleInputChange}
                                    />
                                    <label className="title-name">CCI</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                {mtdmode === 'create' ?
                                    (<button type="button" className="button-save" onClick={handleCreate}>Crear</button>)
                                    :
                                    (<button type="button" className="button-save" onClick={handleSave} >Editar</button>)
                                }
                                <button type="button" onClick={closeModal} className="button-cancel">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
        
    )
}
export default ModalPyMethods;