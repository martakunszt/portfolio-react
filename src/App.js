import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb></Breadcrumb>
      </header>
    </div>
  );
}


function Breadcrumb() {
  return (
    <div className="Nav">
      <ul className="Breadcrumb">
        <li><a href="# ">My Work</a></li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default App;