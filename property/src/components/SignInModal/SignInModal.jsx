import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import Input from "../Input/Input";
import { useState } from "react";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations/signupValidations";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

/* eslint-disable react/prop-types */
const SignInModal = ({ isOpen, onOpen, onOpenChange }) => {
  const auth = useAuth();
  const [signInOrUp, setSignInOrUp] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(data.email, data.password);
      toast.success("Signed In Successfully", { id: "login" });
      // setTimeout(() => {
      //   window.location.href = "/";
      // }, 3000);
    } catch (error) {
      toast.error("Signed In Faild", { id: "login" });
      console.log(error);
    }
  };
  return (
    <>
      <button
        onClick={onOpen}
        href="#"
        className="text-primary flex items-center gap-2"
      >
        <FaRegUser />
        <h4 className="font-semibold">Sign In</h4>
      </button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        size="5xl"
      >
        <ModalContent>
          <>
            <ModalBody className="p-12">
              {signInOrUp ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  {/* Left Content */}
                  <div className="xl:text-start lg:text-start md:text-start text-center">
                    <h2 className="font-bold text-3xl">Hey there!</h2>
                    <h2 className="font-bold text-3xl">Welcome back.</h2>
                    <img
                      src="/img/signin.svg"
                      alt=""
                      className="mt-10 w-auto text-center"
                    />
                    <h6 className="text-gray-600 text-[17px] mt-10">
                      Do not have an account?{" "}
                      <Link
                        className="text-primary underline"
                        onClick={() => setSignInOrUp(false)}
                      >
                        Sign up
                      </Link>
                    </h6>
                  </div>

                  {/* Right Content */}
                  <div>
                    <Link
                      to={""}
                      className="text-center justify-center flex items-center gap-1 text-[#3c76f2] border-1 border-[#3c76f2] py-3 px-5 font-bold rounded-lg hover:bg-[#3c76f2] hover:text-white ease-in-out duration-300"
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
                    {/* <div className="flex items-center justify-center gap-3 mt-10 text-gray-600">
                      Or
                    </div> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-10">
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
                        <p className="text-xs text-red-500">
                          {errors.email?.message}
                        </p>
                        <div className="flex items-center justify-between mt-5">
                          <label htmlFor="password" className="text-md">
                            Password
                          </label>
                          <Link
                            to={""}
                            className="text-primary text-sm underline font-semibold"
                          >
                            Forgot password?
                          </Link>
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
                        <p className="text-xs text-red-500">
                          {errors.password?.message}
                        </p>
                        <button
                          type="submit"
                          className="text-center text-lg justify-center mt-5 w-full text-white font-semibold hover:shadow-sm hover:shadow-primary bg-primary flex items-center p-4 rounded-lg ease-in-out duration-300"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <SignUpModal setSignInOrUp={setSignInOrUp} />
              )}
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
