import s from './AppBar.module.scss';
import { PokeBol } from 'components/AppBar/PokeBol/PokeBol';
import { Logo } from './Logo/Logo';

function AppBar() {
  return (
    <header className={s.header}>
      <Logo />
      <PokeBol />
    </header>
  );
}

export default AppBar;
