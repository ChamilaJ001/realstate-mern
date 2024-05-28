import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

/* eslint-disable react/prop-types */
const SelectComp = React.forwardRef(
  ({ onChange, placeholder, options, required, label, width }, ref) => {
    return (
      <>
        {label ? (
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            {label}
            {required ? <p className="text-red-500 text-lg">*</p> : ""}
          </label>
        ) : (
          ""
        )}

        <Select
          placeholder={placeholder}
          className={`mt-2 ${width ? width : ""} text-[17px] `}
          radius="sm"
          color="primary"
          size={"sm"}
          variant="bordered"
          onChange={onChange}
          ref={ref}
        >
          {options?.map((val) => (
            <SelectItem key={val} value={val}>
              {val}
            </SelectItem>
          ))}
        </Select>
      </>
    );
  }
);
SelectComp.displayName = "SelectComp";
export default SelectComp;
