import styled from 'styled-components';
import './dependencies/bootstrap/bootstrap.min.css';
import './detail_style.css';

function DetailRestaurant(){

    return (
        <div className="ResCard">
            <section className="section-div">
                <img className="detail-image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ygtidrgs4e0ecjpatmgj"></img>
            </section>
            <section className="section-div">
                <div className="detail-title">The Kitchen garden</div>
                <div className="detail-subtitle">Biryani <br></br> Padmavathi Nagar, Nandyal </div>
                <div className="detail-rating-container">
                    <div className="detail-rating-subcontainer">
                        <div className ="detail-rate-main"><i className="bi bi-star-fill"></i>3.9</div>
                        <div className="detail-subtitle">100+ Ratings</div>
                    </div>
                    <div  className="detail-rating-subcontainer">
                        <div className ="detail-rate-main">29 mins</div>
                        <div className="detail-subtitle">Delivery Time</div>
                    </div >
                    <div className="detail-rating-subcontainer">
                        <div className ="detail-rate-main">Rs 350</div>
                        <div className="detail-subtitle">Cost for 2</div>
                    </div >
                </div>
            </section>
            <section className="section-div"></section>
        </div>
    )
}


export default DetailRestaurant;