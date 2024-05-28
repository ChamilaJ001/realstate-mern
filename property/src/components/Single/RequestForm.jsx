import { Checkbox } from "@nextui-org/react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const RequestForm = () => {
  return (
    <div className="mt-5">
      <div>
        <Input placeholder={"Your name"} type={"text"} />
      </div>
      <div className="mt-2">
        <Input placeholder={"Email address"} type={"email"} />
      </div>
      <div className="mt-2">
        <Input placeholder={"Phone number"} type={"text"} />
      </div>
      <div className="mt-2">
        <Input placeholder={"Choose date"} type={"date"} />
      </div>
      <div className="mt-2">
        <textarea
          name="description"
          id="description"
          cols="15"
          rows="3"
          placeholder="Message"
          className="py-[10px] px-3 w-full border-2 border-gray-200 rounded-[0.5rem] mt-2 hover:ring-primary focus:border-[#fd7e14] focus:outline-none text-[17px]"
        ></textarea>

        <div className="flex items-baseline gap-2 mt-3">
          <Checkbox size="sm"></Checkbox>
          <p className="text-medium text-[#666276]">
            Send news, tips and promos from Finder to my email.
          </p>
        </div>

        <div className="mt-5">
          <Button
            text={"Save and continue"}
            py={"py-3"}
            px={"px-5"}
            width={"w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
