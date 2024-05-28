import { Link } from "react-router-dom";
import BasicInfo from "./BasicInfo";
import { Breadcrumbs, BreadcrumbItem, Progress } from "@nextui-org/react";
import Location from "./Location";
import PropertyDetails from "./PropertyDetails";
import Price from "./Price";
import Photos from "./Photos";
import Contacts from "./Contacts";
import Button from "../Button/Button";
import { FaCheck } from "react-icons/fa6";
import SpinnerComp from "../Spinner/SpinnerComp";
import { useAuth } from "../../context/AuthContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { propertySchema } from "../../utils/validations/propertyValidations";
import { useState } from "react";
import toast from "react-hot-toast";
//import { createProperty } from "../../helpers/api-communicator";
import { useProperty } from "../../context/PropertyContext";
// import axios from "axios";

const AddPropertyData = () => {
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState([]);

  const { create } = useProperty();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
      type: "",
      country: "Sri Lanka",
      district: "",
      city: "",
      zip: "",
      street: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      parking: "",
      amenteties: [],
      pets: "",
      description: "",
      currencyType: "",
      total: "",
      period: "",
      photos: [],
      status: "Active",
    },
    resolver: yupResolver(propertySchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("type", data.type);
    formData.append("country", data.country);
    formData.append("district", data.district);
    formData.append("city", data.city);
    formData.append("zip", data.zip);
    formData.append("street", data.street);
    formData.append("area", data.area);
    formData.append("bedrooms", data.bedrooms);
    formData.append("bathrooms", data.bathrooms);
    formData.append("parking", data.parking);
    formData.append("amenteties", data.amenteties);
    formData.append("pets", data.pets);
    formData.append("description", data.description);
    formData.append("currencyType", data.currencyType);
    formData.append("total", data.total);
    formData.append("period", data.period);
    formData.append("user_id", user ? user.id : "");
    formData.append("status", data.status);
    for (let i = 0; i < data.photos.length; i++) {
      formData.append("photos", data.photos[i]);
    }
    try {
      toast.loading("Saving", { id: "save" });
      await create(formData);
      toast.success("Created Successfully", { id: "save" });
    } catch (error) {
      toast.error("Created Faild", { id: "save" });
      console.log(error);
    }
  };

  if (!user) {
    return <SpinnerComp />;
  } else {
    return (
      <section className="px-7 mt-10">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link
              to={"/"}
              className="font-semibold hover:text-black ease-in-out duration-300"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <p className="text-primary text-sm">Add Property</p>
          </BreadcrumbItem>
        </Breadcrumbs>

        <h1 className="mt-5 font-bold text-[34px]">Add property</h1>

        <div className="grid grid-cols-3 gap-16 w-full mt-5">
          {/* Left */}
          <div className="w-full col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <BasicInfo
                Controller={Controller}
                control={control}
                errors={errors}
              />
              <Location
                Controller={Controller}
                control={control}
                errors={errors}
              />
              <PropertyDetails
                Controller={Controller}
                control={control}
                errors={errors}
              />
              <Price
                Controller={Controller}
                control={control}
                errors={errors}
              />
              <Photos
                errors={errors}
                register={register}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
              <Contacts user={user} />

              <div className="mt-8 mb-20 flex justify-between">
                <Button text={"Save and continue"} py={"py-3"} px={"px-5"} />
              </div>
            </form>
          </div>

          {/* Right */}
          <div className="w-full">
            <div className="fixed ">
              <h3 className="text-lg font-bold">65% content filled</h3>
              <Progress
                size="sm"
                aria-label="Loading..."
                value={60}
                className="mt-1"
              />

              <div className="mt-2 flex items-center gap-2">
                <FaCheck className="text-primary" />
                <p className="text-medium text-secondary">Basic Info</p>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <FaCheck className="text-primary" />
                <p className="text-medium text-secondary">Location</p>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <FaCheck className="text-primary" />
                <p className="text-medium text-secondary">Property Details</p>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <FaCheck className="text-primary" />
                <p className="text-medium text-secondary">Price</p>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <FaCheck className="text-secondary" />
                <p className="text-medium text-secondary">Photos</p>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <FaCheck className="text-secondary" />
                <p className="text-medium text-secondary">Contacts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default AddPropertyData;
