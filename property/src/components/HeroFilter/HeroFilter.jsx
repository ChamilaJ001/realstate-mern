import { Button, Card, CardBody, Slider } from "@nextui-org/react";
import { FaHouseChimneyWindow, FaLocationDot } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

import MainFilters from "../MainFilters/MainFilters";

const HeroFilter = () => {
  const iconClasses =
    "xl:text-xl text-lg text[#9691a4] pointer-events-none flex-shrink-0 ";
  return (
    <>
      <Card
        shadow="sm"
        radius="sm"
        className="mt-5 w-full mb-10 p-1 border-1 border-[#fff] hidden sm:block"
      >
        {/* //flex-row */}
        <CardBody className="flex-row w-full gap-2 items-center">
          <MainFilters
            items={["For Rent", "For Sale"]}
            setVal="For Rent"
            startContent={<FaHouseChimneyWindow className={iconClasses} />}
          />

          <MainFilters
            items={[
              "Colombo",
              "Kurunegala",
              "Kandy",
              "Nuwaraeliya",
              "Trincomalee",
            ]}
            setVal="Location"
            startContent={<FaLocationDot className={iconClasses} />}
          />

          <MainFilters
            items={[
              "Houses",
              "Apartments",
              "Commercials",
              "Daily Rental",
              "New Buildings",
            ]}
            setVal="Property Type"
            startContent={<HiSquare3Stack3D className={iconClasses} />}
          />

          <p className="text-medium md:text-[14px] flex items-center gap-2 text-[#9691a4] ">
            <MdOutlinePriceChange className={iconClasses} />
            Price
          </p>

          <Slider
            showTooltip={true}
            formatOptions={{ style: "currency", currency: "LKR" }}
            tooltipValueFormatOptions={{ style: "currency", currency: "LKR" }}
            defaultValue={10000}
            className="w-32 ml-2"
            size="sm"
            step={1000}
            maxValue={100000}
          />

          <Button
            href="#"
            color="primary"
            className="text-white rounded-md font-semibold hover:shadow-sm hover:shadow-primary ml-3"
          >
            <IoSearchSharp size={20} />
          </Button>
        </CardBody>
      </Card>

      <Card
        shadow="sm"
        radius="sm"
        className="mt-5 w-full mb-10 p-1 border-1 border-[#fff] block sm:hidden"
      >
        {/* //flex-row */}
        <CardBody className="w-full gap-2 items-start">
          <MainFilters
            items={["For Rent", "For Sale"]}
            setVal="For Rent"
            startContent={<FaHouseChimneyWindow className={iconClasses} />}
          />

          <MainFilters
            items={[
              "Colombo",
              "Kurunegala",
              "Kandy",
              "Nuwaraeliya",
              "Trincomalee",
            ]}
            setVal="Location"
            startContent={<FaLocationDot className={iconClasses} />}
          />

          <MainFilters
            items={[
              "Houses",
              "Apartments",
              "Commercials",
              "Daily Rental",
              "New Buildings",
            ]}
            setVal="Property Type"
            startContent={<HiSquare3Stack3D className={iconClasses} />}
          />

          <p className="text-medium md:text-[14px] flex items-center gap-2 text-[#9691a4] ">
            <MdOutlinePriceChange className="xl:text-xl text-lg text[#9691a4] pointer-events-none flex-shrink-0 " />
            Price
          </p>

          <Slider
            showTooltip={true}
            formatOptions={{ style: "currency", currency: "LKR" }}
            tooltipValueFormatOptions={{ style: "currency", currency: "LKR" }}
            defaultValue={10000}
            className="w-full"
            size="sm"
            step={1000}
            maxValue={100000}
          />

          <Button
            href="#"
            color="primary"
            className="text-white rounded-md hover:shadow-sm hover:shadow-primary w-full font-bold"
          >
            <IoSearchSharp size={20} />
            Search
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default HeroFilter;
