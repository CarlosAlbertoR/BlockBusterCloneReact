import React from 'react';

function Pagination(props) {
  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select
        onChange={(event) => {
          props.onChangeItemsPerPage(event.target.value);
        }}
      >
        <option value="5">5 Movies</option>
        <option value="10">10 Movies</option>
        <option value="15">15 Movies</option>
        <option value="20">20 Movies</option>
      </select>
      <div className="pagination2">
        <span>
          Page {props.current} of {props.total}:
        </span>
        {Array.apply(0, Array(props.total)).map((item, i) => (
          <a
            onClick={() => props.onChangePage(i + 1)}
            className={i + 1 === props.current ? 'active' : 'pe-auto'}
          >
            {i + 1}
          </a>
        ))}
        <a>
          <i className="ion-arrow-right-b" />
        </a>
      </div>
    </div>
  );
}

export default Pagination;
