import s from './BoxPage.module.scss';

function BoxPage({ children }) {
  return <div className={s.container}>{children}</div>;
}

export { BoxPage };
