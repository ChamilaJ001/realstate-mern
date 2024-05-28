import { Link } from "react-router-dom";
import { FaGoogle, FaRegCircleCheck } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import Input from "../Input/Input";
import { Checkbox } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validations/signupValidations";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

/* eslint-disable react/prop-types */
const SignUpModal = ({ setSignInOrUp }) => {
  const auth = useAuth();
  const [checkBox, setCheckBox] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      toast.loading("Signing up", { id: "signup" });

      if (!checkBox) {
        toast.error("Please agree with terms and privacy policy.", {
          id: "signup",
        });
      } else {
        await auth?.register(data.fullName, data.email, data.password);
        toast.success("Signup Successfully", { id: "signup" });
        //window.location.href = "/";
      }
    } catch (error) {
      toast.error("Signup Faild", { id: "signup" });
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="md:flex gap-20">
        {/* Left Content */}
        <div className="md:w-full ">
          <h2 className="font-bold text-3xl">Join Finder.</h2>
          <h2 className="font-bold text-3xl">Get premium benefits:</h2>

          <div className="mt-10">
            <div className="flex items-center gap-2">
              <FaRegCircleCheck className="text-primary" />
              <p className="text-gray-600 text-[17px]">
                Add and promote your listings
              </p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <FaRegCircleCheck className="text-primary" />
              <p className="text-gray-600 text-[17px]">
                Easily manage your wishlist
              </p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <FaRegCircleCheck className="text-primary" />
              <p className="text-gray-600 text-[17px]">Leave reviews</p>
            </div>
          </div>

          <img src="/img/signup.svg" alt="" className="mt-10 w-96" />

          <h6 className="text-gray-600 text-[17px] mt-5 text-center">
            Do not have an account?{" "}
            <Link
              className="text-primary underline"
              onClick={() => setSignInOrUp(true)}
            >
              Sign in
            </Link>
          </h6>
        </div>

        {/* Right Content */}
        <div className="md:w-full ">
          <Link
            to={""}
            className="text-center mt-10 justify-center flex items-center gap-1 text-[#3c76f2] border-1 border-[#3c76f2] py-3 px-5 font-bold rounded-lg hover:bg-[#3c76f2] hover:text-white ease-in-out duration-300"
          >
            <FaGoogle />
            Sign in with Google
          </Link>

          <Link
            to={""}
            className="mt-3 text-center justify-center flex items-center gap-1 text-[#3c76f2] border-1 border-[#3c76f2] py-3 px-5 font-bold rounded-lg hover:bg-[#3c76f2] hover:text-white ease-in-out duration-300"
          >
            <RiFacebookFill className="text-xl" />
            Sign in with Facebook
          </Link>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10">
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={"Enter your full name"}
                    label={"Full Name"}
                  />
                )}
              />
              <p className="text-xs text-red-500">{errors.fullName?.message}</p>
            </div>

            <div className="mt-5">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={"Enter your email"}
                    label={"Email address"}
                  />
                )}
              />
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            </div>

            <div className="flex items-center gap-1 mt-5">
              <label htmlFor="password" className="text-md">
                Password
              </label>
              <p className="text-gray-400">min.8 char</p>
            </div>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={"Enter your password"}
                  type={"password"}
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.password?.message}</p>

            <div className="mt-5">
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={"Confirm your password"}
                    type={"password"}
                    label={"Confirm password"}
                  />
                )}
              />
              <p className="text-xs text-red-500">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <div className="flex mt-5 items-center ">
              <Checkbox
                classNames="text-sm"
                onChange={() => setCheckBox(!checkBox)}
              >
                <p className="text-gray-600">
                  By joining, I agree to the{" "}
                  <Link to={""} className="text-primary underline">
                    Terms of use
                  </Link>{" "}
                  and{" "}
                  <Link to={""} className="text-primary underline">
                    Privacy policy
                  </Link>
                </p>
              </Checkbox>
            </div>

            <button
              type="submit"
              className="text-center text-lg justify-center mt-5 w-full text-white font-semibold hover:shadow-sm hover:shadow-primary bg-primary flex items-center p-4 rounded-lg ease-in-out duration-300"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
