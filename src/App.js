import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb></Breadcrumb>
        <Hr></Hr>
      </header>
      <Mywork></Mywork>
    </div>
  );
}


function Breadcrumb() {
  return (
    <div className="Nav">
      <ul className="Breadcrumb">
        <li><a href="#work">My Work </a></li>
        <li>About me </li>
        <li>Contact </li>
      </ul>
    </div>
  );
}

function Hr() {
  return (
    <hr class="new1"></hr>
  );
}

function Mywork() {
  return (
    <div className="Mywork">
      <a name="work"></a>
      TEXT GOES HERE 
    </div>
  );
}

export default App;