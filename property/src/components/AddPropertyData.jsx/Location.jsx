import { Card, CardBody } from "@nextui-org/react";
import { TiLocationOutline } from "react-icons/ti";
import Input from "../Input/Input";
import SelectComp from "../Select/Select";
import { cities, districts } from "../../Data/Locations";

/* eslint-disable react/prop-types */
const Location = ({ Controller, control, errors }) => {
  return (
    <Card className="max-w-[800px] rounded-xl p-3 mt-5">
      <CardBody>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <TiLocationOutline className="text-primary" />
          Location
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Country / region
            <p className="text-red-500 text-lg">*</p>
          </label>

          <label htmlFor="email" className="text-md flex gap-1 items-center">
            District
            <p className="text-red-500 text-lg">*</p>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full">
          <Input
            value={"Sri Lanka"}
            required={true}
            disable={true}
            name="country"
          />

          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <SelectComp
                {...field}
                placeholder={"Select a district"}
                options={districts}
                required={true}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-1">
          <p className="text-xs text-red-500">{errors.country?.message}</p>
          <p className="text-xs text-red-500">{errors.district?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            City
            <p className="text-red-500 text-lg">*</p>
          </label>

          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Zip code
            <p className="text-red-500 text-lg">*</p>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full">
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <SelectComp
                {...field}
                placeholder={"Select a city"}
                options={cities}
                required={true}
                width={"w-full"}
              />
            )}
          />

          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={"Enter zip code"}
                required={true}
              />
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-1">
          <p className="text-xs text-red-500">{errors.city?.message}</p>
          <p className="text-xs text-red-500">{errors.zip?.message}</p>
        </div>

        <div className="mt-5">
          <Controller
            name="street"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={"Enter street address"}
                required={true}
                label={"Street address"}
              />
            )}
          />
          <p className="text-xs text-red-500">{errors.street?.message}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Location;
