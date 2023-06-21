import logo from './logo.svg';
import './App.css';
import ListClientesComponet from './componets/cliente/ListClientesComponet';
import ListVehiculoComponet from './componets/vehiculo/ListVehiculoComponet';
import ListReservasComponets from './componets/reserva/ListReservasComponets';
import HeaderComponent from './componets/cliente/HeaderComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClienteComponet from './componets/cliente/AddClienteComponet';
import AddVehiculoComponent from './componets/vehiculo/AddVehiculoComponent';
import AddReservaComponet from './componets/reserva/AddReservaComponet';
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListClientesComponet />}></Route>
            <Route path='/clientes' element={<ListClientesComponet />}></Route>
            <Route path='/add-cliente' element={<AddClienteComponet />}></Route>
            <Route path='/edit-cliente/:id' element={<AddClienteComponet />}></Route>
            <Route path='/vehiculos' element={<ListVehiculoComponet />}></Route>
            <Route path='/add-vehiculo' element={<AddVehiculoComponent />}></Route>
            <Route path='/edit-vehiculo/:id' element={<AddVehiculoComponent />}></Route>
            <Route path='/reservas' element={<ListReservasComponets />}></Route>
            <Route path='/add-reserva' element={<AddReservaComponet />}></Route>
            <Route path='/edit-reserva/:id' element={<AddReservaComponet />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
