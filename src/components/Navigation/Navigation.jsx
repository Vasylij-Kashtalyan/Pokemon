import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>

      <NavLink
        to="/pokemons"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Pokemons
      </NavLink>
    </nav>
  );
}
export { Navigation };
