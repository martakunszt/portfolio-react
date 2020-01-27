import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumbs></Breadcrumbs>
      </header>
    </div>
  );
}


function Breadcrumbs() {
  return (
    <div className="Breadcrumb">
      <ul>
        <li><a href="# ">My Work</a></li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default App;