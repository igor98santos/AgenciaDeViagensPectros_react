import React, { Component } from "react";
import "./Cards.css";
import imageHome4 from "../../pages/imagens/cards de preço da home/israel/Israel 3.jpg";
import imageHome5 from "../../pages/imagens/cards de preço da home/italia/canal-g31aaf8247_640.jpg";
import imageHome6 from "../../pages/imagens/cards de preço da home/noruega/aurora-borealis-g3b9626256_640.jpg";
/*import imageHome7 from "../../pages/imagens/cards de preço da home/Primerios cards/airport-g05b6703fa_1280.jpg";*/
import imageHome8 from "../../pages/imagens/cards de preço da home/Englaterra/palace-gf12d11303_640.jpg";
class Cards extends Component {
  render() {
    return (
      <Cards>     <div class="container-fluid">
        <div class="row">
          <div class="col-3 ">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src={imageHome4} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Israel</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="Destinos.html" class="btn btn-primary">
                  Veja mais
                </a>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src={imageHome8} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Inglaterra</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="Destinos.html" class="btn btn-primary">
                  Veja Mais
                </a>
              </div>
            </div>
          </div>

          <div class="col-3 ">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src={imageHome5} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Italia</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="Destinos.html" class="btn btn-primary">
                  Veja Mais
                </a>
              </div>
            </div>
          </div>

          <div class="col-3 ">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src={imageHome6} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Noruega</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="Destinos.html" class="btn btn-primary">
                  Veja Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Cards>
 
    );
  }
}
export default Cards;
