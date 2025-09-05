import styles from "./Filter.module.scss";

const Filter = ({ filter, onFilterChange }) => (
  <div className={styles.filterContainer}>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      placeholder="Search by name"
    />
  </div>
);

export default Filter;
