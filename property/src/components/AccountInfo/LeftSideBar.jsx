import { FaStar, FaRegEnvelope } from "react-icons/fa6";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { PiHouse } from "react-icons/pi";
import { HiOutlinePhone } from "react-icons/hi";
import { IoIosHelpCircleOutline, IoIosLogOut } from "react-icons/io";
import { Avatar } from "@nextui-org/react";
import Button from "../Button/Button";
import AccountLinks from "./AccountLinks";

/* eslint-disable react/prop-types */
const LeftSideBar = ({ setLink, link, user }) => {
  return (
    <div className="w-full h-auto p-5 bg-white rounded-lg shadow-xl ring-1 ring-gray-50">
      <div className="flex items-start gap-4">
        <Avatar src="/img/avatar.jpg" size="lg" />

        <div className="">
          <h2 className="font-bold text-lg hover:text-primary ease-out duration-300 cursor-pointer">
            {user.name}
          </h2>
          <div className="flex items-center mt-1 gap-1">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 text-medium" />
              <FaStar className="text-yellow-400 text-medium" />
              <FaStar className="text-yellow-400 text-medium" />
              <FaStar className="text-yellow-400 text-medium" />
              <FaStar className=" text-yellow-400 text-medium" />
            </div>

            <p className="text-[#666276] text-sm">(25 reviews)</p>
          </div>

          <h4 className="text-[#666276] text-medium mt-1">{user.company}</h4>

          <div className="flex items-center gap-2 text-[#666276] text-medium mt-5">
            <HiOutlinePhone />
            <p>{user.phone}</p>
          </div>

          <div className="flex items-center gap-2 text-[#666276] text-medium mt-1">
            <FaRegEnvelope />
            <p>{user.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Button
          text={"Add Property"}
          py={"py-3"}
          px={"px-5"}
          width={"w-full"}
        />
      </div>

      <div className="mt-8">
        <AccountLinks
          icon={[
            <IoPersonOutline key={"a1"} />,
            <CiLock key={"a2"} />,
            <PiHouse key={"a3"} />,
            <IoHeartOutline key={"a4"} />,
            <IoIosHelpCircleOutline key={"a5"} />,
            <IoIosLogOut key={"a6"} />,
          ]}
          text={[
            "Personal Info",
            "Password & Security",
            "My Properties",
            "Wishlist",
            "Help",
            "Sign Out",
          ]}
          route={[
            "personal-info",
            "password-and-security",
            "my-properties",
            "wishlist",
            "help",
          ]}
          setLink={setLink}
          link={link}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
