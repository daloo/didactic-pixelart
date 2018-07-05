import React from 'react';

const TodoFilters = ({ applyFilter }) => {
  const filterComponents = Object.keys(FILTERS).map(f => (
    <Filter key={f} label={f} onClick={() => applyFilter(f)} />
  ));
  return <div className="filters">{filterComponents}</div>;
};

const Filter = ({ label, onClick }) => (
  <span className="filter" onClick={onClick}>
    {label}
  </span>
);

const FILTERS = {
  ALL: () => true,
  DONE: ({ done }) => done,
  NOTDONE: ({ done }) => !done
};

export { TodoFilters, FILTERS };
