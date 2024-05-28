import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { useMemo, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
const MainFilters = ({ startContent, items, setVal }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([setVal]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            variant="variant"
            className="text-medium p-0 w-80 data-[hover=true]:bg-transparent items-center justify-start capitalize text-[#9691a4] hover:text-gray-600"
            startContent={startContent}
          >
            {selectedValue}
            <RiArrowDropDownLine className="text-xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="faded"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {items.map((item, i) => (
            <DropdownItem key={items[i]} value={items[i]}>
              <p className="hover:text-primary">{items[i]}</p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <div className="w-full space-x-4 text-sm text-gray-50 block sm:hidden ">
        <Divider orientation="horizontal" />
      </div>

      <div className="h-5 space-x-4 text-sm text-gray-50 hidden sm:block">
        <Divider orientation="vertical" />
      </div>
    </>
  );
};

export default MainFilters;
