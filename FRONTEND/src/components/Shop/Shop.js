import React, { useEffect, useState } from 'react'
import shop1 from '../../assets/shop1.jpeg'
import shop2 from '../../assets/shop2.jpeg'
import shop3 from '../../assets/shop3.jpeg'
import shop4 from '../../assets/shop4.jpeg'
import shop5 from '../../assets/shop5.jpeg'
import shop6 from '../../assets/shop6.jpeg'
import shop7 from '../../assets/shop7.avif'
import shop8 from '../../assets/shop8.jpeg'
import shop9 from '../../assets/shop9.jpeg'
import shop10 from '../../assets/shop10.jpeg'
import shop11 from '../../assets/shop11.jpg'
import "./Shop.css"
import { FcLike } from 'react-icons/fc';
import { BsFillShareFill } from 'react-icons/bs';
import home10 from "../../assets/home10.jpg";
import home11 from "../../assets/home11.avif";
import Footer from '../../Footer/Footer'
import NavBar from '../../Nav/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { cartProducts, favProducts} from '../../Redux/actions/action'
import axios from'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import './MarqueeImage.css'; 


export default function Shop() {
  const dispatch=useDispatch();
  var [source,setSource]=useState([]);
  useEffect(() => {
      axios.get("http://localhost:8080/api/v1/auth/products")
      .then((res)=>{
        console.log(res)
        setSource(res.data)
      })
  }, [])

   source=[
       {"pid":1,"link":"https://images.apollo247.in/pub/media/catalog/product/f/a/face_wipes.jpg","category":"Building Kit/Toy","brand":"Lego","age":"3+","des":"face wipes","price":1150,"dprice":1025,"save":10},
        {"pid":2,"link":"https://images.apollo247.in/pub/media/catalog/product/a/c/activated_charcoal-soap_.jpg","category":"soap","brand":"HotWheels","age":"6+","des":"Soap","price":1700,"dprice":1550,"save":9},
        {"pid":3,"link":"https://images.apollo247.in/pub/media/catalog/product/a/p/apt0020.jpg","category":"Electric Toys","brand":"Lego","age":"6+","des":"Thermometer","price":960,"dprice":850,"save":12},
        {"pid":4,"link":"https://images.apollo247.in/pub/media/catalog/product/a/p/app0066-05.jpg","category":"Puzzle Toys","brand":"Lego","age":"6+","des":"Pregnancy test casette","price":3050,"dprice":2900,"save":5},
        {"pid":5,"link":"https://images.apollo247.in/pub/media/catalog/product/a/p/aph0080.jpg","category":"Castle Toy","brand":"Lego/Disney","age":"6+","des":"Hand Sanitizer","price":1150,"dprice":1025,"save":10}, 
       {"pid":6,"link":"https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210109_203457__front__sterilized_cotton_balls.jpg","category":"Tower Sets","brand":"White Rabbit","age":"3+","des":"Cotton Balls","price":2870,"dprice":2750,"save":5},
        {"pid":7,"link":"https://images.apollo247.in/pub/media/catalog/product/a/p/apl0060.jpg","category":"Scooter","brand":"Toy R Us","age":"6+","des":"N95 facemask","price":1650,"dprice":1400,"save":15},
        {"pid":8,"link":"https://images.apollo247.in/pub/media/catalog/product/a/p/apv0013_1-march23_1_.jpg","category":"Toy Gun","brand":"Nerf","age":"6+","des":"Vitamin B-12","price":2600,"dprice":2470,"save":5},
        {"pid":9,"link":"https://images.apollo247.in/pub/media/catalog/product/a/p/apd0056.jpg","category":"Toy Gun","brand":"Nerf","age":"6+","des":"Protein powder","price":2850,"dprice":2700,"save":6},
        
       ] 

  return (
    <>
      <NavBar/>
    
      <img src={home10} alt="img" id="imges"/>
      <div className="marquee-container">
      <img src="https://www.spellbrand.com/wp-content/uploads/2019/05/build-medical-brand-1-2.jpg" alt="Marquee Image" style={{marginBottom:"10px"}}/>
        <ToastContainer/>
    </div>
      <div className='products'>
        {source.map((product)=>
          <div className='product' key={product.pid}>
            <a onClick={()=>{
              dispatch(favProducts(product))
              toast.success("Added to favorites")
              }} id='share'><FcLike/></a>
 
              <img src={product.link} className='image'></img>
              <p>{product.des}</p>
              <div className='prices'>
                  <p id='price'> ₹{product.price}</p>
                  <p id='dprice'> ₹{product.dprice}</p>
                  <p id='dprice'> (Save{product.save}%)</p>
                </div>
              <div className='btns'>
                <h2 className='btnshop' 
                onClick={()=>{
                  dispatch(favProducts(product))
                  alert("Added to favorite")
                }}
                >Add To Wishlist</h2> 
                <h2 className='btnshop' 
                  onClick={()=>{
                    dispatch(cartProducts(product))
                    toast.success("Added to cart")
                  }}
                >Add To cart</h2>
              </div>
          </div>
        )}
      </div>
            <img src="https://wallpaperset.com/w/full/8/d/0/141994.jpg"/>
            <img src="https://media.istockphoto.com/id/1372726913/photo/a-pharmacist-is-attending-a-senior-man.jpg?s=612x612&w=0&k=20&c=lGR-tPgZ97ICKgRMPuo_DQ5uslDr95JiIlIA2ZU29DE="/>           
      <Footer/>
    </>
  )
}
