import mbdslogo from '../assets/mbds.jpg'

function Header() {
  const handleMenuClick = (item) => {
    alert(`Vous avez cliqué sur: ${item}`);
  };

  return (
    <div className="header">
      <div className="menu">
        <button onClick={() => handleMenuClick('Notes')}>Notes</button>
        <button onClick={() => handleMenuClick('Etudiants')}>Etudiants</button>
        <button onClick={() => handleMenuClick('Matières')}>Matières</button>
        <button onClick={() => handleMenuClick('A propos')}>A propos</button>
      </div>
      <div className="header-content">
        <img src={mbdslogo} className="logo" alt="MBDS logo" />
        <h1>Introduction à React</h1>
        <h2>A la découverte des premières notions de React</h2>
      </div>
    </div>
  );
}

export default Header;
