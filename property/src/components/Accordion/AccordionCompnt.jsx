import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AccordionCompnt = ({ keyVal, title, items, startContent }) => {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        title={title}
        key={keyVal}
        className="font-semibold "
        startContent={startContent}
      >
        {items.map((drop, i) => (
          <Link
            key={i}
            className="font-normal block mb-2 hover:text-primary ease-in-out duration-200"
          >
            {items[i]}
          </Link>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCompnt;
