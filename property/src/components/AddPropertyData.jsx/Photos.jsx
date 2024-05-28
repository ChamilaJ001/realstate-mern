import { Card, CardBody } from "@nextui-org/react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoAlertCircleOutline } from "react-icons/io5";
import { TbCloudUpload } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
//import { useState } from "react";

/* eslint-disable react/prop-types */
const Photos = ({ errors, register, setSelectedImage, selectedImage }) => {
  // const [selectedImage, setSelectedImage] = useState([]);
  const handleChange = (event) => {
    const files = event.target.files;
    const newPreviews = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        newPreviews.push(URL.createObjectURL(file));
      }
    }

    // Append new previews to existing ones (if any)
    const updatedSelectedImage = selectedImage
      ? selectedImage.concat(newPreviews)
      : newPreviews;
    setSelectedImage(updatedSelectedImage);
    // console.log(selectedImage);
  };

  const handleRemove = (index) => {
    const newSelectedImage = [...selectedImage];
    newSelectedImage.splice(index, 1);
    setSelectedImage(newSelectedImage.length > 0 ? newSelectedImage : null);
  };

  return (
    <Card className="max-w-[800px] rounded-xl p-3 mt-5">
      <CardBody>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <HiOutlinePhoto className="text-primary" />
          Photos
        </h2>

        <div className="mt-5 bg-[#ecf1fe] rounded-md py-3 px-4 border-1 border-[#bbcffa] ">
          <div className="flex items-center gap-2 justify-start text-[#0d6efd]">
            <IoAlertCircleOutline className="mt-1" size={18} />
            <p className="text-sm">
              The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
              main picture first.
            </p>
          </div>
        </div>

        {/* <div className="mt-5 w-full text-center py-12">
          <button>ss</button>
          <input type="file" className="w-full text-center" hidden />

        </div> */}

        <label
          id="file-input-label"
          className="cursor-pointer rounded-lg py-12 text-center justify-center border-2 border-dotted mt-5 flex flex-col items-center"
        >
          <input
            type="file"
            name="image"
            style={{
              opacity: "0",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            multiple
            {...register("photos", { required: true })}
            onChange={handleChange}
          />

          <p className="text-center text-lg cursor-pointer text-white font-semibold hover:shadow-md hover:shadow-primary bg-primary flex items-center gap-1 py-2 px-8 rounded-lg ease-in-out duration-300">
            <TbCloudUpload />
            Upload photos
          </p>
          <p className="text-md text-gray-600 mt-3">or drag them in</p>

          {selectedImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {selectedImage.map((preview, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-start rounded-lg shadow-md"
                >
                  <img
                    src={preview}
                    alt={`Selected preview ${index + 1}`}
                    className="h-48 w-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className="absolute top-2 right-2 bg-white text-primary p-1 rounded-full hover:text-white hover:bg-primary ease-in-out duration-300"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              ))}
            </div>
          )}
        </label>
        <p className="text-xs text-red-500">{errors.photos?.message}</p>
      </CardBody>
    </Card>
  );
};

export default Photos;
