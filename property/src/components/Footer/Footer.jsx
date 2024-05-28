import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import {
  FaLinkedin,
  FaTwitter,
  FaRegCalendarAlt,
  FaRegComment,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-none w-full">
        <div className="w-auto">
          <Link to={""}>
            <img src="/img/logo.png" alt="" className="w-36 h-8" />
          </Link>
          <div className="flex items-center gap-1 mt-8 text-gray-600 text-[17px] cursor-pointer hover:text-primary ease-in-out duration-300">
            <FaRegEnvelope />
            <p>info@finder.com</p>
          </div>
          <div className="flex items-center gap-1 mt-1 text-gray-600 text-[17px] cursor-pointer hover:text-primary ease-in-out duration-300">
            <IoPhonePortraitOutline />
            <p>(+94)768937746</p>
          </div>

          <div className="flex items-center gap-2 xl:mt-8 lg:mt-8 md:mt-8 mt-3 text-gray-600 font-bold text-lg ">
            <div className="rounded-full p-2 bg-white hover:text-white cursor-pointer hover:bg-primary hover:shadow-md hover:shadow-primary ease-in-out duration-300">
              <RiFacebookFill />
            </div>
            <div className="rounded-full p-2 bg-white hover:text-white cursor-pointer hover:bg-primary hover:shadow-md hover:shadow-primary ease-in-out duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full p-2 bg-white hover:text-white cursor-pointer hover:bg-primary hover:shadow-md hover:shadow-primary ease-in-out duration-300">
              <FaTwitter />
            </div>
            <div className="rounded-full p-2 bg-white hover:text-white cursor-pointer hover:bg-primary hover:shadow-md hover:shadow-primary ease-in-out duration-300">
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>

        <div className="w-auto xl:mt-0 lg:mt-0 md:mt-0 mt-8">
          <h3 className="font-bold text-xl">Quick Links</h3>
          <div className="mt-4 text-gray-600 text-[17px]">
            <p className="cursor-pointer hover:text-primary ease-in-out duration-300">
              Buy a property
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Sell a property
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Rent a property
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Top offers
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Top cities
            </p>
          </div>
        </div>

        <div className="w-auto xl:mt-0 lg:mt-0 md:mt-0 mt-8">
          <h3 className="font-bold text-xl">About</h3>
          <div className="mt-4 text-gray-600 text-[17px]">
            <p className="cursor-pointer hover:text-primary ease-in-out duration-300">
              About Us
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Our agents
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Help & support
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              Contacts
            </p>
            <p className="mt-1 cursor-pointer hover:text-primary ease-in-out duration-300">
              News
            </p>
          </div>
        </div>

        <div className="w-auto xl:block lg:block hidden">
          <h3 className="font-bold text-xl ">Recent Posts</h3>
          <div className="flex gap-8 w-full">
            <div className="mt-4">
              <Card shadow="sm" isPressable>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="img"
                    className="w-full object-cover h-auto"
                    src="/img/10.jpg"
                  />
                </CardBody>
              </Card>
            </div>

            <div className="mt-4">
              <p className="uppercase text-primary text-tiny">
                Home improvement
              </p>
              <h2 className="font-bold hover:text-primary ease-in-out duration-300 cursor-pointer">
                Your Guide to a Smart Apartment Searching
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Mi justo, varius vitae cursus ipsum sem massa amet pellentesque.
              </p>

              <div className="flex items-center text-gray-600 gap-4 text-tiny mt-3 mb-3">
                <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                  <FaRegCalendarAlt />
                  <p>Dec 04</p>
                </div>

                <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                  <FaRegComment />
                  <p>2 comments</p>
                </div>
              </div>
            </div>
          </div>
          <Divider className="my-4" />

          <div className="flex gap-8">
            <div className="mt-4">
              <Card shadow="sm" isPressable>
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt="img"
                    className="w-full object-cover h-auto"
                    src="/img/11.jpg"
                  />
                </CardBody>
              </Card>
            </div>

            <div className="mt-4">
              <p className="uppercase text-primary text-tiny">Tips & advice</p>
              <h2 className="font-bold hover:text-primary ease-in-out duration-300 cursor-pointer">
                Top 10 Ways to Refresh Your Space
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Volutpat, orci, vitae arcu feugiat vestibulum ultricies
                nisi,aenean eget.
              </p>

              <div className="flex items-center text-gray-600 gap-4 text-tiny mt-3 mb-3">
                <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                  <FaRegCalendarAlt />
                  <p>Nov 23</p>
                </div>

                <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                  <FaRegComment />
                  <p>25 comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=" xl:hidden lg:hidden block mt-8 w-full">
        <h3 className="font-bold text-xl ">Recent Posts</h3>
        <div className="flex gap-8 w-full">
          <div className="mt-4">
            <Card shadow="sm" isPressable>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt="img"
                  className="w-full object-cover h-auto"
                  src="/img/10.jpg"
                />
              </CardBody>
            </Card>
          </div>

          <div className="mt-4">
            <p className="uppercase text-primary text-tiny">Home improvement</p>
            <h2 className="font-bold hover:text-primary ease-in-out duration-300 cursor-pointer">
              Your Guide to a Smart Apartment Searching
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Mi justo, varius vitae cursus ipsum sem massa amet pellentesque.
            </p>

            <div className="flex items-center text-gray-600 gap-4 text-tiny mt-3 mb-3">
              <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                <FaRegCalendarAlt />
                <p>Dec 04</p>
              </div>

              <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                <FaRegComment />
                <p>2 comments</p>
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-4" />

        <div className="flex gap-8">
          <div className="mt-4">
            <Card shadow="sm" isPressable>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt="img"
                  className="w-full object-cover h-auto"
                  src="/img/11.jpg"
                />
              </CardBody>
            </Card>
          </div>

          <div className="mt-4">
            <p className="uppercase text-primary text-tiny">Tips & advice</p>
            <h2 className="font-bold hover:text-primary ease-in-out duration-300 cursor-pointer">
              Top 10 Ways to Refresh Your Space
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Volutpat, orci, vitae arcu feugiat vestibulum ultricies
              nisi,aenean eget.
            </p>

            <div className="flex items-center text-gray-600 gap-4 text-tiny mt-3 mb-3">
              <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                <FaRegCalendarAlt />
                <p>Nov 23</p>
              </div>

              <div className="hover:text-black ease-in-out duration-300 flex items-center gap-1">
                <FaRegComment />
                <p>25 comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
