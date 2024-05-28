import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";
import { RiArrowDropDownLine, RiLockPasswordFill } from "react-icons/ri";
import { BsBuildingFillAdd, BsFillBuildingsFill } from "react-icons/bs";
import {
  IoStorefront,
  IoHeartSharp,
  IoNotificationsCircle,
} from "react-icons/io5";
import { FaClipboardUser, FaGripfire, FaPlus } from "react-icons/fa6";
import { BiSolidBuildings } from "react-icons/bi";
import { MdReviews, MdAccountCircle } from "react-icons/md";
import { FaRegUser, FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";

import DropdownCompnt from "../Dropdown/DropdownCompnt";

import { Link } from "react-router-dom";
import AccordionCompnt from "../Accordion/AccordionCompnt";
import SignInModal from "../SignInModal/SignInModal";
import { useAuth } from "../../context/AuthContext";
import Profile from "./Avatar/Profile";

const MainHeader = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { user } = useAuth();

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0 ";

  return (
    <>
      <Navbar disableAnimation className="justify-center px-20" maxWidth="full">
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link to={"/"}>
              <img src="/img/logo.png" alt="" className="w-36 h-8" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarBrand>
            <Link to={"/"}>
              <img src="/img/logo.png" alt="" className="w-36 h-8" />
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              <h4 className="text-[16px] ml-2 mr-1 font-semibold text-primary">
                Home
              </h4>
            </Link>
          </NavbarItem>

          <DropdownCompnt
            radius="sm"
            buttonVariant="variant"
            endContent={<RiArrowDropDownLine size={20} />}
            buttonTitle="Catalog"
            variant="faded"
            keyVal={["one", "two"]}
            description={[
              "Find properties for rent.",
              "Find properties for sale.",
            ]}
            startContent={[
              <IoStorefront className={iconClasses} key={"one"} />,
              <BsFillBuildingsFill className={iconClasses} key={"two"} />,
            ]}
            title={["Property for Rent", "Property for Sale"]}
            routes={["/property-for-rent"]}
          />

          <DropdownCompnt
            radius="sm"
            buttonVariant="variant"
            endContent={<RiArrowDropDownLine size={20} />}
            buttonTitle="Account"
            variant="faded"
            keyVal={["a1", "a2", "a3", "a4", "a5", "a6"]}
            description={[
              "View my personal information.",
              "Change password.",
              "Customize my properties.",
              "View wishlist.",
              "All reviews.",
              "View notifications.",
            ]}
            startContent={[
              <FaClipboardUser className={iconClasses} key={"a1"} />,
              <RiLockPasswordFill className={iconClasses} key={"a2"} />,
              <BiSolidBuildings className={iconClasses} key={"a3"} />,
              <IoHeartSharp className={iconClasses} key={"a4"} />,
              <MdReviews className={iconClasses} key={"a5"} />,
              <IoNotificationsCircle className={iconClasses} key={"a6"} />,
            ]}
            title={[
              "Personal information",
              "Password & Security",
              "My Properties",
              "Wishlist",
              "Reviews",
              "Notifications",
            ]}
            routes={["/account"]}
          />

          <DropdownCompnt
            radius="sm"
            buttonVariant="variant"
            endContent={<RiArrowDropDownLine size={20} />}
            buttonTitle="Vendor"
            variant="faded"
            keyVal={["a1", "a2"]}
            description={["Add new properties.", "Promot your property."]}
            startContent={[
              <BsBuildingFillAdd className={iconClasses} key={"a1"} />,
              <FaGripfire className={iconClasses} key={"a2"} />,
            ]}
            title={["Add Property", "Property Promotion"]}
          />
        </NavbarContent>

        <NavbarContent justify="end" className="">
          <NavbarItem>
            {!user ? (
              <SignInModal
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
              />
            ) : (
              <Profile />
            )}
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link
              to={"/add-property"}
              className="text-white font-semibold hover:shadow-md hover:shadow-primary bg-primary flex items-center py-2 px-3 rounded-lg ease-in-out duration-300"
            >
              <FaPlus />
              Add Property
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem className="bg-[#ffffff] ml-2 p-4 border border-[#e5e7eb] shadow-md rounded-xl w-auto">
            <Link className=" flex items-center gap-2 text-primary">
              <FaHome className="text-primary text-xl" />
              <h4 className="font-semibold">Home</h4>
            </Link>
          </NavbarMenuItem>

          <AccordionCompnt
            title="Catelog"
            items={["Property for Rent", "Property for Sale"]}
            keyVal={["c1", "c2"]}
            startContent={<GrCatalog className={iconClasses} />}
          />

          <AccordionCompnt
            title="Account"
            keyVal={["a1", "a2", "a3", "a4", "a5", "a6"]}
            items={[
              "Personal information",
              "Password & Security",
              "My Properties",
              "Wishlist",
              "Reviews",
              "Notifications",
            ]}
            startContent={<MdAccountCircle className={iconClasses} />}
          />

          <AccordionCompnt
            title="Vendor"
            items={["Add Property", "Property Promotion"]}
            keyVal={["c1", "c2"]}
            startContent={<FaGripfire className={iconClasses} />}
          />

          <NavbarMenuItem className="bg-[#ffffff] ml-2 p-4 border border-[#e5e7eb] shadow-md rounded-xl w-auto">
            <Link href="#" className=" flex items-center gap-2">
              <FaRegUser className={iconClasses} />
              <h4 className="font-semibold">Sign In</h4>
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
export default MainHeader;
