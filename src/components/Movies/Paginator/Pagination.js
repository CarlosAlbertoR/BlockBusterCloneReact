import React from 'react';

function Pagination(props) {
  const paginator = props;

  return (
    <div className="topbar-filter">
      Movies per page:
      {/* <label>Movies per page:</label> */}
      <select
        onChange={(event) => {
          paginator.onChangeItemsPerPage(event.target.value);
        }}
      >
        <option value="5">5 Movies</option>
        <option value="10">10 Movies</option>
        <option value="15">15 Movies</option>
        <option value="20">20 Movies</option>
      </select>
      <div className="pagination2">
        <span>
          Page {paginator.current} of {paginator.total}:
        </span>
        {Array.apply(0, Array(paginator.total)).map((item, i) => (
          <a
            onMouseEnter={() => paginator.onChangePage(i + 1)}
            className={i + 1 === paginator.current ? 'active' : 'pe-auto'}
            href="()"
          >
            {i + 1}
          </a>
        ))}
        <a href="()">
          <i className="ion-arrow-right-b" />
        </a>
      </div>
    </div>
  );
}

export default Pagination;
