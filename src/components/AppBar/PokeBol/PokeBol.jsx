import imgBol from './bol.png';
import s from './PokeBol.module.scss';

function PokeBol() {
  return (
    <>
      <img className={s.bol} src={imgBol} alt={s.bol} />
    </>
  );
}
export { PokeBol };
