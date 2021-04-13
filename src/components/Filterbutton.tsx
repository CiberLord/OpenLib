import React, { useState } from 'react';


export interface FProps {
  filters: string[];
  setFilter?: CallableFunction;
}

export const Filterbutton: React.FC<FProps> = (props: FProps) => {

  const [filterVisible, setFilterVisible] = useState(false);
  const [filterText, setFiltertext] = useState(props.filters[0]);
  
  const switchFilter = (filter: string) => {
    setFiltertext(filter);
    props.setFilter(filter);
    setFilterVisible(false);
  }
  const showFilters = () => {
    setFilterVisible(!filterVisible);
  }
  return (
    <button className="filter-button" onClick={showFilters}>
      {filterText}
      {filterVisible &&
        <ul className="filter-list">
          {
            props.filters.map((value, index) =>
              <li className="filter-item" key={index} onClick={() => switchFilter(value)}>{value}</li>)
          }
        </ul>
      }
    </button>
  )
}