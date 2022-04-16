import { useFilterContext } from "../../context/filter-context";
import { useNotesContext } from "../../context/notes-context";
import "./Filter.css";
const Filter = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const { notesState } = useNotesContext();
  return (
    <div className="filter-container">
      <div className="filter-options">
        <h4> Sort</h4>
        <label>
          <input
            type="radio"
            name="radio"
            checked={filterState.sort === "OLD"}
            onChange={() => filterDispatch({ type: "OLD_TO_NEW" })}
          />
          OLD
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            checked={filterState.sort === "NEW"}
            onChange={() => filterDispatch({ type: "NEW_TO_OLD" })}
          />
          NEW
        </label>
      </div>
      <div className="filter-options">
        <h4> Priority</h4>
        <label>
          <input
            name="checkbox"
            type="checkbox"
            checked={
              filterState.priorities.find((element) => element === "HIGH") ===
              undefined
                ? false
                : true
            }
            onChange={() =>
              filterDispatch({ type: "PRIORITY", payload: "HIGH" })
            }
          />
          HIGH
        </label>
        <label>
          <input
            name="checkbox"
            type="checkbox"
            checked={
              filterState.priorities.find((element) => element === "MID") ===
              undefined
                ? false
                : true
            }
            onChange={() =>
              filterDispatch({ type: "PRIORITY", payload: "MID" })
            }
          />
          MID
        </label>
        <label>
          <input
            name="checkbox"
            type="checkbox"
            checked={
              filterState.priorities.find((element) => element === "LOW") ===
              undefined
                ? false
                : true
            }
            onChange={() =>
              filterDispatch({ type: "PRIORITY", payload: "LOW" })
            }
          />
          LOW{" "}
        </label>
      </div>
      <div className="filter-options">
        <h4> LABEL</h4>
        {notesState.uniqueLabels.map((item) => {
          return (
            <label>
              <input
                type="checkbox"
                checked={filterState.labels.includes(item) ? true : false}
                onChange={() => filterDispatch({ type: "TAG", payload: item })}
              />
              {item}
            </label>
          );
        })}
      </div>
      <div className="filter-options">
        <button
          className=" button contained-button secondary-button"
          onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
        >
          clear all
        </button>
      </div>
    </div>
  );
};
export { Filter };
