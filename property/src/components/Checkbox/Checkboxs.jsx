import { Checkbox } from "@nextui-org/react";

/* eslint-disable react/prop-types */
const Checkboxs = ({ title, value }) => {
  return (
    <Checkbox size="sm" className="block" value={value}>
      {title}
    </Checkbox>
  );
};

export default Checkboxs;
