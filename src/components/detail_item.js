import {useState} from 'react';


function Item(props){
    const [cost,setCost] = useState(0);
    const [isAboveOne,SetAboveOne] = useState(false);


    function buttonIncrementHandler(){
        setCost(prevCost=> {
            if(prevCost == 0){
                SetAboveOne(true);
            }
            return ++prevCost;
        });
    }
    function buttonDecrementHandler(){
        if(cost >0){
            setCost(prevCost=>{
                if(prevCost == 1){
                    SetAboveOne(false);
                }
                return --prevCost;
            });
        }
    }

    function ButtonInside(props){
        if(props.isAboveOne){
            return(
                <div className="item-button">
                    <div onClick={buttonDecrementHandler}>
                        <i className="bi bi-dash-lg" ></i>
                    </div>
                    <div>{cost}</div>
                    <i className="bi bi-plus-lg" onClick={buttonIncrementHandler}></i>
                </div>
            )
        }
        else{
            return(
                <div className="item-button" onClick={buttonIncrementHandler}>ADD</div>
            )
        }
    }

    
    return(
    <div key={props.item._id} className = " container item-card">
        <div className="row">
            <div className="col-8">
                <div className="item-name">{props.item._name}</div>
                <div clasname="subtitle">${props.item._cost}</div>
            </div>
            <div className="col-4" >
                <ButtonInside isAboveOne = {isAboveOne}></ButtonInside>
            </div>
        </div>                        
    </div>
    );
}

export default Item;