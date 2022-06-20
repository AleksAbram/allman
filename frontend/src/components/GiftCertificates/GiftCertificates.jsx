import React from 'react';
import "./GiftCertificates.css"; 

function GiftCertificates(props) {
    return (
        <div className="container">
      <div className="boxpod"> <img src="img/certificates.png"></img></div>
      <h1>Подарочные сертификаты ALL MAN</h1>
      <h4>какая то красивая фраза для подарочных сертификатов</h4>
      <h3 className="text">
      В магазине ALL MAN доступны к приобретению подарочные сертификаты номиналом:
      </h3>
      <ul className='nominal'>
          <li className='medium-serif-paragraph showingmore'> 1000р</li>
          <li className='medium-serif-paragraph showingmore'> 1500р</li>
          <li className='medium-serif-paragraph showingmore'> 2500р</li>
          <li className='medium-serif-paragraph showingmore'> 3500р</li>
          <li className='medium-serif-paragraph showingmore'> 5000р</li>
          <li className='medium-serif-paragraph showingmore'> 7500р</li>
          <li className='medium-serif-paragraph showingmore'> 10000р</li>
          <li className='medium-serif-paragraph showingmore'> 15000р</li>
      </ul>
      <h3>Так же в нашем барбершопе вы можете приобрести сертифкаты на нужную для вас услугу</h3>
      <ul className='nominal'>
          <li className='medium-serif-paragraph showingmore'> Мужская стрижка</li>
          <li className='medium-serif-paragraph showingmore'> Комплекс (стрижка + моделирование бороды)</li>
          <li className='medium-serif-paragraph showingmore'> Моделирование бороды</li>
          <li className='medium-serif-paragraph showingmore'> Детская стрижка</li>
          <li className='medium-serif-paragraph showingmore'> Отец + сын (2 стрижки)</li>
      </ul>
    </div>
    );
}
export default GiftCertificates;