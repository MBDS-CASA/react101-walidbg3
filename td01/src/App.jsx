import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mbdslogo from './assets/mbds.jpg'
import './App.css'

function Header() {
  return (
    <div>
          <img src={mbdslogo} className="logo" alt="MBDS logo" />
          <h1>Introduction à React</h1>
          <h2>A la découverte des premières notions de React</h2>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <p>Ici, nous afficherons des informations interessantes :)</p>
    </div>
  );
}


function Footer(){
  return (
    <footer>
      <p>Tous droits réservés - Boughedda Walid</p>
    </footer>
  );
}



function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
