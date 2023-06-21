import React, { useEffect, useState } from 'react'
import VehiculoService from '../../services/VehiculoService';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import img1 from '../assets/img/features-2.png';
import { Letters } from '../../helpers/Letters';
import { Numbers } from '../../helpers/Numbers';
import { validateForm } from '../../helpers/validateVehiculo';

export const AddVehiculoComponet = () => {
    const [modelo, setModelo] = useState('');
    const [estado, setEstado] = useState('');
    const [nroMatricula, setNroMatricula] = useState('');
    const [id_cliente, setIdCliente] = useState('');
    const [color, setColor] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        modelo: '',
        estado: '',
        nroMatricula: '',
        id_cliente: '',
        color: ''
    });

    const saveOrUpdateVehiculo = (e) => {
        e.preventDefault();
        const vehiculo = { modelo, estado, nroMatricula, id_cliente, color };

        if (id) {
            VehiculoService.updateVehiculo(id, vehiculo).then((response) => {
                console.log(response.data);
                navigate('/vehiculos');
            }).catch(error => {
                console.log(error);
            })
        } else {
            VehiculoService.createVehiculo(vehiculo).then((response) => {
                console.log(response.data);
                navigate('/vehiculos');
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {
        VehiculoService.getVehiculoById(id).then((response) => {
            setModelo(response.data.modelo);
            setEstado(response.data.estado);
            setNroMatricula(response.data.nroMatricula);
            setIdCliente(response.data.id_cliente);
            setColor(response.data.color);
        }).catch(error => {
            console.log(error);
        })
    }, []);



    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar vehiculo</h2>;
        } else {
            return <h2 className='text-center'>Agregar vehiculo</h2>;
        }
    }
    return (
        <div>
            <div className="container mt-5" data-aos="fade-up">
                <br /><br /><br />
                <h2 className="text-center">{title()}</h2>
                <div className="row gy-4">

                    <div className="col-lg-6">
                        <form>
                            <div className="row gy-4">
                                <div className={`col-md-6 ${errors.modelo ? 'has-error' : modelo && 'is-valid'}`}>
                                    <label className="form-label">Modelo</label>
                                    <input
                                        type="text"
                                        name="modelo"
                                        className={`form-control ${errors.modelo ? 'is-invalid' : modelo && 'is-valid'}`}
                                        maxLength="15"
                                        value={modelo}
                                        onChange={(e) => setModelo(e.target.value)}
                                        onKeyPress={Letters}
                                        required
                                    />
                                    {errors.modelo && <div className="invalid-feedback">{errors.modelo}</div>}
                                </div>
                                <div className={`col-md-6 ${errors.estado ? 'has-error' : estado && 'is-valid'}`}>
                                    <label className="form-label">Estado</label>
                                    <input
                                        type="text"
                                        name="estado"
                                        className={`form-control ${errors.estado ? 'is-invalid' : estado && 'is-valid'}`}
                                        maxLength="15"
                                        value={estado}
                                        onChange={(e) => setEstado(e.target.value)}
                                        onKeyPress={Letters}
                                        required
                                    />
                                    {errors.estado && <div className="invalid-feedback">{errors.estado}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.nroMatricula ? 'has-error' : nroMatricula && 'is-valid'}`}>
                                    <label className="form-label">Nro Matricula</label>
                                    <input
                                        type="text"
                                        name="nroMatricula"
                                        className={`form-control ${errors.nroMatricula ? 'is-invalid' : nroMatricula && 'is-valid'}`}
                                        maxLength="6"
                                        value={nroMatricula}
                                        onChange={(e) => setNroMatricula(e.target.value)}
                                        required
                                    />
                                    {errors.nroMatricula && <div className="invalid-feedback">{errors.nroMatricula}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.id_cliente ? 'has-error' : id_cliente && 'is-valid'}`}>
                                    <label className="form-label">Id Cliente</label>
                                    <input
                                        type="text"
                                        name="id_cliente"
                                        className={`form-control ${errors.id_cliente ? 'is-invalid' : id_cliente && 'is-valid'}`}
                                        minLength="1"
                                        value={id_cliente}
                                        onKeyPress={Numbers}
                                        onChange={(e) => setIdCliente(e.target.value)}
                                        required
                                    />
                                    {errors.id_cliente && <div className="invalid-feedback">{errors.id_cliente}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.color ? 'has-error' : color && 'is-valid'}`}>
                                    <label className="form-label">Color</label>
                                    <input
                                        type="text"
                                        name="color"
                                        maxLength="15"
                                        className={`form-control ${errors.color ? 'is-invalid' : color && 'is-valid'}`}
                                        value={color}
                                        onKeyPress={Letters}
                                        onChange={(e) => setColor(e.target.value)}
                                        required
                                    />
                                    {errors.color && <div className="invalid-feedback">{errors.color}</div>}
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const { isValid, errors } = validateForm(modelo, estado, nroMatricula, id_cliente, color);
                                        setErrors(errors);
                                        if (isValid) {
                                            saveOrUpdateVehiculo(e);
                                        }
                                    }}
                                > Guardar </button>
                                &nbsp; &nbsp;
                                <Link to="/vehiculos" className="btn btn-danger">
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

export default AddVehiculoComponet;