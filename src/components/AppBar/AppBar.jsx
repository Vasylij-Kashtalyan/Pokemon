import { Navigation } from '../Navigation/Navigation';
import s from './AppBar.module.scss';
import { Outlet } from 'react-router-dom';

function AppBar() {
  return (
    <>
      <header className={s.header}>
        <Navigation />{' '}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export { AppBar };
