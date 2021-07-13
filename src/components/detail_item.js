import {useState} from 'react';


function Item(props){
    const [cost,setCost] = useState(0);


    function buttonIncrementHandler(){
        setCost(prevCost=> ++prevCost);
    }
    function buttonDecrementHandler(){
        if(cost >0){
            setCost(prevCost=>--prevCost);
        }
    }
    return(
    <div key={props.item._id} className = " container props.item-card">
        <div className="row">
            <div className="col-8">
                <div className="item-name">{props.item._name}</div>
                <div clasname="subtitle">{props.item._cost}</div>
            </div>
            <div className="item-button col-4" >
                <div onClick={buttonDecrementHandler}>
                    <i class="bi bi-dash-lg" ></i>
                </div>
                <div>{cost}</div>
                <i className="bi bi-plus-lg" onClick={buttonIncrementHandler}></i>
            </div>
        </div>                        
    </div>
    );
}

export default Item;