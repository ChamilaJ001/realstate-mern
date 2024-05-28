import PropertyCard from "./PropertyCard";
import { IoHomeOutline } from "react-icons/io5";
import { BsBuildings, BsBuildingAdd } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { TbHomeDollar } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiIsland } from "react-icons/gi";
import { CiParking1 } from "react-icons/ci";
import PropertyImageCard from "../PropertyImageCard/PropertyImageCard";

const PropertyTypesCard = () => {
  const iconClasses =
    "text-lg text-default-500 pointer-events-none flex-shrink-0 ";
  return (
    <>
      <section className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 gap-6 mb-5 mt-10 w-full grid-cols-2">
        <PropertyCard
          startContent={<IoHomeOutline size={25} />}
          title={"Houses"}
          more={false}
        />
        <PropertyCard
          startContent={<BsBuildings size={25} />}
          title={"Apartments"}
          more={false}
        />
        <PropertyCard
          startContent={<FaRegBuilding size={25} />}
          title={"Commercials"}
          more={false}
        />
        <PropertyCard
          startContent={<TbHomeDollar size={25} />}
          title={"Rentals"}
          more={false}
        />
        <PropertyCard
          startContent={<BsBuildingAdd size={25} />}
          title={"Buildings"}
          mmore={false}
        />
        <PropertyCard
          startContent={<HiDotsHorizontal size={25} />}
          title={"More"}
          more={true}
          moreStartContents={[
            <IoBedOutline className={iconClasses} key={"one"} />,
            <HiOutlineComputerDesktop className={iconClasses} key={"two"} />,
            <GiIsland className={iconClasses} key={"three"} />,
            <CiParking1 className={iconClasses} key={"four"} />,
          ]}
          moreTitles={["Rooms", "Office", "Land", "Parking lot"]}
        />
      </section>
      <div className="mt-10 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-6 mb-5 grid-cols-none">
        <PropertyImageCard
          image={"/img/buy_a_property.png"}
          title={"Buy a Property"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore perferendis error minima vel optio blanditiis ipsum dolor."
          }
          btnTitle={"Find a home"}
        />
        <PropertyImageCard
          image={"/img/sell_a_property.png"}
          title={"Sell a Property"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore perferendis error minima vel optio blanditiis ipsum dolor."
          }
          btnTitle={"Place an ad"}
        />
        <PropertyImageCard
          image={"/img/rent_a_property.png"}
          title={"Rent a Property"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam labore perferendis error minima vel optio blanditiis ipsum dolor."
          }
          btnTitle={"Find a rental"}
        />
      </div>
    </>
  );
};

export default PropertyTypesCard;
