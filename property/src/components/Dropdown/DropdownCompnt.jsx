import { NavbarItem } from "@nextui-org/react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  DropdownSection,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DropdownCompnt = ({
  radius,
  buttonVariant,
  endContent,
  buttonTitle,
  variant,
  keyVal,
  description,
  startContent,
  title,
  routes,
}) => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent items-center"
            radius={radius}
            variant={buttonVariant}
            endContent={endContent}
          >
            <h4 className="text-[16px] ml-2 hover:text-[#fd3509] ease-in-out duration-200 font-semibold">
              {buttonTitle}
            </h4>
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        variant={variant}
        aria-label="Dropdown menu with description"
      >
        {title.map((drop, i) => (
          <DropdownSection showDivider key={i}>
            <DropdownItem
              key={keyVal[i]}
              description={description[i]}
              startContent={startContent[i]}
            >
              <Link
                to={routes ? routes[i] : ""}
                className="hover:text-[#fd3509] text-[16px]"
              >
                {title[i]}
              </Link>
            </DropdownItem>
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCompnt;
