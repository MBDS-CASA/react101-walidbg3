import { NavLink } from 'react-router-dom';


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-text">EduManager</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Subjects
            </NavLink>
          </li>
          <li>
            <NavLink to="/grades" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Grades
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>© 2025 MBDS</p>
      </div>
    </aside>
  );
}

export default Sidebar;
