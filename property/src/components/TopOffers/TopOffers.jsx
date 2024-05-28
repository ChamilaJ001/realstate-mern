import PropertyCard from "../PropertyCard/PropertyCard";
import { FaArrowRightLong } from "react-icons/fa6";

const TopOffers = () => {
  return (
    <section className="mb-20 mt-10">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Top offers</h2>
        <h5 className="text-gray-500 text-lg flex items-center gap-2 cursor-pointer hover:text-primary ease-in-out duration-300">
          View all <FaArrowRightLong />
        </h5>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8 items-center mt-10 slider-container grid-cols-none">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
};

export default TopOffers;
