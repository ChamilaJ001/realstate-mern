/* eslint-disable react/prop-types */
const ImageList = ({ photos }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {/* left */}
        <div className=" col-span-2">
          <img
            src={`http://localhost:5000/public/properties/${
              photos ? photos[0] : ""
            }`}
            alt=""
            className="rounded-xl"
          />
        </div>

        {/* right */}
        <div className="mb-3">
          <img
            src={`http://localhost:5000/public/properties/${
              photos ? photos[1] : ""
            }`}
            alt=""
            className="rounded-xl"
          />
          <img
            src={`http://localhost:5000/public/properties/${
              photos ? photos[2] : ""
            }`}
            alt=""
            className="rounded-xl mt-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <img
          src={`http://localhost:5000/public/properties/${
            photos ? photos[3] : ""
          }`}
          alt=""
          className="rounded-xl"
        />
        <img
          src={`http://localhost:5000/public/properties/${
            photos ? photos[4] : ""
          }`}
          alt=""
          className="rounded-xl"
        />
        <img src="/img/05.jpg" alt="" className="rounded-xl" />
        <img src="/img/06.jpg" alt="" className="rounded-xl" />
        <img src="/img/07.jpg" alt="" className="rounded-xl" />
      </div>
    </div>
  );
};

export default ImageList;
