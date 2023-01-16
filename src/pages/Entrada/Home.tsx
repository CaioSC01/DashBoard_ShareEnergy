import React from "react";

export const Home = () => {
  return (
    <div className="main-login">
      <div className="left-login">
        <h1>Desafio Sharenergy</h1>
      </div>
      <div className="right-login">
        <div className="card-login">
          <div className="textfield">
            <label htmlFor="usuario">Usuario</label>
            <input type="text" name="usuario" placeholder="Usuario" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
					<button className="btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};
