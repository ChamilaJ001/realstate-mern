import { Card, CardBody, Divider } from "@nextui-org/react";
import { TbCash } from "react-icons/tb";
import { LiaBedSolid, LiaCarSideSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PropertyCard = ({
  id,
  category,
  title,
  street,
  city,
  total,
  bedrooms,
  bathrooms,
  parking,
  currency,
  photos,
}) => {
  const [heartFill, setHeartFill] = useState(false);
  console.log(id);
  return (
    <Card
      shadow="sm"
      className="w-full hover:shadow-lg ease-in-out duration-300"
      isPressable
    >
      <CardBody className="overflow-visible p-0">
        <div className="relative ">
          <img
            alt="Title"
            className={`object-cover h-auto hover:opacity-70 ease-in-out duration-300`}
            src={`http://localhost:5000/public/properties/${
              photos ? photos[0] : ""
            }`}
          />
          <div className="absolute top-0 left-0 p-4 text-white text-sm text-center">
            <h6 className="bg-green-400 py-1 px-3 rounded-md">Verified</h6>
            <h6 className="bg-blue-500 py-1 px-1 rounded-md mt-1 w-12">New</h6>
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
          <p className="uppercase text-[#fd6644] text-tiny font-semibold">
            {category}
          </p>
          <Link
            to={`/properties/${id}`}
            className="font-semibold text-lg text-[#454056] hover:text-primary ease-in-out duration-300"
          >
            {title}
          </Link>
          <p className="text-sm text-[#a29eae] mt-2">{`${street}, ${city}`}</p>
          <h3 className="flex items-center gap-2 mt-2">
            <TbCash className="text-2xl text-gray-400" />
            <p className="text-[#666276] font-semibold text-[16px]">
              {`${currency}.${total}`}
            </p>
          </h3>

          <Divider className="my-4" />

          <div className="text-center justify-center flex items-center gap-5">
            <p className="flex items-center gap-1 mt-2 text-[#6f6b7e] text-lg">
              {bedrooms ? bedrooms : ""}
              <LiaBedSolid className="text-xl" />
            </p>
            <p className="flex items-center gap-1 mt-2 text-[#6f6b7e] text-lg">
              {bathrooms ? bathrooms : ""}
              <PiBathtub className="text-xl" />
            </p>
            <p className="flex items-center gap-1 mt-2 text-[#6f6b7e] text-lg">
              {parking ? parking : ""}
              <LiaCarSideSolid className="text-xl" />
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
