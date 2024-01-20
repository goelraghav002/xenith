import React from 'react';
import './EventPages.css';
import poster from '../assets/coupon-fr.png'
import { codebreak } from '.';

function EventPage() {
  return (
    <div className='EventPage'>
      <h1 className='vim'>Cluedo Quest</h1>
      <div className="cluedo_quest">
        <img className='poster' src={poster} alt="Event Banner" />
        <div className="main_content">
          <div className='mycontent'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, perferendis ipsum. Voluptatibus praesentium eligendi error rerum, voluptatum libero tempore unde dolorem fugiat aut numquam, ullam ipsum modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsam minima, delectus at eveniet itaque nemo ipsum harum modi culpa doloremque corrupti asperiores natus esse reiciendis fuga impedit. Maxime dolorum ut fuga pariatur, in ullam officia qui! Quo voluptatibus aliquam quae aperiam iusto, ad inventore doloribus earum est modi qui dolorem officia sint suscipit repellat vel optio laborum, tempora facere a debitis tempore deleniti id? Eligendi voluptates a magnam error iste rem eos hic facere corporis pariatur alias, quae sapiente aspernatur veritatis impedit explicabo eaque porro, reprehenderit cumque unde et dolorem dolor fugiat vel. Porro architecto ducimus at amet in.
            </p>
            
          </div>
          <div className='Event_img'>
            <img className='qr' src={codebreak} alt="QR Code" />
          </div>
        </div>
        <a href="https://bit.ly/48GnMIn?r=qr" target='_blank'><button className='glow-on-hover'>Register</button></a>

      </div>
    </div>
  );
}

export default EventPage;
