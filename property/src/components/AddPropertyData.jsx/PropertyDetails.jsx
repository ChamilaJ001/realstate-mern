import { Card, CardBody, Checkbox, CheckboxGroup } from "@nextui-org/react";
import { FaRegEdit } from "react-icons/fa";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Amentetis from "./Amentetis";

/* eslint-disable react/prop-types */
const PropertyDetails = ({ Controller, control, errors }) => {
  return (
    <Card className="max-w-[800px] rounded-xl p-3 mt-5">
      <CardBody>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <FaRegEdit className="text-primary text-xl" />
          Property details
        </h2>

        <div className="grid grid-cols-2 gap-6 mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Total area, sq.m
          </label>

          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Bedrooms
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full">
          <Controller
            name="area"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={"Enter your area"}
                type={"number"}
              />
            )}
          />

          <Controller
            name="bedrooms"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={"Enter amount of bedrooms"}
                type={"number"}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-1">
          <p className="text-xs text-red-500">{errors.area?.message}</p>
          <p className="text-xs text-red-500">{errors.bedrooms?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Bathrooms
          </label>

          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Parking spots
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full">
          <Controller
            name="bathrooms"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={"Enter amount of bathrooms"}
                type={"number"}
              />
            )}
          />

          <Controller
            name="parking"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder={"Enter amount of parking spots"}
                type={"number"}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-1">
          <p className="text-xs text-red-500">{errors.bathrooms?.message}</p>
          <p className="text-xs text-red-500">{errors.parking?.message}</p>
        </div>

        <label htmlFor="email" className="text-md flex gap-1 items-center mt-5">
          Amentities
        </label>
        <Amentetis Controller={Controller} control={control} />

        <div className="mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Pets
          </label>

          <div className="mt-3">
            <Controller
              name="pets"
              control={control}
              render={({ field }) => (
                <CheckboxGroup {...field}>
                  <Checkbox size="sm" className="block" value={"Cats allowed"}>
                    Cats allowed
                  </Checkbox>
                  <Checkbox size="sm" className="block" value={"Dogs allowed"}>
                    Dogs allowed
                  </Checkbox>
                  <Checkbox
                    size="sm"
                    className="block"
                    value={"Pets not allowed"}
                  >
                    Pets not allowed
                  </Checkbox>
                </CheckboxGroup>
              )}
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Description
            <p className="text-red-500 text-lg">*</p>
          </label>

          <div className="mt-3">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  cols="15"
                  rows="8"
                  placeholder="Describe your property"
                />
              )}
            />
            <p className="text-xs text-red-500 mt-1">
              {errors.description?.message}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyDetails;
