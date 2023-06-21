import React from 'react'

export const HeaderComponent = () => {
    return (
        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        //     <a class="navbar-brand" href="#">Mantenimiento Vehiculo</a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        //         aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div class="collapse navbar-collapse" id="navbarCollapse">
        //         <ul class="navbar-nav mr-auto">
        //             <li class="nav-item">
        //                 <a class="nav-link" href="/clientes">Clientes</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="">Reservas</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="/vehiculos">Vehículos</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#">Personal</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#">Sede</a>
        //             </li>
        //         </ul>
        //         <form class="form-inline mt-2 mt-md-0">
        //             {/* <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"> */}
        //                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>

        <div>
            <header className=' fixed-top'>
                <nav className='navbar navbar-expand-md'>
                    <ul>
                        {/* <a href="/" className='navbar-brand'>Gestión Clientes</a> */}
                        <a href="/" className='navbar-brand'>VARAK</a>
                        <li><a class="nav-link scrollto" href="/clientes">Clientes</a></li>
                        <li><a class="nav-link scrollto" href="/vehiculos">Vehiculos</a></li>
                        <li><a class="nav-link scrollto" href="/reservas">Reservas</a></li>

                    </ul>



                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;