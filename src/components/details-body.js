import './detail_style.css';
import Item from './detail_item';
import './dependencies/bootstrap/bootstrap.min.css'

let dummyMenu =[
     {_name : 'French Fries', _id : 1, _cost : 150 },
     {_name : 'French Fries', _id : 2, _cost : 150 },
     {_name : 'French Fries', _id : 3, _cost : 150 },
     {_name : 'French Fries', _id : 4, _cost : 150 },
     {_name : 'French Fries', _id : 5, _cost : 150 }
];

function DetailBody(){

    return (
        <div className="container details-body">
            <div className="row">
                <div className="col-7 details-menu">
                    <h1 className="menu-menu">Menu</h1>
                    {dummyMenu.map((item)=>{
                        return(
                            <Item item={item}></Item>
                        )
                    })}
                </div>
                <div className="col-5 details-card">
                    <h1 className="menu-menu">Cart</h1>
                </div>
            </div>
        </div>
    )
}

export default DetailBody;