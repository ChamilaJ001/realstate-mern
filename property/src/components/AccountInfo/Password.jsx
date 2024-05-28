import Button from "../Button/Button";
import Input from "../Input/Input";

const Password = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold ">Password & Security</h2>
      <p className="mt-5 text-medium text-secondary">
        Manage your password settings and secure your account.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="">
          <Input type={"password"} label={"Current Password"} />
        </div>
        <div className="py-12">
          <p className="text-medium text-primary hover:no-underline underline cursor-pointer">
            Forgot password?
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-4">
        <div className="">
          <Input type={"password"} label={"New Password"} />
        </div>
        <div className="">
          <Input type={"password"} label={"Confirm Password"} />
        </div>
      </div>

      <div className="mt-5">
        <Button text={"Update Password"} px={"px-5"} />
      </div>
    </div>
  );
};

export default Password;
