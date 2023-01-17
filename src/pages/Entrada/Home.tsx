import React from "react";
import { Login } from "../Login/Login";
import "./home.css";

export const Home = () => {
  return (
    <div className="main-login">
      <div className="left-login">
        <h1 className="typing-animation">
          Esse é um desafio <br /> feito para a empresa Sharenergy.
        </h1>
				<img src="Imageilustre.svg" className="left-login-image " alt="imagem ilustrativa" />
	
      </div>
      <div className="right-login">
        <div className="card-login">
          <Login />
        </div>
      </div>
    </div>
  );
};
