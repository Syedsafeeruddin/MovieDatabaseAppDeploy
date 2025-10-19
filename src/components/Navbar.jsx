import { NavLink } from 'react-router-dom';


function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-cyan-200 font-semibold border-b-2 border-cyan-600'
      : 'hover:text-cyan-400';

  return (
    <header className="bg-black shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-cyan-600">Movie-Database-App</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-cyan-700 font-medium">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/favorites" className={linkClass}>Favorites</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;