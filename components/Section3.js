const Section3 = () => {
  return (
    <div className="bg-[url('/asset/bg2.jpg')] bg-cover bg-no-repeat h-screen flex items-center">
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-0 z-10">
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="lg:w-1/2">
            <h1 className="text-[45px] text-white font-extrabold">
              A total number of 10 exabyte data {""}
              <span className="text-[#f97516]">used by Indian’s monthly.</span>
            </h1>
            <p className="text-white">
              In India, rising usage can largely be attributed to the falling
              cost of data usage. About three out of five Indian social media
              users felt that the usage of social media has made it easier to
              manipulate people with fake news. quikey on the other hand
              provides you authentic and smartly shortened news.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-start">
            <img src="/asset/Rectangle2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
