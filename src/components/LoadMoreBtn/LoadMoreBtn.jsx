/* eslint-disable react/prop-types */
import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={css.wrap}>
      <button className={css.btn} type="button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;