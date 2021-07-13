import './App.css';
import NavBar from './components/NavBar'; 
import PromotionElement from './components/Promotion';
import Body from './components/Body';
import {Route,Switch} from 'react-router-dom';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>

      <Switch>
        
      <Route path="/details">
            <Details></Details>
        </Route>
        
        <Route path="/">
            <PromotionElement></PromotionElement>
            <Body></Body>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
