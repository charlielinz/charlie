const SortButton = ({
  postDatas,
  sortByDate,
  sortByRate,
  sortFilter,
  setSortFilter,
}) => {
  return (
    <div className="flex gap-8 pb-8">
      <button
        onClick={() => {
          sortByDate(postDatas);
          setSortFilter("date");
        }}
        className={
          sortFilter == "date"
            ? "py-1 px-5 bg-slate-500 rounded-lg text-lg shadow-lg text-gray-100"
            : "py-1 px-5 bg-slate-200 rounded-lg text-lg shadow-lg"
        }
      >
        New Posts
      </button>
      <button
        onClick={() => {
          sortByRate(postDatas);
          setSortFilter("rate");
        }}
        className={
          sortFilter == "rate"
            ? "py-1 px-5 bg-slate-500 rounded-lg text-lg shadow-lg text-gray-100"
            : "py-1 px-5 bg-slate-200 rounded-lg text-lg shadow-lg"
        }
      >
        Top Rated
      </button>
    </div>
  );
};

export default SortButton;
