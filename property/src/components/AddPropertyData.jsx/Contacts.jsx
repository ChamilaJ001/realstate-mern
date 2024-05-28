import { Card, CardBody } from "@nextui-org/react";
import Input from "../Input/Input";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

/* eslint-disable react/prop-types */
const Contacts = ({ user }) => {
  return (
    <Card className="max-w-[800px] rounded-xl p-3 mt-5">
      <CardBody>
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <LiaPhoneVolumeSolid className="text-primary" />
          Contacts
        </h2>

        <div className="flex mt-5 gap-[300px]">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            First name
            <p className="text-red-500 text-lg">*</p>
          </label>
        </div>

        <div className="flex gap-3 items-center justify-start w-full">
          <Input value={user.name} disable={true} />
        </div>

        <div className="flex mt-5 gap-[335px]">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Email
            <p className="text-red-500 text-lg">*</p>
          </label>

          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Phone number
            <p className="text-red-500 text-lg">*</p>
          </label>
        </div>

        <div className="flex gap-3 items-center justify-start w-full">
          <Input value={user.email} type={"email"} disable={true} />

          <Input value={user.phone} disable={true} />
        </div>

        <div className="mt-5">
          <Input
            placeholder={"Enter company name"}
            label={"Company"}
            value={user.company}
            disable={true}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Contacts;
