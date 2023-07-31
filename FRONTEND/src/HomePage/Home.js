import React from 'react'
import { useState ,useEffect} from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'


import home1 from '../assets/home1.avif'
import home4 from "../assets/home4.avif"
import home5 from "../assets/home5.avif"
import home8 from "../assets/home8.jpg"
import home6 from "../assets/home6.png"
import home9 from "../assets/home9.jpg"
import hv1 from "../assets/hv1.mp4"
import Navbar from '../Nav/Navbar'
import Footer from '../Footer/Footer'

import home10 from '../assets/addtocart.gif'




export default function Home() {
  let arr=[home4,home5,home8];

  const [index,setIndex]=useState(0);

  useEffect(() => {
    setTimeout(()=>{
      if(index<arr.length-1){
        setIndex(index+1);
      }else{
        setIndex(0);
      }
    },2000)
  }, [index])

  return (
    <div className='wrap'>
      <Navbar/>
      <h2 className='head2'>
      "Your Health, Our Priority: Trusted Online Pharmacy"
      </h2>
      <div className='body'>
          <div>
          <Link to='/shop'> <img src={arr[index]} id="slider"/> </Link>
          </div>

      </div>
      
      <div className='hom1'>
      <div className='babyshop'>
     
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20220509/pngtree-online-medicine-chat-with-doctor-on-smartphone-screen-advice-medication-thermometer-image_1340822.jpg"/>
      <div>

      <h2 id='titlebaby'>
        Online Medicine for Our loving Customer
      </h2>

      <p id='babyp'>
      Online medical shop we are committed to providing you with a seamless and reliable
      online shopping experience for all your medical needs. Our extensive range of
      high-quality medical products and healthcare essentials is carefully curated
      to meet the diverse requirements of our customers.

      Our mission is to ensure accessibility and convenience, offering you a wide selection
      of trusted brands and products at competitive prices. Your well-being is our top priority,
      and we strive to maintain the highest standards of quality and service.
      </p>

      <button id='btnbaby' type='submit'>Shop Now</button>
      </div>
      </div>
      <h2 className='head1'>
      Online Medical Store with a plethora of variety and brands
      </h2>
      
      </div>
      <video width="1800" height="800" autoPlay loop style={{marginLeft:"0%"}}>
      <source src={hv1} type="video/mp4"/>
      </video>
      <p></p>
      <p></p>
      
      <div className='ourbrands'>
        <div>
          <center><h2>Our Brands</h2></center> 
        </div>
        <img src='https://images-platform.99static.com//xruQgo1F_i1XlVMBSn32NPW8-XU=/151x0:1119x968/fit-in/500x500/99designs-contests-attachments/69/69011/attachment_69011248'></img>
        <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30162403/12_big.png'></img>
        <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_700,h_400/https://assets.designhill.com/design-blog/wp-content/uploads/2015/04/2-min-1.jpg'></img>
        <img src='https://images-platform.99static.com/hVpiEPvjvZB6ZV_VBuY53OxX4As=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/102/102996/attachment_102996364'></img>
        <img src='https://images-platform.99static.com//oL88scr6LzES6cqfbLaFWLt5MvQ=/469x201:1563x1295/fit-in/500x500/99designs-contests-attachments/102/102508/attachment_102508328'></img>
      </div>
      
      
      <Footer/>
    </div>
    
  )
}
