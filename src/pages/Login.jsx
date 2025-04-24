import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/teleperformance.svg'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (user === "admin" && password === "admin") {
            localStorage.setItem("auth", "true");
            navigate("/dashboard");
        } else {
            alert("Nombre de usuario y/o contraseña inválidos.");
        }
    }

    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="text-center my-5">
                            <img src={logo} alt="logo" width="100"/>
                        </div>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4 text-center">Iniciar Sesion</h1>
                                <form onSubmit={handleLogin} className="needs-validation" noValidate="" autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="username">Nombre de usuario</label>
                                        <input id="username" type="text" className="form-control" name="username" value={user} onChange={(e) => setUser(e.target.value)} required autoFocus/>
                                            <div className="invalid-feedback">
                                                Nombre de usuario inválido.
                                            </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password">Contraseña</label>
                                        </div>
                                        <input id="password" type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Conectarse
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2017-2021 &mdash; Your Company
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login