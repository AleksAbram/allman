import React from "react";
import Map from "../YM/YandexMap";
import "./AboutMe.css"; 

function AboutMe(props) {
  return (
    <div className="container">
      <div className="box"> <img src="img/aboutme.png"></img></div>
      <h2 className="brandAllMan">ALL MAN</h2>
      <div className="aboutUS">
      <><div className="ourJob">Наша работа - делать моду доступной каждому!</div></>
        All Man – это настоящая мужская территория, где ты будешь не только
        одет с иголочки, но и в целом выглядеть идеально. О чем это мы?
        Наш барбершоп – это тот случай, когда мужская стрижка обретает характер.
        Если ты еще не нашел своего мастера, то знай – мы забрали себе лучшего!
        Классика или модельный вариант ? Решать только тебе! Мы гарантируем
        идеальную мужскую стрижку при любом раскладе!
      <Map />
      </div>
    </div>
  );
}

export default AboutMe;
