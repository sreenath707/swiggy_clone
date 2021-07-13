import './detail_style.css';
import Item from './detail_item';
import {useState} from 'react-dom';

let dummyMenu =[
     {_name : 'french fries', _id : 1, _cost : 150 },
     {_name : 'french fries', _id : 2, _cost : 150 },
     {_name : 'french fries', _id : 3, _cost : 150 },
     {_name : 'french fries', _id : 4, _cost : 150 },
     {_name : 'french fries', _id : 5, _cost : 150 }
];

function DetailBody(){

    return (
        <div className="container details-body">
            <div className="row">
                <div className="col-7 details-menu">
                    {dummyMenu.map((item)=>{
                        return(
                            <Item item={item}></Item>
                        )
                    })}
                </div>
                <div className="col-5 details-card"></div>
            </div>
        </div>
    )
}

export default DetailBody;