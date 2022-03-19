const Dropdown = ({
  isMenuOpened,
  setIsMenuOpened,
  optionName,
  setOptionName,
  options,
}) => {
  return (
    <div
      className={
        isMenuOpened
          ? "flex flex-col items-start w-fit space-y-4 py-4 pr-12 bg-gray-50 shadow-md"
          : "flex flex-col items-start w-fit space-y-4 py-4 pr-12"
      }
    >
      <button
        className="flex gap-4 pl-4 items-center"
        onClick={() => {
          setIsMenuOpened((prev) => !prev);
        }}
      >
        <span className="shrink-0 font-black text-black">{optionName}</span>
        <i
          className={
            isMenuOpened
              ? "fa-solid fa-chevron-down transition-all duration-200 -rotate-180"
              : "fa-solid fa-chevron-down transition-all duration-200"
          }
        />
      </button>
      <div className="flex flex-col gap-4 items-start font-extralight text-gray-600">
        {options.map((option, index) => (
          <button
            className={isMenuOpened ? "pl-4" : "invisible pl-4"}
            key={index}
            onClick={() => {
              setOptionName(option);
              setIsMenuOpened(false)
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
