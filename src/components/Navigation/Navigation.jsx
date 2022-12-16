import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/pokemon"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Pokemons
      </NavLink>
    </nav>
  );
}
export default Navigation;
