import { Avatar, Divider } from "@nextui-org/react";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaStar, FaRegEnvelope } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import RequestForm from "./RequestForm";

const AgentCard = () => {
  return (
    <div className="w-full h-auto p-5 bg-white justify-end items-end rounded-md shadow-xl ring-1 ring-gray-50">
      <div className="flex justify-between">
        <Avatar src="/img/avatar.jpg" size="lg" />
        <div className="flex items-center gap-2 text-gray-600">
          <div className="rounded-full p-2 bg-white shadow-md hover:text-white cursor-pointer hover:bg-primary hover:shadow-md hover:shadow-primary ease-in-out duration-300">
            <RiFacebookFill />
          </div>
          <div className="rounded-full p-2 bg-white shadow-md hover:text-white cursor-pointer hover:bg-primary hover:shadow-md hover:shadow-primary ease-in-out duration-300">
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="font-bold text-xl hover:text-primary ease-out duration-300 cursor-pointer">
          Chamila Jayasinghe
        </h2>
        <div className="flex items-center mt-1 gap-1">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 text-medium" />
            <FaStar className="text-yellow-400 text-medium" />
            <FaStar className="text-yellow-400 text-medium" />
            <FaStar className="text-yellow-400 text-medium" />
            <FaStar className="text-yellow-400 text-medium" />
          </div>

          <p className="text-[#666276] text-sm">(25 reviews)</p>
        </div>

        <h4 className="text-[#666276] text-medium mt-1">
          Imperial Property Group Agent
        </h4>

        <div className="mt-5">
          <div className="flex items-center gap-2 text-[#666276] text-medium">
            <HiOutlinePhone />
            <p>(+94)768937746</p>
          </div>

          <div className="flex items-center gap-2 text-[#666276] text-medium mt-1">
            <FaRegEnvelope />
            <p>chamila@imperial.com</p>
          </div>
        </div>
      </div>

      <Divider orientation="horizontal" className="mt-8" />
      <RequestForm />
    </div>
  );
};

export default AgentCard;
