import { NavLink } from "react-router-dom"; // Change import
import mbdslogo from '../assets/mbds.jpg'

function Header() {
  return (
    <div className="header">
      <div className="menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/note">Notes</NavLink>
        <NavLink to="/etudiants">Etudiants</NavLink>
        <NavLink to="/matieres">Matières</NavLink>
        <NavLink to="/apropos">A propos</NavLink>
      </div>
    </div>
  );
}
export default Header;