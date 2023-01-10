import { Link } from 'react-router-dom';
import s from './ListFilterType.module.scss';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

function ListFilterType({ types, filterType }) {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    if (location?.state?.from) {
      const { pathname, search } = location?.state?.from;

      return navigate(`${pathname}${search}`);
    }
    return navigate('/');
  };

  return (
    <>
      <div className={s.goBack}>
        <Button>
          <AiOutlineLeft onClick={goBack} />
        </Button>
      </div>
      <div className={s.listTypes}>
        {types.length > 0 &&
          types.map(pokemon => (
            <Link key={pokemon.name} to={'/type'}>
              <button
                className={`${s.listTypes_button} ${pokemon.name}`}
                onClick={() => filterType(pokemon.name)}
              >
                {pokemon.name}
              </button>
            </Link>
          ))}
      </div>
    </>
  );
}

export default ListFilterType;
