import { Card, CardBody } from "@nextui-org/react";

const CardByCity = () => {
  return (
    <Card
      shadow="sm"
      className="w-full mb-10 border-none shadow-md hover:shadow-lg ease-in-out duration-300"
      isPressable
    >
      <CardBody className="overflow-visible p-0">
        <div className="relative ">
          <img
            radius="none"
            alt="Title"
            className={`object-cover h-auto w-full hover:opacity-70 ease-in-out duration-300`}
            src="/img/06.jpg"
          />
          {/* For Future */}
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start">
            <div className="p-4 text-white text-sm text-center">
              Centered Text
            </div>
          </div> */}
        </div>

        <div className="text-center p-5">
          <h3 className="font-semibold text-lg text-[#454056] hover:text-primary ease-in-out duration-300">
            New York
          </h3>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardByCity;
