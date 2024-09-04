import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
const About = () => {
  return (
    <div className='about-container' id='aboutus'>
  
    <div className="info1">
      <img src={assets.store}alt="" />
      <div className="info1-child">
        <h1>Our Journey</h1>
        
<p>
Founded with a bold vision to revolutionize sneaker culture in Nepal, CitySole emerged from a deep passion for blending international sneaker trends with the distinct tastes and needs of the local market. Our journey began with a clear and ambitious goal: to offer Nepalese sneaker enthusiasts access to the most coveted and innovative footwear from around the world.</p> 

<p>From the very beginning, we aimed to bridge the gap between global fashion and local preferences, recognizing that while Nepal’s sneaker culture was evolving, there was a growing demand for high-quality, stylish, and performance-driven sneakers. We meticulously curated our initial collection to reflect the latest in global sneaker trends while ensuring that it resonated with the unique lifestyle and aesthetic preferences of our diverse customer base.</p>
<p>Starting with a single, carefully designed store, we created a space that was more than just a retail outlet—it was a destination where sneaker lovers could find the perfect blend of comfort, style, and cutting-edge design. Each pair of sneakers we offered was selected with an eye for both global appeal and local relevance, aiming to inspire and meet the needs of every individual who walked through our doors.</p> 

    </div>
    </div>




    <div className="info2">
      <h1>What We Provide</h1>
      <div className='info2-child'>
        <img src={assets.delivery}alt="" />
        <hr />
        <p>At CitySole, we understand that convenience and flexibility are crucial when shopping online. That’s why we offer a Cash on Delivery (COD) payment option, allowing you to enjoy a seamless and secure shopping experience from the comfort of your home</p>
      </div>
      <div className='info2-child'>
      <img src={assets.auth} alt="" />
        <hr />
        <p>At CitySole, we pride ourselves on offering only the highest quality and genuine footwear to our valued customers. Our Authentic Shoes Guarantee ensures that every pair of shoes you purchase is 100% authentic.</p>
      </div>
      <div className='info2-child'>
      <img src={assets.emi} alt="" />
        <hr />
      <p>At CitySole, we understand that managing your budget is important, especially when making significant purchases. That’s why we offer a Flexible EMI, allowing you to spread the cost of your purchase over time and enjoy.</p>
      </div>
    </div>
  </div>
  )
}

export default About