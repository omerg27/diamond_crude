import React from 'react';

import './App.css';
import { Addnewdim } from './features/Addnewdim';


import { Dimond } from './features/counter copy/Dimone_new';
import { Updatdim } from './features/Updatdim';


function App() {
  return (
    <div className="App">
      <Dimond></Dimond>
      <Addnewdim></Addnewdim>
      <Updatdim></Updatdim>      
      
    </div>
  );
}

export default App;
