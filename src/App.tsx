import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Increase from "./component/Increase";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <Increase/>
    </div>
  );
}

export default App;
