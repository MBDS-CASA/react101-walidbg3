import mbdslogo from '../assets/mbds.jpg'
function Header() {
  return (
    <div>
          <img src={mbdslogo} className="logo" alt="MBDS logo" />
          <h1>Introduction à React</h1>
          <h2>A la découverte des premières notions de React</h2>
    </div>
  );
}
export default Header;