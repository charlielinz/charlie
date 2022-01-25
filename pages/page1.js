const page1 = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-stretch h-screen">
        <div className="col-start-1 col-end-3 grid grid-rows-6 animate-slidein-left">
          <div className="row-start-1 row-end-2 bg-gray-300" />
          <div className="row-start-2 row-end-7 bg-gray-50">
          </div>
        </div>
        <div className="col-start-3 col-end-4 grid grid-rows-6 animate-slidein-right">
          <div className="row-start-1 row-end-2 bg-gray-50"></div>
          <div className="row-start-2 row-end-7 bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default page1;
