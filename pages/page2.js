const page2 = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-5/6 lg:w-3/5 h-full mx-auto">
        <div className="">
          <div className="text-2xl lg:text-4xl mb-4 animate-fade-in">
            This is
          </div>
          <div className="text-5xl lg:text-8xl my-8">
            <div className="h-8 lg:h-24 flex items-center before:animate-name1-fade-in after:animate-name2-fade-in"></div>
          </div>
          <div className="animate-fade-in">Art & Tech</div>
          <div className="animate-fade-in">Emotional & Rational</div>
        </div>
      </div>
    </>
  );
};

export default page2;
