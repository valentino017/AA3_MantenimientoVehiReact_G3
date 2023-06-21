import React, { useEffect, useState } from 'react'
import VehiculoService from '../../services/VehiculoService';

import { Link } from "react-router-dom";
export const ListVehiculoComponet = () => {

    const [vehiculo, setVehiculo] = useState([]);

    useEffect(() => {
        listarVehiculos()
    }, [])

    const listarVehiculos = () => {
        VehiculoService.getAllVehiculos().then((response) => {
            setVehiculo(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const deleVehiculo = (id_vehiculo) => {
        VehiculoService.deleteVehiculo(id_vehiculo).then((response) => {
            listarVehiculos();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className='container mt-5'>
            <br /><br /><br />
            <h2 className='text-center'>Lista de Vehiculos</h2>
            <Link to='/add-vehiculo' className='btn btn-primary mb-2'>Agregar Vehiculo</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>modelo</th>
                        <th>estado</th>
                        <th>nroMatricula</th>
                        <th>id_cliente</th>
                        <th>color</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        vehiculo.map((vehiculo) => {
                            return (
                                <tr key={vehiculo.id_vehiculo}>
                                    <td>{vehiculo.id_vehiculo}</td>
                                    <td>{vehiculo.modelo}</td>
                                    <td>{vehiculo.estado}</td>
                                    <td>{vehiculo.nroMatricula}</td>
                                    <td>{vehiculo.id_cliente}</td>
                                    <td>{vehiculo.color}</td>

                                    <td>
                                        <Link to={`/edit-vehiculo/${vehiculo.id_vehiculo}`} className='btn btn-info'>Actualizar</Link>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleVehiculo(vehiculo.id_vehiculo)}>Eliminar</button>
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


export default ListVehiculoComponet;