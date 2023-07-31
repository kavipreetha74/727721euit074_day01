import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
         <footer>
        <div class="container">
            <div class="footer-content">
                {/* <div class="footer-logo">
                    
                     <img src="logo.png" alt="Toy Store Logo"/>  */}
                     <div class="col-sm-12 col-md-6">
            {/* <h2>About</h2> */}
            <p class="text-justify">Our ONLINE MEDICAL SHOP strictly adheres to all applicable laws and regulations, and we require valid prescriptions for prescription medications to promote responsible healthcare practices.

We value your trust, and our customer support team is always ready to assist you with any inquiries or concerns you may have. Feel free to reach out to us through our contact information provided below.

Thank you for choosing our ONLINE MEDICAL SHOP We are honored to be a part of your journey towards better health. </p>
          </div>
                {/* </div> */}
                <div class="footer-links">
                    
                    {/* <a href="#">Home</a> 
                    <a href="#">Products</a> 
                 <a href="#">Contact</a>  */}
                 <h2>Follow Us For More</h2>
                 <input type={'Email'} placeholder='Email' style={{width:'200px',marginTop:'20px',color:'black'}}></input>
                </div>
            </div>
            <div class="footer-info">
                {/* <!-- Add any additional footer information here --> */}
                <p>&copy; 2023 Online Medical Shop. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
