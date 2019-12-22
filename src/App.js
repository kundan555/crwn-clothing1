import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

const HatpPge =()=>(
  <div>HATS PAGE</div>
)

function App() {
  return (
    <div>
   <Switch>
   <Route exact path='/' component={Homepage}/>
   <Route path='/hats' component={HatpPge}/>
   </Switch>
    </div>
  );
}

export default App;
