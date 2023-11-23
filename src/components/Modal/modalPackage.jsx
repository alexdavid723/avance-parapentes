import React, { useState, useEffect } from "react";
import axios from "axios";
import './modalPackage.css';

const ModalPackage = ({ state, setState, mode, paqueteActual, updatePackagesList }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        nombre_paquete: "",
        descripcion: "",
        imagen: null,
        duracion: "",
        precio: "",
        estado: false,
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("paqueteActual:", paqueteActual);
        // Si hay un paquete actual, cargar sus datos en el formulario
        if (mode === 'edit' && paqueteActual && paqueteActual.id) {
            setFormData((prevData) => ({
                ...prevData,
                nombre_paquete: paqueteActual.nombre_paquete || "",
                descripcion: paqueteActual.descripcion || "",
                duracion: paqueteActual.duracion?.toString() || "",
                precio: paqueteActual.precio?.toString() || "",
                estado: paqueteActual.estado || false,
            }));

            // Mostrar la imagen actual
            setSelectedImage(paqueteActual.urlImagen);
        }else {
            // Si el modo no es 'edit', limpiar los datos del formulario
            setFormData({
                nombre_paquete: "",
                descripcion: "",
                imagen: null,
                duracion: "",
                precio: "",
                estado: false,
            });
            setSelectedImage(null);
        }
    }, [mode, paqueteActual]);
    const closeModal = () => {
        setState(false);
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
            name === "duracion" ? parseInt(value, 10) : name === "precio" ? parseFloat(value) : name === "estado" ? value === "true" : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: updatedValue,
        }));
    };

    const handleSave = async () => {
        try {
            // Verificar si paqueteActual.id está definido
            if (!paqueteActual || !paqueteActual.id) {
                console.error("El paquete actual o su ID no están definidos.");
                setError("No se puede realizar la operación. Por favor, inténtelo de nuevo.");
                return;
            }

            const formDataToSend = new FormData();
            formDataToSend.append("nombre_paquete", formData.nombre_paquete);
            formDataToSend.append("descripcion", formData.descripcion);
            formDataToSend.append("duracion", formData.duracion);
            formDataToSend.append("precio", formData.precio);
            formDataToSend.append("estado", formData.estado);

            if (formData.imagen) {
                formDataToSend.append("imagen", formData.imagen);
            }

            // Usar paqueteActual.id directamente aquí
            const response = await axios.put(`http://localhost:5000/paquetes/${paqueteActual.id}`, formDataToSend);

            if (response && response.data) {
                console.log("Respuesta del servidor:", response.data);

                // Aquí puedes manejar la respuesta del servidor como sea necesario

                // Cerrar el modal después de guardar
                
                
                closeModal();
                updatePackagesList(response.data);
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
            formDataToSend.append("nombre_paquete", formData.nombre_paquete);
            formDataToSend.append("descripcion", formData.descripcion);
            formDataToSend.append("duracion", formData.duracion);
            formDataToSend.append("precio", formData.precio);
            formDataToSend.append("estado", formData.estado);

            if (formData.imagen) {
                formDataToSend.append("imagen", formData.imagen);
            }

            const response = await axios.post("http://localhost:5000/paquetes", formDataToSend);

            if (response && response.data) {
                console.log("Respuesta del servidor:", response.data);

                // Aquí puedes manejar la respuesta del servidor como sea necesario

                // Cerrar el modal después de guardar
                
               
                closeModal();
                setFormData({
                    nombre_paquete: "",
                    descripcion: "",
                    imagen: null,
                    duracion: "",
                    precio: "",
                    estado: false,
                });
                setSelectedImage(null);
                updatePackagesList(response.data);
            } else {
                console.error("La respuesta del servidor no contiene datos.");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            setError("Error al realizar la solicitud. Por favor, inténtelo de nuevo.");
        }
    };
    
    return (
        state && (
            <>
                <div className="container-modal">
                    <form className="content-modal">
                        <div className="container-image">
                            <div className="content-image">
                                <div className="view-image">
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt="Vista previa"
                                            style={{ width: "303px", height: "310px", borderRadius: "10px" }}
                                        />
                                    ) : (
                                        <span>No image selected</span>
                                    )}
                                </div>
                                <div className="select-image">

                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content-infoInpts">
                            <div className="inputs-forms">
                                <div className="header-content">
                                    <div className="header-transform">
                                        <span className="title-content">{mode === 'create' ? 'Nuevo Paquete' : 'update'}</span>
                                        <button className="button-close-package" type='button' onClick={closeModal}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="input-name">
                                    <input
                                        type="text"
                                        name="nombre_paquete"
                                        value={formData.nombre_paquete}
                                        onChange={handleInputChange}
                                    />
                                    <label className="title-name">Nombre</label>
                                </div>
                                <div className="inputs-price-state">
                                    <div className="input-price">
                                        <input
                                            type="text"
                                            name="precio"
                                            value={formData.precio}
                                            onChange={handleInputChange}
                                        />
                                        <label className="title-price">Precio</label>
                                    </div>
                                    <div className="input-time">
                                        <input
                                            type="text"
                                            name="duracion"
                                            value={formData.duracion}
                                            onChange={handleInputChange}
                                        />
                                        <label className="title-time">Tiempo</label>
                                    </div>
                                    <div className="input-state">

                                        <label className="title-state">Estado</label>
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
                                <div className="input-description">
                                    <textarea
                                        className="input-description"
                                        name="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleInputChange}
                                    ></textarea>
                                    <label className="title-description">Descripción</label>
                                </div>
                            </div>

                            <div className="buttons">
                                {mode === 'create' ?
                                    (<button type="button" className="button-save" onClick={handleCreate}>Crear</button>)
                                    :
                                    (<button type="button" className="button-save" onClick={handleSave} >Editar</button>)
                                }
                                <button type="button" onClick={closeModal} className="button-cancel">Cancelar</button>
                            </div>
                            {error && <div className="error-message">{error}</div>}
                        </div>
                    </form>
                </div>
            </>
        )
    );
}

export default ModalPackage;