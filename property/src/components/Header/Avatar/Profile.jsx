import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Divider,
} from "@nextui-org/react";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { PiHouse } from "react-icons/pi";
import { IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
    window.location.href = "/";
  };
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="/img/avatar.jpg"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile">
            <Link to={"/account"} className="flex items-start gap-4">
              <Avatar src="/img/avatar.jpg" size="md" />

              <div className="">
                <h2 className="font-bold text-medium hover:text-primary ease-out duration-300 cursor-pointer">
                  {user ? user.name : "Test"}
                </h2>
                <div className="flex items-center mt-1 gap-1">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className="text-yellow-400 text-sm" />
                    <FaStar className=" text-yellow-400 text-sm" />
                  </div>

                  <p className="text-[#666276] text-xs">(25 reviews)</p>
                </div>

                <h4 className="text-[#666276] text-sm mt-1">{user?.company}</h4>
              </div>
            </Link>
          </DropdownItem>
          <DropdownItem key="settings">
            <Divider />
          </DropdownItem>
          <DropdownItem key="team_settings">
            <Link className="flex gap-1 hover:text-primary items-center text-gray-700">
              <IoPersonOutline key={"a1"} />
              Personal Info
            </Link>
          </DropdownItem>
          <DropdownItem key="analytics">
            <Link className="flex gap-1 hover:text-primary items-center text-gray-700">
              <CiLock key={"a2"} /> Password & Security
            </Link>
          </DropdownItem>
          <DropdownItem key="system">
            <Link className="flex gap-1 hover:text-primary items-center text-gray-700">
              <PiHouse key={"a3"} /> My Properties
            </Link>
          </DropdownItem>
          <DropdownItem key="configurations">
            <Link className="flex gap-1 hover:text-primary items-center text-gray-700">
              <IoHeartOutline key={"a4"} /> Wishlist
            </Link>
          </DropdownItem>
          <DropdownItem key="settings">
            <Divider />
          </DropdownItem>
          <DropdownItem key="logout">
            <Link className="flex gap-1 hover:text-primary items-center text-gray-700">
              <IoIosHelpCircleOutline key={"a5"} /> Help
            </Link>
          </DropdownItem>
          <DropdownItem key="logout">
            <button
              onClick={logoutHandler}
              className="flex gap-1 hover:text-primary items-center text-gray-700"
            >
              <IoIosLogOut key={"a6"} /> Logout
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Profile;
