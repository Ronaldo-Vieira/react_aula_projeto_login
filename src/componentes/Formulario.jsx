import React from "react";
import Img from "../image/imagem.svg"
import "./Formulario.css"

export default _ => (
    <div className="flex arround">
        <div>
            <img src={Img} alt="" />
        </div>

        <div id="caixa">

            <h1>Member Login</h1>
            <form action="#">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button>Login</button>
            </form>

        </div>
    </div>
);