import _ from "lodash";
import Head from "next/head";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav style={{marginBottom: '70px'}}>
        <ul className="pagination pagination-circle">
          <a className="page-link border-0" href="#" aria-label="Previous" style={{marginRight: '15px'}}>
            <span className="icon-page" aria-hidden="true">&laquo;</span>
          </a>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                className="page-link page-number"
              >
                {page}
              </a>
            </li>
          ))}
          <a className="page-link border-0" href="#" aria-label="Next">
            <span className="icon-page" aria-hidden="true">&raquo;</span>
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
