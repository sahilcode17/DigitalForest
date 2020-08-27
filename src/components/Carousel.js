import React from 'react'
import {ProductConsumer} from "../context"
export default function Carousel() {
    return (
         <ProductConsumer>
 {(value) => {
                    const {img,title}=value.detailProduct
                return(
                    
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={(title==="Mobile App") ? img[1] :img } alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={(title==="Mobile App") ? img[2] :img } alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={(title==="Mobile App") ? img[3] :img } alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        )}}

         </ProductConsumer>
               
        

    )
}
