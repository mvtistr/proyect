import { useState } from "react";
import { Icons } from "@shared/icons.js";
import "@styles/home.css";



function Login() {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')

    function entrar (e){
        e.preventDefault()
        if(!email || !password){
            alert('debes llenar rtodos tus datos')
        }

        else if (email === usuario || password === clave){
        alert('has ingresado a la pagina :D')
    }
    else{
        alert('Datos incorrectos')
    }

    }


  return (
    <div className="login-container">
         <h1>Inicio de sesion</h1>
        <form action="submit" onSubmit={entrar} className="formulario">
            <label htmlFor="email">Correo</label>
            <input 
            type="text" 
            id="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label htmlFor="password">Contrasena</label>
            <input
             type="Password"
             value={password}
             id="password"
             onChange={(e)=>{setPassword(e.target.value)}}
              />

            <button className="submit">Iniciar sesion</button>
        </form>


    </div>
  );
}

export default Login;