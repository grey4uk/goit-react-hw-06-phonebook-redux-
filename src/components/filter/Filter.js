import React from "react";
import css from "./Filter.module.css";
import { connect } from "react-redux";
import { getFilterQuery} from "../../redux/actions";

const Filter = props => {

  return (
    <form className={css.filterForm}>
      <label>
        <p> Find contact by name</p>
        <input
          type="text"
          placeholder="search..."
          onChange={props.getFilterQuery}
          className={css.filterInput}
        />
      </label>
    </form>
  );
};

export default connect(null, { getFilterQuery })(Filter);
