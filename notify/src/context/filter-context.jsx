import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../utils/filterReducer";
import {
  compose,
  filterDataByLabels,
  filterDataByPriority,
  sortDataByDate,
} from "../utils/filterSort";
import { useNotesContext } from "./notes-context";

const FilterContext = createContext();
const useFilterContext = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: null,
    priorities: [],
    labels: [],
  });
  const { notesState } = useNotesContext();

  const filterData = compose(
    filterState,
    filterDataByPriority,
    filterDataByLabels,
    sortDataByDate
  )(
    notesState.notes.filter(
      (item) =>
        item.isTrash === false &&
        item.isPin === false &&
        item.isArchive === false
    )
  );
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch, filterData }}>
      {children}
    </FilterContext.Provider>
  );
};
export { useFilterContext, FilterContextProvider };
