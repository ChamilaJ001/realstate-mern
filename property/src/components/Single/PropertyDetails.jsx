import { FaWifi } from "react-icons/fa";
import { TbParking } from "react-icons/tb";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineSmokeFree } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";

/* eslint-disable react/prop-types */
const PropertyDetails = ({ property }) => {
  return (
    <>
      <div className="mt-8">
        <h2 className="font-bold text-2xl">Property Details</h2>
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2 text-secondary">
          <h5 className="font-bold">Type:</h5>
          <p>{property.type}</p>
        </div>

        <div className="flex items-center gap-1 text-secondary mt-1">
          <h5 className="font-bold">Apartment area:</h5>
          <p>{property.property.area} sq.m</p>
        </div>

        {/* <div className="flex items-center gap-1 text-secondary  mt-1">
          <h5 className="font-bold">Built:</h5>
          <p>{property.property.area}</p>
        </div> */}

        <div className="flex items-center gap-1 text-secondary  mt-1">
          <h5 className="font-bold">Bedrooms:</h5>
          <p>{property.property.bedrooms}</p>
        </div>

        <div className="flex items-center gap-1 text-secondary  mt-1">
          <h5 className="font-bold">Bathrooms:</h5>
          <p>{property.property.bathrooms}</p>
        </div>

        <div className="flex items-center gap-1 text-secondary  mt-1">
          <h5 className="font-bold">Parking places:</h5>
          <p>{property.property.parking}</p>
        </div>

        <div className="flex items-center gap-1 text-secondary  mt-1">
          <h5 className="font-bold">Pets allowed:</h5>
          <p>{property.property.pets}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-2xl">Amenities</h2>
        <div className="grid grid-cols-3 mt-3">
          <div className="text-secondary">
            <p className="flex items-center gap-2">
              <FaWifi />
              WiFi
            </p>
            <p className="flex items-center gap-2 mt-2">
              <TbParking />
              Parking slot
            </p>
            <p className="flex items-center gap-2 mt-2">
              <PiTelevisionLight />
              TV
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MdOutlineSmokeFree />
              No smocking
            </p>
            <p className="flex items-center gap-2 mt-2">
              <IoBedOutline />
              Double bed
            </p>
          </div>

          <div className="text-secondary">
            <p className="flex items-center gap-2">
              <FaWifi />
              WiFi
            </p>
            <p className="flex items-center gap-2 mt-2">
              <TbParking />
              Parking slot
            </p>
            <p className="flex items-center gap-2 mt-2">
              <PiTelevisionLight />
              TV
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MdOutlineSmokeFree />
              No smocking
            </p>
            <p className="flex items-center gap-2 mt-2">
              <IoBedOutline />
              Double bed
            </p>
          </div>

          <div className="text-secondary">
            <p className="flex items-center gap-2">
              <FaWifi />
              WiFi
            </p>
            <p className="flex items-center gap-2 mt-2">
              <TbParking />
              Parking slot
            </p>
            <p className="flex items-center gap-2 mt-2">
              <PiTelevisionLight />
              TV
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MdOutlineSmokeFree />
              No smocking
            </p>
            <p className="flex items-center gap-2 mt-2">
              <IoBedOutline />
              Double bed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
