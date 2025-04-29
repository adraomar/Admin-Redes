import React from 'react'

const Dashboard = () => {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
                <h4 className="text-center">Mi Panel</h4>
                <ul className="nav flex-column mt-4">
                    <li className="nav-item mb-2">
                        <a className="nav-link text-white" href="#">Sitios</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link text-white" href="#">Equipos</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a className="nav-link text-white" href="#">Usuarios</a>
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
                                    <h5 className="card-title">Sitios creados</h5>
                                    <p className="card-text">3 sitios creados</p>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Equipos registrados</h5>
                                    <p className="card-text">10 equipos registrados</p>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="col-md-4 mb-3">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Usuarios creados</h5>
                                    <p className="card-text">2 usuarios creados</p>
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