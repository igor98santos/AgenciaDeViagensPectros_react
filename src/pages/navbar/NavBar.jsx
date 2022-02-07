import React from "react";
import { Component } from "react/cjs/react.development";
import './NavBar.css';
import icone from '../imagens/Icones/icons8-document-48.png'
class NavBar extends Component{
    render(){
        return(
          
            <nav className="navbar fixed-top navbar-expand-lg  p-md-3">
            <div className="container">
              <a className="navbar-brand" href="Home.html">Agência/Pectros</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img src={icone} alt="Icone"/>Icone</span>
              </button>
        
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mx-auto"></div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="Home.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="Promocoes.html">Promoções</a>
                  </li>
                  <li clclassNameass="nav-item">
                    <a className="nav-link text-white" href="Destinos.html">Destino</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="Contato.html">Contatos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
export default NavBar;