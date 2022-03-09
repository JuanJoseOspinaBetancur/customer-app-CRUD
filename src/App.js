import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  //para usea link, se tiene que utilizar con Router
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/customers">
        customer
      </Link><br/>
      <Link to='/customers/30000000'>customers 30.000.000</Link>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
