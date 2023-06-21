import React, { useEffect, useState } from 'react'
import ClienteService from '../../services/ClienteService';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import img1 from '../assets/img/features-2.png';
import { Letters } from '../../helpers/Letters';
import { Numbers } from '../../helpers/Numbers';
import { validateForm } from '../../helpers/validateCliente';

export const AddClienteComponet = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        direccion: ''
    });

    const saveOrUpdateCliente = (e) => {
        e.preventDefault();
        const cliente = { nombre, apellido, telefono, correo, direccion };

        if (id) {
            ClienteService.updateCliente(id, cliente).then((response) => {
                console.log(response.data);
                navigate('/clientes');
            }).catch(error => {
                console.log(error);
            })
        } else {
            ClienteService.createCliente(cliente).then((response) => {
                console.log(response.data);
                navigate('/clientes');
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {
        ClienteService.getClienteById(id).then((response) => {
            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            setTelefono(response.data.telefono);
            setCorreo(response.data.correo);
            setDireccion(response.data.direccion);
        }).catch(error => {
            console.log(error);
        })
    }, []);



    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar cliente</h2>;
        } else {
            return <h2 className='text-center'>Agregar cliente</h2>;
        }
    }
    return (
        <div>
            <div className="container" data-aos="fade-up">
                <br /><br /><br />
                <h2 className="text-center">{title()}</h2>
                <div className="row justify-content-center">

                    <div className="col-lg-6 ">
                        <form>
                            <div className="row gy-4 justify-content-center">
                                <div className={`col-md-6 ${errors.nombre ? 'has-error' : nombre && 'is-valid'}`}>
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className={`form-control form-control-sm ${errors.nombre ? 'is-invalid' : nombre && 'is-valid'}`}
                                        maxLength="25"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        onKeyPress={Letters}
                                        required
                                    />
                                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                </div>
                                <div className={`col-md-6 ${errors.apellido ? 'has-error' : apellido && 'is-valid'}`}>
                                    <label className="form-label">Apellido</label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        className={`form-control ${errors.apellido ? 'is-invalid' : apellido && 'is-valid'}`}
                                        maxLength="20"
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                        onKeyPress={Letters}
                                        required
                                    />
                                    {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.telefono ? 'has-error' : telefono && 'is-valid'}`}>
                                    <label className="form-label">Telefono</label>
                                    <input
                                        type="text"
                                        name="telefono"
                                        className={`form-control ${errors.telefono ? 'is-invalid' : telefono && 'is-valid'}`}
                                        maxLength="9"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                        onKeyPress={Numbers}
                                        required
                                    />
                                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.correo ? 'has-error' : correo && 'is-valid'}`}>
                                    <label className="form-label">Correo</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        className={`form-control ${errors.correo ? 'is-invalid' : correo && 'is-valid'}`}
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        required
                                    />
                                    {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.direccion ? 'has-error' : direccion && 'is-valid'}`}>
                                    <label className="form-label">Direccion</label>
                                    <input
                                        type="text"
                                        name="direccion"
                                        maxLength="55"
                                        className={`form-control ${errors.direccion ? 'is-invalid' : direccion && 'is-valid'}`}
                                        value={direccion}
                                        onChange={(e) => setDireccion(e.target.value)}
                                        required
                                    />
                                    {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const { isValid, errors } = validateForm(nombre, apellido, telefono, correo, direccion);
                                        setErrors(errors);
                                        if (isValid) {
                                            saveOrUpdateCliente(e);
                                        }
                                    }}
                                > Guardar </button>
                                &nbsp; &nbsp;
                                <Link to="/clientes" className="btn btn-danger">
                                    Cancelar
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddClienteComponet;