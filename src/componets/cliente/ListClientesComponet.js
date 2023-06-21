import React, { useEffect, useState } from 'react'
import ClienteService from '../../services/ClienteService';
import { Link } from "react-router-dom";
export const ListClientesComponet = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        listarClientes()
    }, [])

    const listarClientes = () => {
        ClienteService.getAllClientes().then((response) => {
            setClientes(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const deleCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId).then((response) => {
            listarClientes();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className='container mt-5'>
            <br /><br /><br />
            <h2 className='text-center'>Lista de Clientes</h2>
            <Link to='/add-cliente' className='btn btn-primary mb-2'>Agregar Cliente</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Dirección</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        clientes.map((cliente) => {
                            return (
                                <tr key={cliente.id_cliente}>
                                    <td>{cliente.id_cliente}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellido}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                        <Link to={`/edit-cliente/${cliente.id_cliente}`} className='btn btn-info'>Actualizar</Link>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleCliente(cliente.id_cliente)}>Eliminar</button>
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


export default ListClientesComponet;