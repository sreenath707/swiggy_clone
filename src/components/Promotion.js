import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './promotion_style.css';

let promotionImageUrls = [
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/k7f6xdk98ywjcochkcwm",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/xyx4mophw81yol0t7oly",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/e8qsywpath9uli7tnikc",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/bmp2yqaaqouptllxmkei",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/e8qsywpath9uli7tnikc",

];

function PromotionElement(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
      let i =0;

    return (
        <Slider {...settings} className="promotion_card">
            {promotionImageUrls.map((url)=>{
                return(
                    <div key={i++}>
                    <img  className="promotional_image" src = {url}></img>
                    </div>
                )
            })}
        </Slider>
    )
}

export default PromotionElement;