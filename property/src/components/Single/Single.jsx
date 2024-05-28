import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { LiaBedSolid, LiaCarSideSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import ImageList from "./ImageList";
import Overview from "./Overview";
import SpinnerComp from "../Spinner/SpinnerComp";
import PropertyDetails from "./PropertyDetails";
import { Divider } from "@nextui-org/react";
import AgentCard from "./AgentCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Single = () => {
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(false);
  const { pathname } = useLocation();
  const property_id = pathname.split("/")[2];
  const { user } = useAuth();

  const date = property.createdAt;
  const createdDate = date.split("T")[0];

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        setError(false);
        const response = await axios.get(
          `http://localhost:5000/api/v1/property/get-Property/${property_id}`
        );

        setProperty(response.data.property);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError(true);
      }
    };

    fetchPropertyDetails();
  }, [property_id]);

  if (property === null || !user) {
    <SpinnerComp />;
  } else {
    return (
      <section className="mt-5 px-6 mb-12">
        {error ? (
          <p className="font-semibold text-medium">
            There is something wrong. Please try again later.
          </p>
        ) : (
          <div className="w-full">
            <Breadcrumb
              route={"/"}
              preName={"Home"}
              midName={`${
                property.category === "For rent"
                  ? "Property for rent"
                  : "Property for sale"
              }`}
              midRoute={"/property-for-rent"}
              nowName={property.title}
            />

            <div className="mt-5">
              <h1 className="font-bold text-3xl">{property.title}</h1>
              <p className="mt-2 text-secondary text-lg">
                {property.address.street}, {property.address.city}
              </p>

              <div className="text-center justify-start flex items-center gap-5">
                <p className="flex items-center gap-1 mt-1 text-[#6f6b7e] text-lg font-bold">
                  {property.property.bedrooms}
                  <LiaBedSolid className="text-xl" />
                </p>
                <p className="flex items-center gap-1 mt-1 text-[#6f6b7e] text-lg font-bold">
                  {property.property.bathroom}
                  <PiBathtub className="text-xl" />
                </p>
                <p className="flex items-center gap-1 mt-1 text-[#6f6b7e] text-lg font-bold">
                  {property.property.parking}
                  <LiaCarSideSolid className="text-xl" />
                </p>
                <p className="flex items-center gap-1 mt-1 text-[#6f6b7e] text-lg font-bold">
                  {property.property.area}
                  <p className="font-normal"> sq.m</p>
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="mt-5">
              <ImageList photos={property.photos} />
            </div>

            {/* Overview */}
            <div className="mt-8 grid grid-cols-3 gap-8">
              {/* eft */}
              <div className="col-span-2">
                <Overview property={property} />
                <PropertyDetails property={property} />
                <Divider orientation="horizontal" className="mt-8" />

                <div className="flex items-center gap-6 text-secondary mt-5 text-sm">
                  <div className="flex items-center gap-1">
                    <h6>Published:</h6>
                    <p className="font-bold">{createdDate}</p>
                  </div>
                  {/* <div className="flex items-center gap-1">
                    <h6>Ad number:</h6>
                    <p className="font-bold">681013232</p>
                  </div> */}
                </div>
              </div>

              {/* right */}
              <div className="w-full">
                <AgentCard />
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
};
export default Single;
