import React from "react";
import css from './Filter.module.css';

const Filter = ({ getFilteredContacts }) => {
  return (
    <form className={css.filterForm}>
      <label><p> Find contact by name</p>
      <input type="text" placeholder="search..." onChange={getFilteredContacts} className={css.filterInput} />
      </label>
    </form>
  );
};

export default Filter;
