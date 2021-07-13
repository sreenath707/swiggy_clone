import React from 'react'
import './dependencies/bootstrap/bootstrap.min.css'
import './Body_style.css';

let Restaurants = [
    {_id : 1, _type : ['Biryani,pizza'], _name : 'suraj' ,img_url : "https://source.unsplash.com/collection/8613861/1600x900"},
    {_id : 2, _type : ['Biryani,pizza'], _name : 'suraj' ,img_url : "https://source.unsplash.com/collection/2533969/1600x900"},
    {_id : 3, _type : ['Biryani'      ], _name : 'suraj' ,img_url : "https://source.unsplash.com/collection/2290237/1600x900"},
    {_id : 4, _type : ['Biryani,pizza'], _name : 'suraj' ,img_url : "https://source.unsplash.com/collection/1028488/1600x900"},
    {_id : 5, _type : ['Biryani'      ], _name : 'suraj' ,img_url : "https://source.unsplash.com/collection/8351798/1600x900"},
    {_id : 6, _type : ['Biryani'      ], _name : 'suraj' ,img_url : "https://source.unsplash.com/collection/640945/1600x900"}
];

function Body(){
    return (
        <div className="container body-container">
            <div id="body-nav">
                <h2>{Restaurants.length} restaurants</h2>
                <div id="body-nav-content">

                </div>
            </div>
            <div className="body-main">
                {Restaurants.map(restaurant => {
                    return(
                        <a href="/details" className="anchor" key={restaurant._id}>
                        <div className="res-card" >
                            <img className="res-img" src = {restaurant.img_url}></img>
                            <span className="res-name">
                                {restaurant._name}
                            </span>
                            <span className="res-sub">{restaurant._type.map(element=> <span>{element} </span>)}</span>
                            <div className="res-rating-card">
                                <span className="res-rating"><i className="bi bi-star-fill"></i>3.9</span>
                                <span>.</span>
                                <span>34 MINS</span>
                                <span>.</span>
                                <span>$35 for three</span>
                            </div>
                        </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;