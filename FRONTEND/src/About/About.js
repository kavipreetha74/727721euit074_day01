import React from 'react'
import Navbar from '../Nav/Navbar'
import "./About.css"
import { FcLike} from "react-icons/fc";
import { FcSms} from "react-icons/fc";
import { FcAbout} from "react-icons/fc";
import h1 from "../assets/h1.jpg"
import Footer from '../Footer/Footer';


export default function About() {
  return (
    <>
      <Navbar/>
      <div className='head11'>
      <h2>
        ABOUT US
      </h2>
      <p>Online Medical Shop</p>
      </div>
      <div className='head12'>
        <p className='p2'>
        WELCOME TO OUR STORE
        </p>
        <p className='p1'>
            Bringing loving care to health care!!
        </p>
      </div>
      <p className='p3'>
      Online pharmacies can be a legitimate and convenient way to obtain medications, but
      it's crucial to ensure their legitimacy and compliance with local laws and regulations.
      Always consult a licensed healthcare professional and use reputable and authorized online pharmacies
      to ensure your safety and well-being.
      </p>
      <img src="https://img.freepik.com/free-vector/vector-banner-online-pharmacy-service_107791-7615.jpg" style={{width:'1800px'}}/>
      <div className='head13'>
        <img src="https://plus.unsplash.com/premium_photo-1661776604037-12e9654d5ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBoYXJtYWN5fGVufDB8fDB8fHww&w=1000&q=80"/>
        <p className='p4'>
            <span className='ss1'>A Faster and Better way to Shop</span> 
        <p></p>
        <span className='s1'>
            Our team of experts are here to help guide you 
        through making decisions. You can order online and don’t worry about 
        delivery. 
        The orders always arrive on time.</span>
        <h2>
        <FcLike className='ic'/> 
        <FcSms className='ic'/> 
        <FcAbout className='ic'/>

        </h2>

        </p>
      </div>
      <p></p>
     <img src={h1} style={{width:'1800px'}}/>
     <p className='word'>
     Online medical shop is a trusted online pharmacy dedicated to providing high-quality medications and healthcare products.
      Our mission is to make healthcare accessible and convenient for everyone.
     </p>

     <Footer/>
    </>
  )
}
