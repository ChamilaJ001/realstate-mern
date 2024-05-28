import { Card, CardBody, Divider } from "@nextui-org/react";
import { TbCash } from "react-icons/tb";
import { LiaBedSolid, LiaCarSideSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Wishlist = () => {
  const [heartFill, setHeartFill] = useState(true);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center ">
        <h2 className="text-3xl font-bold">Wishlist</h2>
        <p className="flex items-center gap-1 text-primary font-bold text-lg cursor-pointer">
          <IoMdClose />
          Clear all
        </p>
      </div>

      <div className="mt-8">
        <Card
          shadow="sm"
          className="w-full shadow-lg ring-1 ring-gray-100"
          isPressable
        >
          <CardBody className="overflow-visible p-0">
            <div className="grid grid-cols-2">
              <div className="relative ">
                <img
                  alt="Title"
                  className={`object-cover h-full w-auto hover:opacity-70 ease-in-out duration-300`}
                  src="/img/06.jpg"
                />
                <div className="absolute top-0 left-0 p-4 text-white text-sm text-center">
                  <h6 className="bg-green-400 py-1 px-3 rounded-md">
                    Verified
                  </h6>
                  <h6 className="bg-blue-500 py-1 px-1 rounded-md mt-1 w-12">
                    New
                  </h6>
                </div>

                <div className="absolute top-0 right-0 p-4">
                  <div className="rounded-full bg-white p-2">
                    {heartFill ? (
                      <IoHeartSharp
                        onClick={() => setHeartFill(false)}
                        className="text-xl text-primary"
                      />
                    ) : (
                      <IoHeartOutline
                        onClick={() => setHeartFill(true)}
                        className="font-bold text-xl text-primary"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="text-start p-5">
                <p className="uppercase text-[#fd6644] text-tiny font-semibold gap-12">
                  For Rent
                </p>
                <Link
                  to={"/single-property"}
                  className="font-semibold text-lg text-[#454056] hover:text-primary ease-in-out duration-300"
                >
                  3-bed Apartment | 67 sq.m
                </Link>
                <p className="text-sm text-[#a29eae] mt-2">
                  3811 7th Street Kandy, CP 11105
                </p>
                <h3 className="flex items-center gap-2 mt-2">
                  <TbCash className="text-2xl text-gray-400" />
                  <p className="text-[#666276] font-semibold text-[16px]">
                    Rs.20000
                  </p>
                </h3>

                <Divider className="my-4" />

                <div className="text-start justify-start flex items-center gap-5">
                  <p className="flex items-center gap-1 text-[#6f6b7e] text-lg">
                    3
                    <LiaBedSolid className="text-xl" />
                  </p>
                  <p className="flex items-center gap-1 text-[#6f6b7e] text-lg">
                    2
                    <PiBathtub className="text-xl" />
                  </p>
                  <p className="flex items-center gap-1 text-[#6f6b7e] text-lg">
                    2
                    <LiaCarSideSolid className="text-xl" />
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Wishlist;
