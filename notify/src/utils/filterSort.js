const filterDataByPriority = ({ priorities }, notes) => {
  if (priorities.length > 0) {
    return notes.filter(
      (item) => priorities.indexOf(item.note.priority) !== -1
    );
  } else return notes;
};
const filterDataByLabels = ({ labels }, notes) => {
  if (labels.length > 0) {
    return notes.filter(
      (item) => item.note.label.filter((tag) => labels.includes(tag)).length > 0
    );
  }
  return notes;
};
const sortDataByDate = ({ sort }, notes) => {
  if (sort === "OLD") {
    return [...notes].sort(
      (a, b) => Date.parse(a.note.date) - Date.parse(b.note.date)
    );
  } else if (sort === "NEW") {
    return [...notes].sort(
      (a, b) => Date.parse(b.note.date) - Date.parse(a.note.date)
    );
  } else return notes;
};
const compose =
  (state, ...args) =>
  (notes) =>
    args.reduce((acc, curr) => {
      return curr(state, acc);
    }, notes);

export { compose, filterDataByLabels, filterDataByPriority, sortDataByDate };
