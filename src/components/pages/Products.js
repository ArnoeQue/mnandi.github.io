import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import img1 from '../images/img-marulaoil.jpg';
import img2 from '../images/img-marulaj.jpg';
import img3 from '../images/img-marula.jpg';
import img4 from '../images/img-baobabcoffee.jpg';
import img5 from '../images/img-baobab.jpg';
import img6 from '../images/img-madora.jpg';
import img7 from '../images/peanutb.jpg';
import img8 from '../images/img-honey.jpg';
import img9 from '../images/img-driedf.jpg';
import img10 from '../images/img-driedv.jpg';
import img11 from '../images/img-fresh.jpg';
import img12 from '../images/img-freezit.jpg';


export default function Products() {
  return<div><h1 className='products'>PRODUCTS</h1> 
  <div> <h2 className='productsoffered'>Products We Offer</h2>
  <div className='cards'>
      <h1>Check out these Amazing Products!</h1>
      <div className='cards__container'>
      <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src={img1} alt=""
              text='Marula oil'
              label='Marula Products'
              
            />
            <CardItem
              img src={img2} alt=""
              text='Marula Jam'
              label='Marula Products'
              
            />
            <CardItem
              img src={img3} alt=""
              text='Marula Juice'
              label='Marula Products'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src={img4} alt=""
              text='Baobab Juice'
              label='Baobab Products'
              
            />
            <CardItem
              img src={img5} alt=""
              text='Baobab Coffee '
              label='Baobab Products'
              
            />
            <CardItem
              img src={img6} alt=""
              text='Mupane Worms '
              label=' Mupane Snacks'
              
            />
            <CardItem
              img src={img7} alt=""
              text='Peanut Butter'
              label='Spread'
              
            />
            <CardItem
              img src={img8} alt=""
              text='Honey'
              label='Syrup'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src={img9} alt=""
              text='Dried Fruits'
              label='Dried Products'
              
            />
            <CardItem
              img src={img10} alt=""
              text='Dried Vegetables'
              label='Dried Products'
              
            />
            <CardItem
              img src={img11} alt=""
              text='Vegetables'
              label='Fresh Vegetables'
              
            />
            <CardItem
              img src={img12} alt=""
              text='Freezit'
              label='Drinks'
              
            />
          </ul>
        </div>
        </div>
        </div>
        </div>
  </div>
  
}