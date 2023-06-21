import React, { useEffect, useState } from 'react'
import ReservaService from '../../services/ReservaService';
import { Link } from "react-router-dom";
export const ListReservasComponet = () => {

    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        listarReservas()
    }, [])

    const listarReservas = () => {
        ReservaService.getAllReservas().then((response) => {
            setReservas(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const deleReserva = (reservaId) => {
        ReservaService.deleteReserva(reservaId).then((response) => {
            listarReservas();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista de Reservas</h2>
            <Link to='/add-reserva' className='btn btn-primary mb-2'>Agregar Reserva</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id_reserva</th>
                        <th>Id_cliente</th>
                        <th>Id_sede</th>
                        <th>Id_vehiculo</th>
                        <th>fechaIngreso</th>
                        <th>Turno</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        reservas.map((reserva) => {
                            return (
                                <tr key={reserva.id_reserva}>
                                    <td>{reserva.id_reserva}</td>
                                    <td>{reserva.id_cliente}</td>
                                    <td>{reserva.id_sede}</td>
                                    <td>{reserva.id_vehiculo}</td>
                                    <td>{reserva.fechaIngreso}</td>
                                    <td>{reserva.turno}</td>
                                    <td>
                                        <Link to={`/edit-reserva/${reserva.id_reserva}`} className='btn btn-info'>Actualizar</Link>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleReserva(reserva.id_reserva)}>Eliminar</button>
                                    </td>
                                </tr>
                            )

                        }
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}


export default ListReservasComponet;