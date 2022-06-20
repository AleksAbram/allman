import "./Home.css"

function Home() {
  return (

  <div className="container">
    <div className="main">
      <div className="main-button" id="cc-button">Classic<br />clothes</div>
      <div className="main-button" id="shoes-button">Atelier</div>
      <div className="main-button" id="barbershop-button">Barbershop</div>
    </div>

    <div className="three-pics">
      <div className="category">
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

    <div className="barbershop">
      <div className="action">
        <div className="action-label">Barbershop</div>
        <div className="action-button" id="haircut-button">Записаться<br /> на стрижку</div>
      </div>
    </div>
    <div className="atelier op-08">
      <div className="action">
        <div className="action-label">Atelier</div>
        <div className="action-button" id="atelier-button">Записаться<br /> в ателье</div>
      </div>
    </div>
    <div className="stylist">
      <div className="action">
        <div className="action-label">Бесплатная<br /> консультация стилиста</div>
        <div className="action-button" id="haircut-button">Записаться</div>
      </div>
    </div>
  </div>
  );
}

export default Home;
