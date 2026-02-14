import { useDispatch, useSelector } from "react-redux";
// import { setFilter, selectFilter } from "../../redux/filterSlice";
import { setFilter } from "../../redux/filter/filter-reducer";

import styles from "./Filter.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  // const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;

// import styles from "./Filter.module.scss";

// const Filter = ({ filter, onFilterChange }) => (
//   <div className={styles.filterContainer}>
//     <p>Find contacts by name</p>
//     <input
//       type="text"
//       value={filter}
//       onChange={(e) => onFilterChange(e.target.value)}
//       placeholder="Search by name"
//     />
//   </div>
// );

// export default Filter;
