import { FiArrowDown } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="section h-screen flex flex-col justify-center items-center container mx-auto px-4 md:px-0">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-light mb-8">
          An average Indian uses 7 social
          <br />
          media apps daily{" "}
        </h1>
        <p>
          Quikey provides three servoces in one app and is proudly designed and
          develped in India.
        </p>
        <div className="">
          <FiArrowDown className="border rounded-full text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
