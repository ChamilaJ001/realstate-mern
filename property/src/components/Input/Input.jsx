import React from "react";

/* eslint-disable react/prop-types */
const Input = React.forwardRef(
  (
    {
      placeholder,
      label,
      type,
      required,
      width,
      value,
      disable,
      mt,
      name,
      onChange,
      hidden,
      multiple,
      min,
      max,
      ...rest
    },
    ref
  ) => {
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

        <input
          {...rest}
          min={min ? min : ""}
          max={max ? max : ""}
          hidden={hidden ? hidden : ""}
          multiple={multiple ? multiple : ""}
          ref={ref}
          name={name}
          onChange={onChange}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          value={value}
          disabled={disable ? disable : ""}
          className={`py-[10px] px-3 ${
            width ? width : "w-full"
          }  border-2 border-gray-200 rounded-[0.5rem] ${
            mt ? mt : "mt-2"
          } hover:ring-primary focus:border-[#fd7e14] focus:outline-none text-[16px]`}
        />
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
