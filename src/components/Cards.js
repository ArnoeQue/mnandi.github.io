import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from './images/img-marulaoil.jpg';
import img2 from './images/img-baobab.jpg';
import img3 from './images/img-madora.jpg';
import img4 from './images/img-driedv.jpg';
import img5 from './images/peanutb.jpg';




function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Amazing Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src={img1} alt=""
              text='Marula Products'
              label='Marula'
              path='/products'
            />
            <CardItem
              img src={img2} alt=""
              text='Boabab Products'
              label='Baobab'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src={img3} alt=""
              text='Mupane Products'
              label='Mupane'
              path='/products'
            />
            <CardItem
              img src={img4} alt=""
              text='Dried Products'
              label='Fruits and Vegetables'
              path='/products'
            />
            <CardItem
              img src={img5} alt=""
              text='Peanut Butter'
              label='oil'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;