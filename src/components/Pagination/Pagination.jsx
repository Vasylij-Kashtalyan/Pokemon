import s from './Pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={s.pagination}>
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <a
            onClick={() => paginate(number)}
            href="javascript:"
            className="page-link"
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { Pagination };
