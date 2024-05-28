import React from "react";
/* eslint-disable react/prop-types */
const TextArea = React.forwardRef(
  (
    {
      placeholder,
      type,
      width,
      value,
      disable,
      mt,
      name,
      onChange,
      cols,
      rows,
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        cols={cols}
        rows={rows}
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
      ></textarea>
    );
  }
);
TextArea.displayName = "TextArea";
export default TextArea;
