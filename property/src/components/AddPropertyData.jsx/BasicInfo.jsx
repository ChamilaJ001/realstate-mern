import { Card, CardBody } from "@nextui-org/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import Input from "../Input/Input";
import SelectComp from "../Select/Select";

/* eslint-disable react/prop-types */
const BasicInfo = ({ Controller, control, errors }) => {
  return (
    <Card className="max-w-[800px] rounded-xl p-3">
      <CardBody>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <HiOutlineInformationCircle className="text-primary" />
          Basic Info
        </h2>

        <div className="mt-5">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label={"Title"}
                placeholder={"Title for your property"}
                required={true}
                // name="title"
              />
            )}
          />
          <p className="text-xs text-red-500">{errors.title?.message}</p>
          {/* <p className="text-sm text-gray-400">50 characters left</p> */}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Category
            <p className="text-red-500 text-lg">*</p>
          </label>

          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Property type
            <p className="text-red-500 text-lg">*</p>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full">
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <SelectComp
                {...field}
                placeholder={"Select a category"}
                options={["For rent", "For Sale"]}
                required={true}
              />
            )}
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <SelectComp
                {...field}
                placeholder={"Select a property type"}
                options={[
                  "Apartment",
                  "House",
                  "Building",
                  "Daily rental",
                  "Commercial",
                ]}
                required={true}
              />
            )}
          />
        </div>
        {/* <div className="flex gap-[315px] mt-1">
          <p className="text-xs text-red-500">{errors.category?.message}</p>
          <p className="text-xs text-red-500">{errors.type?.message}</p>
        </div> */}
        <div className="grid grid-cols-2 gap-6 mt-1">
          <p className="text-xs text-red-500">{errors.category?.message}</p>
          <p className="text-xs text-red-500">{errors.type?.message}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicInfo;
