import React from "react";
import { Component } from "react/cjs/react.development";
import './NavBar.css';
import icone from '../../assets/imagens/Icones/icons8-document-48.png'
import { Link } from "react-router-dom";
class NavBar extends Component{
    render(){
        return(
          
            <nav className="navbar fixed-top navbar-expand-lg  p-md-3">
            <div className="container">
              <Link className="navbar-brand" to="/" >Agência/Pectros</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img src={icone} alt="Icone"/>Icone</span>
              </button>
        
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="mx-auto"></div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                      <a className="nav-link text-white" href="Home">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Promocoes">
                      <a className="nav-link text-white" href="promocoes" >Promoções</a>
                      </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="/Destinos">
                      <a className="nav-link text-white" href="Destinos">Destino</a>
                      </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="/Contato">
                      <a className="nav-link text-white" href="Contatos">Contatos</a>
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
export default NavBar;