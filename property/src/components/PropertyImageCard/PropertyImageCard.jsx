import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
/* eslint-disable react/prop-types */
const PropertyImageCard = ({ image, title, description, btnTitle }) => {
  return (
    <Card className="py-6 px-6 w-full cursor-pointer items-center border-none shadow-none hover:ring-1 ring-gray-50 hover:shadow-xl ease-in-out duration-200">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 text-center">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-[15px] text-gray-500 mt-3">{description}</p>
      </CardBody>
      <Button
        color="primary"
        variant="ghost"
        className="w-auto rounded-md p-5 font-bold text-[16px] border-1 mt-3"
      >
        {btnTitle}
      </Button>
    </Card>
  );
};

export default PropertyImageCard;
