import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <br />
          <br />
          <br />
        </div>
        <footer className="container">
          <p className="float-end">
            <a href="#">Voltar ao topo</a>
          </p>
          <p>&copy;2021-2022 Recode, Inc. Viagens/Pectros</p>
        </footer>
      </div>
    );
  }
}
export default Footer;
