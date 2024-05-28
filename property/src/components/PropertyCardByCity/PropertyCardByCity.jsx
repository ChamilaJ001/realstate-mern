import { FaArrowRightLong } from "react-icons/fa6";
import CardByCity from "./CardByCity";

const PropertyCardByCity = () => {
  return (
    <section className="mb-20 mt-10">
      <div className="flex justify-between items-center">
        <h2 className="font-bold xl:text-3xl lg:text-3xl md:text-3xl text-xl">
          Search property by city
        </h2>
        <h5 className="text-gray-500 xl:text-lg lg:text-lg md:text-lg text-medium flex items-center gap-2 cursor-pointer hover:text-primary ease-in-out duration-300">
          View all <FaArrowRightLong />
        </h5>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-none gap-6 items-center mt-10">
        <CardByCity />
        <CardByCity />
        <CardByCity />
        <CardByCity />
      </div>
    </section>
  );
};

export default PropertyCardByCity;
