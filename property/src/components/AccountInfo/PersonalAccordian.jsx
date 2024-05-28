import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaRegEdit } from "react-icons/fa";

/* eslint-disable react/prop-types */
const PersonalAccordian = ({ children, text, input }) => {
  return (
    <Accordion>
      <AccordionItem
        key="theme"
        aria-label="Theme"
        indicator={<FaRegEdit className="text-gray-600 text-medium" />}
        title={<h5 className="font-bold text-[17px]">{input}</h5>}
        subtitle={<p className="text-secondary text-medium">{text}</p>}
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
};

export default PersonalAccordian;
