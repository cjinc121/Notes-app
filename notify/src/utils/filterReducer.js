const filterReducer = (state, action) => {
  switch (action.type) {
    case "OLD_TO_NEW":
      return { ...state, sort: "OLD" };
    case "NEW_TO_OLD":
      return { ...state, sort: "NEW" };
    case "PRIORITY":
      const isAdded = state.priorities.find((item) => item === action.payload);
      if (isAdded === undefined) {
        return { ...state, priorities: [...state.priorities, action.payload] };
      } else {
        const newpriorities = state.priorities.filter(
          (item) => item != action.payload
        );
        return { ...state, priorities: newpriorities };
      }
    case "TAG":
      if (state.labels.find((item) => item === action.payload) === undefined) {
        return { ...state, labels: [...state.labels, action.payload] };
      } else {
        const newlabels = state.labels.filter((item) => item != action.payload);
        return { ...state, labels: newlabels };
      }
    case "CLEAR_ALL":
      return { ...state, sort: null, priorities: [], labels: [] };
    default:
      return state;
  }
};
export { filterReducer };
