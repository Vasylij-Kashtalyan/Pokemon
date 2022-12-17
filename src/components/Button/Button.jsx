import s from './Button.module.scss';

function Button({ onClickLoad }) {
  return (
    <button className={s.Button} type="button" onClick={() => onClickLoad()}>
      Load more
    </button>
  );
}
export { Button };
