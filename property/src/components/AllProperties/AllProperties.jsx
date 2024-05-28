import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SelectComp from "../Select/Select";
import Filters from "./Filters";
import PropertyCard from "../PropertyCard/PropertyCard";
import SpinnerComp from "../Spinner/SpinnerComp";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Divider, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const AllProperties = () => {
  const [rentOrSale, setRentOrSale] = useState("For rent");
  const [city, setCity] = useState(null);
  const [type, setType] = useState([]);
  // const [initPrice, setInitPrice] = useState([1000, 100000]);
  // const [price, setPrice] = useState(1000);
  const [bedrooms, setBedrooms] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(null);
  const [error, setError] = useState(false);

  const { user } = useAuth();

  console.log(bedrooms);
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        setError(false);
        const response = await axios.get(
          `http://localhost:5000/api/v1/property/get-property-by-type?category=${rentOrSale}${
            type.length !== 0 ? `&type=${type}` : ""
          }${city !== null ? `&city=${city}` : ""}`
        );

        setFilteredProperties(response.data.properties);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError(true);
      }
    };

    fetchPropertyDetails();
  }, [rentOrSale, city, type]);

  console.log(filteredProperties);

  if (filteredProperties === null || !user) {
    <SpinnerComp />;
  } else {
    return (
      <section className="mt-5">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-none gap-4 ">
          {/* Left */}
          <div className="px-5 py-5 border-r border-t border-1 border-gray-50 shadow-lg hidden lg:block xl:block">
            <Filters
              rentOrSale={rentOrSale}
              setRentOrSale={setRentOrSale}
              setType={setType}
              setCity={setCity}
              setBedrooms={setBedrooms}
            />
          </div>

          {/* Right */}
          <div className="xl:col-span-3 lg:col-span-2 mt-5 px-10 w-full mb-20">
            <Breadcrumb
              route={"/"}
              preName={"Home"}
              nowName={`Property for ${
                rentOrSale === "For rent" ? "rent" : "sale"
              }`}
            />
            <h1 className="mt-5 font-bold xl:text-[34px] lg:text-[34px] md:text-[34px] text-2xl">
              Property for {rentOrSale === "For rent" ? "rent" : "sale"}
            </h1>

            <div className="flex items-center w-full justify-between mt-3">
              <div className="flex items-center gap-2">
                <p className="flex items-center gap-1 xl:text-[15px] lg:text-[15px] md:text-[15px] text-gray-500 text-[13px]">
                  <HiMiniArrowsUpDown />
                  Sort by:
                </p>
                <SelectComp
                  width={"xl:w-48 lg:w-48 md:w-48 w-32"}
                  placeholder={"Select"}
                  options={[
                    "Newest",
                    "Popularity",
                    "Low - High Price",
                    "High - Low Price",
                    "High Rating",
                    "Average Rating",
                  ]}
                />
              </div>

              <h6 className="flex items-center gap-1 text-gray-500 xl:text-[15px] lg:text-[15px] md:text-[15px] text-[13px] ml-1">
                <IoCheckmarkCircleOutline />
                {`${filteredProperties.length} results`}
                {/* 148 results */}
              </h6>
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-none mt-8 gap-6">
              {error === false ? (
                filteredProperties.map((p) => (
                  <PropertyCard
                    key={p.title}
                    id={p._id}
                    category={p.category}
                    title={p.title}
                    street={p.address.street}
                    city={p.address.city}
                    total={p.price.total}
                    currency={p.price.currencyType}
                    bedrooms={p.property.bedrooms}
                    bathrooms={p.property.bathrooms}
                    parking={p.property.parking}
                    photos={p.photos}
                  />
                ))
              ) : (
                <h3>No properties found.</h3>
              )}
            </div>

            <Divider orientation="horizontal" className="mt-8 text-gray-50" />

            <div className="mt-5">
              <Pagination
                loop
                showControls
                color="primary"
                total={5}
                initialPage={1}
                size="sm"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default AllProperties;
