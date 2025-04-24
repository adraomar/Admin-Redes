import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
        <div className="container mt-5">
            <h2>Iniciar Sesion</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <input type="text" placeholder="Usuario" className="form-control" value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Contraseña" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Conectarse</button>
            </form>
        </div>
    )
}

export default Login