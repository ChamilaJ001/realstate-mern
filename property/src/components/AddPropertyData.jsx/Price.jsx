import { Card, CardBody } from "@nextui-org/react";
import { MdOutlinePriceChange } from "react-icons/md";
import Input from "../Input/Input";
import SelectComp from "../Select/Select";

/* eslint-disable react/prop-types */
const Price = ({ Controller, control, errors }) => {
  return (
    <Card className="">
      <CardBody>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <MdOutlinePriceChange className="text-primary" />
          Price
        </h2>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Price
            <p className="text-red-500 text-lg">*</p>
          </label>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div>
            <Controller
              name="currencyType"
              control={control}
              render={({ field }) => (
                <SelectComp
                  {...field}
                  placeholder={"Select"}
                  options={["LKR", "$", "€", "£", "₹"]}
                  required={true}
                />
              )}
            />
            <p className="text-xs text-red-500">
              {errors.currencyType?.message}
            </p>
          </div>

          <div>
            <Controller
              name="total"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder={"Enter price"} type={"number"} />
              )}
            />
            <p className="text-xs text-red-500">{errors.total?.message}</p>
          </div>

          <div>
            <Controller
              name="period"
              control={control}
              render={({ field }) => (
                <SelectComp
                  {...field}
                  placeholder={"Select a time period"}
                  options={["per day", "per week", "per month", "per year"]}
                  required={true}
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.period?.message}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Price;
