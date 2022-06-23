import "./Home.css";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Home() {
  const navigate = useNavigate();
  function suitsLink() {
    navigate("/items");
  }
  function barbershopLink () {
    navigate("/barbershop")
  }
  function atelierLink () {
    navigate("/atelier")
  }

  return (
    <div className="container">
      <div className="main">
        <AnchorLink href='#clothes'className="main-button" id="cc-button">
          Classic
          <br />
          clothes
        </AnchorLink>
        <AnchorLink href='#atelier' className="main-button" id="shoes-button">
          Atelier
        </AnchorLink>
        <AnchorLink href='#barbershop' className="main-button" id="barbershop-button">
          Barbershop
        </AnchorLink>
      </div>
      <section id='clothes'>
        <div className="three-pics">
          <div onClick={suitsLink} className="category">
            <img className="cat-pic" src="img/suits.png"></img>
            <div className="cat-label">Suits</div>
          </div>
          <div className="category">
            <img className="cat-pic" src="img/shoes.png"></img>
            <div className="cat-label">Shoes</div>
          </div>
          <div className="category">
            <img className="cat-pic" src="img/jackets.png"></img>
            <div className="cat-label">Jackets</div>
          </div>
        </div>
      </section>
      <section id='barbershop'>
        <div className="barbershop">
        <div className="action">
          <div className="action-label">Barbershop</div>
          <div onClick={barbershopLink} className="action-button" id="haircut-button">
            Записаться
            <br /> на стрижку
          </div>
        </div>
      </div>
      </section>
      <section id='atelier'>
        <div className="atelier op-08">
        <div className="action">
          <div className="action-label">Atelier</div>
          <div onClick={atelierLink} className="action-button" id="atelier-button">
            Записаться
            <br /> в ателье
          </div>
        </div>
      </div>
      </section>
      
      <div className="stylist">
        <div className="action">
          <div className="action-label">
            Бесплатная
            <br /> консультация стилиста
          </div>
          <div className="action-button" id="haircut-button">
            Записаться
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
