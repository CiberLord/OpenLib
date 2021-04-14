import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export interface FProps {
  filters: string[];
  setFilter?: CallableFunction;
}

export const Filterbutton: React.FC<FProps> = (props: FProps) => {

  const [filterVisible, setFilterVisible] = useState(false);
  const [filterText, setFiltertext] = useState(props.filters[0]);

  const items = (
    <ul className="filter-list">
      {
        props.filters.map((value, index) =>
          <li className="filter-item" key={index} onClick={() => switchFilter(value)}>{value}</li>)
      }
    </ul>);
  
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
      <CSSTransition
        in={filterVisible}
        timeout={200}
        classNames="f_anim"
        unmountOnExit
      >
        {items}
        </CSSTransition>
    </button>
  )
}