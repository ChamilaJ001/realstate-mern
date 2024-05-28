import { Checkbox, CheckboxGroup, Divider, Slider } from "@nextui-org/react";
import { GiHouseKeys } from "react-icons/gi";
import { MdOutlineHouse } from "react-icons/md";
import AutocompleteCompt from "../Autocomplete/AutocompleteCompt";
import SelectComp from "../Select/Select";
import Checkboxs from "../Checkbox/Checkboxs";
import { GrPowerReset } from "react-icons/gr";
import { cities } from "../../Data/locations";

import { useState } from "react";

/* eslint-disable react/prop-types */
const Filters = ({
  rentOrSale,
  setRentOrSale,
  setCity,
  setType,
  setBedrooms,
}) => {
  const [sliderValue, setSliderValue] = useState([0, 1000000]);
  return (
    <>
      <div className="flex items-center gap-2 justify-center">
        <button
          onClick={() => setRentOrSale("For rent")}
          className={`py-2 px-5 text-[16px] rounded-lg  flex items-center gap-1 border-1 border-gray-50  ${
            rentOrSale === "For rent"
              ? "text-primary cursor-default  shadow-lg"
              : "bg-gray-50 text-[#1f1b2d] hover:shadow-gray-100 ease-in-out duration-300 cursor-pointer"
          }`}
        >
          <GiHouseKeys className="text-lg" />
          For rent
        </button>
        <button
          onClick={() => setRentOrSale("For sale")}
          className={`bg-gray-50 py-2 px-5 text-[16px] rounded-lg flex items-center gap-1 border-1 border-gray-100   ${
            rentOrSale === "For sale"
              ? "text-primary cursor-default bg-white shadow-lg"
              : "text-[#1f1b2d] hover:shadow-gray-100 hover:shadow-lg ease-in-out duration-300 cursor-pointer"
          }`}
        >
          <MdOutlineHouse className="text-lg" />
          For sale
        </button>
      </div>
      <Divider orientation="horizontal" className="mt-5 text-gray-50" />

      {/* Location */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-3">Location</h3>
        <AutocompleteCompt cities={cities} setCity={setCity} />
      </div>

      {/* Property Types */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-2">Property type</h3>
        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
          <CheckboxGroup onValueChange={setType}>
            <Checkbox size="sm" className="block" value="House">
              House
            </Checkbox>
            <Checkbox size="sm" className="block" value="Apartment">
              Apartment
            </Checkbox>
            <Checkbox size="sm" title={"Room"} value={"Room"}>
              Room
            </Checkbox>
            <Checkbox size="sm" title={"Office"} value={"Office"}>
              Office
            </Checkbox>
            <Checkbox size="sm" title={"Commercial"} value={"Commercial"}>
              Commercial
            </Checkbox>
            <Checkbox size="sm" title={"Land"} value={"Land"}>
              Land
            </Checkbox>
            <Checkbox size="sm" title={"Daily rental"} value={"Daily rental"}>
              Daily rental
            </Checkbox>
            <Checkbox size="sm" title={"New building"} value={"New building"}>
              New building
            </Checkbox>
            <Checkbox size="sm" title={"Parking spot"} value={"Parking spot"}>
              Parking spot
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>

      {/* Price */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-3">Price per month</h3>
        <Slider
          showTooltip={true}
          tooltipValueFormatOptions={{ style: "currency", currency: "LKR" }}
          size="sm"
          step={10000}
          maxValue={10000000}
          minValue={0}
          value={sliderValue}
          onChange={setSliderValue}
          className="max-w-md"
        />
        <p className="text-default-500 font-medium text-small mt-2">
          Selected budget:{" "}
          {Array.isArray(sliderValue) &&
            sliderValue.map((b) => `Rs.${b}`).join(" – ")}
        </p>
      </div>

      {/* Beds and baths */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-3">Beds and baths</h3>
        <SelectComp
          placeholder={"Select bedrooms"}
          options={["1", "2", "3", "4", "5"]}
          onChange={setBedrooms}
        />
        <SelectComp
          placeholder={"Select bathrooms"}
          value={["1", "2", "3", "4", "5+"]}
        />
      </div>

      {/* Amenteties */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-2">Amenities</h3>
        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
          <Checkboxs title={"Air conditioning"} />
          <Checkboxs title={"Balcony"} />
          <Checkboxs title={"Garage"} />
          <Checkboxs title={"Gym"} />
          <Checkboxs title={"Parking"} />
          <Checkboxs title={"Pool"} />
          <Checkboxs title={"Security cameras"} />
          <Checkboxs title={"WiFi"} />
          <Checkboxs title={"Laundry"} />
          <Checkboxs title={"Dishwasher"} />
        </div>
      </div>

      {/* Pets */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-2">Pets</h3>
        <Checkboxs title={"Cats allowed"} />
        <Checkboxs title={"Dogs allowed"} />
      </div>

      {/* Additional options */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-2">Additional options</h3>
        <Checkboxs title={"Verified"} />
        <Checkboxs title={"Featured"} />
      </div>

      <Divider orientation="horizontal" className="mt-10 text-gray-50" />

      <button className="mt-5 text-center justify-center flex items-center gap-1 text-primary border-1 border-primary py-2 px-5 font-bold rounded-lg hover:bg-primary hover:text-white ease-in-out duration-300">
        <GrPowerReset />
        Reset filters
      </button>
    </>
  );
};

export default Filters;
