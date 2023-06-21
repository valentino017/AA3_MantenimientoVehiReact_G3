import React, { useEffect, useState } from 'react'
import ReservaService from '../../services/ReservaService';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import img1 from '../assets/img/features-2.png';
import { Letters } from '../../helpers/Letters';
import { Numbers } from '../../helpers/Numbers';
import { validateForm } from '../../helpers/validateReserva';
export const AddReservaComponet = () => {

    const [id_cliente, setId_cliente] = useState('');
    const [id_sede, setId_sede] = useState('');
    const [id_vehiculo, setId_vehiculo] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [turno, setTurno] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        id_cliente: '',
        id_sede: '',
        id_vehiculo: '',
        fechaIngreso: '',
        turno: ''
    });

    const saveOrUpdateReserva = (e) => {
        e.preventDefault();
        const reserva = { id_cliente, id_sede, id_vehiculo, fechaIngreso, turno };

        if (id) {
            ReservaService.updateReserva(id, reserva).then((response) => {
                console.log(response.data);
                navigate('/reservas');
            }).catch(error => {
                console.log(error);
            })
        } else {
            ReservaService.createReserva(reserva).then((response) => {
                console.log(response.data);
                navigate('/reservas');
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {
        ReservaService.getReservaById(id).then((response) => {

            setId_cliente(response.data.id_cliente);
            setId_sede(response.data.id_sede);
            setId_vehiculo(response.data.id_vehiculo);
            setFechaIngreso(response.data.fechaIngreso);
            setTurno(response.data.turno);
        }).catch(error => {
            console.log(error);
        })
    }, []);



    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar Reserva</h2>;
        } else {
            return <h2 className='text-center'>Agregar Reserva</h2>;
        }
    }
    return (

        <div>
            <div className='container' data-aos="fade-up">
            <br /><br /><br />
                <h2 className='text-center'>{ title() }</h2>
                <div class="row justify-content-center">

                    <div class="col-lg-6">
                        <form>
                            <div class="row gy-4 justify-content-center" >


                                <div className={`col-md-6 ${errors.id_cliente && 'has-error'}`}>
                                    <label className='form-label'>Id Cliente</label>
                                    <input
                                        type="text"
                                        placeholder='Ingrese su id_cliente'
                                        name='id_cliente'
                                        className={`form-control  ${errors.id_cliente ? 'is-invalid' : id_cliente && 'is-valid'}`}
                                        minLength="1"
                                        value={id_cliente}
                                        onChange={(e) => setId_cliente(e.target.value)}
                                        onKeyPress={Numbers} required />
                                    {errors.id_cliente && <div className="invalid-feedback">{errors.id_cliente}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.id_sede && 'has-error'}`}>
                                    <label className='form-label'>id_sede</label>
                                    <input
                                        type="text"
                                        placeholder='Ingrese su id_sede'
                                        name='id_sede'
                                        className={`form-control  ${errors.id_sede ? 'is-invalid' : id_sede && 'is-valid'}`}
                                        minLength="1"
                                        value={id_sede}
                                        onChange={(e) => setId_sede(e.target.value)}
                                        onKeyPress={Numbers} required />
                                    {errors.id_sede && <div className="invalid-feedback">{errors.id_sede}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.id_vehiculo && 'has-error'}`}>
                                    <label className='form-label'>id_vehiculo</label>
                                    <input
                                        type="text"
                                        placeholder='Ingrese su id_vehiculo'
                                        name='id_vehiculo'
                                        minLength="1"
                                        className={`form-control  ${errors.id_vehiculo ? 'is-invalid' : id_vehiculo && 'is-valid'}`}
                                        value={id_vehiculo}
                                        onChange={(e) => setId_vehiculo(e.target.value)} required />
                                    {errors.id_vehiculo && <div className="invalid-feedback">{errors.id_vehiculo}</div>}
                                </div>

                                <div className={`col-md-12 ${errors.fechaIngreso && 'has-error'}`}>
                                    <label className='form-label'>fechaIngreso</label>
                                    <input
                                        type="text"
                                        placeholder='Ingrese su fechaIngreso'
                                        name='fechaIngreso'
                                        className={`form-control  ${errors.fechaIngreso ? 'is-invalid' : fechaIngreso && 'is-valid'}`}
                                        maxlength="10"
                                        value={fechaIngreso}
                                        onChange={(e) => setFechaIngreso(e.target.value)} required />
                                    {errors.fechaIngreso && <div className="invalid-feedback">{errors.fechaIngreso}</div>}
                                </div>
                                <div className={`col-md-12 ${errors.turno && 'has-error'}`}>
                                    <label className='form-label'>turno</label>
                                    <input
                                        type="text"
                                        placeholder='Ingrese su fechaIngreso'
                                        name='turno'
                                        className={`form-control  ${errors.turno ? 'is-invalid' : turno && 'is-valid'}`}
                                        maxlength="10"
                                        value={turno}
                                        onChange={(e) => setTurno(e.target.value)} required />
                                    {errors.turno && <div className="invalid-feedback">{errors.turno}</div>}
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const { isValid, errors } = validateForm(id_cliente, id_sede, id_vehiculo, fechaIngreso, turno);
                                        setErrors(errors);
                                        if (isValid) {
                                            saveOrUpdateReserva(e);
                                        }
                                    }}
                                > Guardar </button>
                                &nbsp; &nbsp;
                                <Link to='/reservas' className='btn btn-danger'>Cancelar</Link>

                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddReservaComponet;