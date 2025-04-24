import React from 'react'

const Dashboard = () => {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
                <h4 className="text-center">Mi Panel</h4>
                <ul className="nav flex-column mt-4">
                    <li className="nav-item mb-2">
                        <a className="nav-link text-white" href="#">Inicio</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link text-white" href="#">Reportes</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link text-white" href="#">Configuración</a>
                    </li>
                </ul>
            </div>

            {/* Contenido principal */}
            <div className="flex-grow-1 bg-light">
                {/* Navbar */}
                <nav className="navbar navbar-expand navbar-light bg-white shadow-sm px-4">
                    <span className="navbar-brand mb-0 h5">Dashboard</span>
                </nav>

                {/* Contenido */}
                <div className="container-fluid p-4">
                    <div className="row">
                        {/* Tarjeta 1 */}
                        <div className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Usuarios</h5>
                                    <p className="card-text">125 registrados</p>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Ventas</h5>
                                    <p className="card-text">$12,300 este mes</p>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Soporte</h5>
                                    <p className="card-text">5 tickets abiertos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Otros módulos */}
                    <div className="mt-4">
                        <h4>Resumen general</h4>
                        <p>Acá podés mostrar gráficos, tablas, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard