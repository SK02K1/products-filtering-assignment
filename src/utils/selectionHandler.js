export const selectionHandler = ({ isSelected, options, selectedOption }) => {
  return isSelected
    ? options.concat(selectedOption)
    : options.filter((option) => option !== selectedOption);
};
