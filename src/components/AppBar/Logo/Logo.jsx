import s from './Logo.module.scss';
import logoImg from './logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img className={s.logo} src={logoImg} alt="" />
    </Link>
  );
}
export { Logo };
