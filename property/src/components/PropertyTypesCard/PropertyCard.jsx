import {
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PropertyCard = ({
  startContent,
  title,
  more,
  moreStartContents,
  moreTitles,
}) => {
  const clickMoreButton = (e) => {
    e.preventDefault();
  };

  console.log(moreTitles);

  return (
    <div>
      {more ? (
        <Card className="px-6 py-3 w-full cursor-pointer ring-1 ring-gray-100 hover:shadow-xl shadow-lg">
          <CardBody className="overflow-visible py-2 justify-center items-center">
            <Link color="primary" variant="ghost">
              <Dropdown>
                <DropdownTrigger>
                  <button
                    onClick={clickMoreButton}
                    type="button"
                    className="bg-[#fad9d180] rounded-full p-3 text-primary hover:bg-primary ease-in-out duration-200 hover:text-white"
                  >
                    {startContent}
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" variant="faded">
                  {moreTitles.map((item, i) => (
                    <DropdownItem startContent={moreStartContents[i]} key={i}>
                      <p className="hover:text-[#fd3509] ">{moreTitles[i]}</p>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </Link>
            <h4 className="font-bold text-[1rem] mt-2">{title}</h4>
          </CardBody>
        </Card>
      ) : (
        <Card className="px-6 py-3 w-full cursor-pointer ring-1 ring-gray-100 hover:shadow-xl shadow-lg">
          <CardBody className="overflow-visible py-2 justify-center items-center">
            <Link color="primary" variant="ghost">
              <button className="bg-[#fad9d180] rounded-full p-3 text-primary hover:bg-primary ease-in-out duration-200 hover:text-white">
                {startContent}
              </button>
            </Link>
            <h4 className="font-bold text-[1rem] mt-2">{title}</h4>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default PropertyCard;
