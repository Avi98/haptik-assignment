export const SortBy = ({ options, handleChange }) => {
  return (
    <div>
      Sort By:
      <select onChange={handleChange}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
