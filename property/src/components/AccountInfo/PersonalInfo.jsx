import { Divider } from "@nextui-org/react";
import PersonalAccordian from "./PersonalAccordian";
import Input from "../Input/Input";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountSchema } from "../../utils/validations/signupValidations";
import TextArea from "../TextArea/TextArea";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const PersonalInfo = ({ user, update }) => {
  //const { user, update } = useAuth();
  // const [fullNameValue, setFullNameValue] = useState();
  // const [emailValue, setEmailValue] = useState("");
  // const [phoneValue, setPhoneValue] = useState("");
  // const [companyValue, setCompanyValue] = useState("");
  // const [addressValue, setAddressValue] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user.name ? user.name : "",
      email: user.email ? user.email : "",
      avatar: "",
      phone: user.phone ? user.phone : "",
      company: user.company ? user.company : "",
      address: user.address ? user.address : "",
      facebook: user.facebook ? user.facebook : "",
      twitter: user.twitter ? user.twitter : "",
      linkedin: user.linkedin ? user.linkedin : "",
      bio: user.bio ? user.bio : "",
    },
    resolver: yupResolver(accountSchema),
  });

  const onSubmit = async (data) => {
    try {
      toast.loading("Updating", { id: "update" });
      await update(
        user.id,
        data.fullName,
        data.email,
        data.avatar,
        data.phone,
        data.company,
        data.address,
        data.facebook,
        data.twitter,
        data.linkedin,
        data.bio
      );
      toast.success("Update Successfully", { id: "update" });
    } catch (error) {
      toast.error("Update Faild", { id: "update" });
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div className="w-full">
        <h2 className="text-3xl font-bold ">Personal Info</h2>

        <div className="mt-5">
          <label htmlFor="email" className="text-md flex gap-1 items-center">
            Short bio
          </label>

          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                cols="10"
                rows="5"
                placeholder={
                  user.bio
                    ? user.bio
                    : "Write your bio here. It will be display on public profile."
                }
              />
            )}
          />
        </div>

        <div className="mt-5 ring-1 ring-gray-200 rounded-lg px-3">
          <PersonalAccordian
            text={user.name ? user.name : "Ex: Jhone Doe"}
            input={"Full name"}
          >
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  enctype="multipart/form-data"
                  type={"text"}
                  mt={"mt-0"}
                  placeholder={user.name ? user.name : "Enter your name"}
                />
              )}
            />
            {/* <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  value={
                    fullNameValue != ""
                      ? fullNameValue
                      : setFullNameValue("Chamila")
                  }
                  type={"text"}
                  mt={"mt-0"}
                  // onChange={(e) => setFullNameValue(e.target.value)}
                />
              )}
            /> */}
            <p className="text-xs text-red-500">{errors.fullName?.message}</p>
          </PersonalAccordian>
          <Divider orientation="horizontal" className="mt-3" />

          <PersonalAccordian
            text={user.email ? user.email : "Ex: jhone@example.com"}
            input={"Email address"}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={"email"}
                  mt={"mt-0"}
                  placeholder={user.email ? user.email : "Enter your email"}
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.email?.message}</p>
          </PersonalAccordian>
          <Divider orientation="horizontal" className="mt-3" />

          <PersonalAccordian input={"Profile image"}>
            <Controller
              name="avatar"
              control={control}
              render={({ field }) => (
                <Input {...field} type={"file"} mt={"mt-0"} />
              )}
            />
            <p className="text-xs text-red-500">{errors.avatar?.message}</p>
          </PersonalAccordian>
          <Divider orientation="horizontal" className="mt-3" />

          <PersonalAccordian
            text={user.phone ? user.phone : "Ex: 0712345678"}
            input={"Phone Number"}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={"number"}
                  mt={"mt-0"}
                  placeholder={
                    user.phone ? user.phone : "Enter your mobile number"
                  }
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.phone?.message}</p>
          </PersonalAccordian>
          <Divider orientation="horizontal" className="mt-3" />

          <PersonalAccordian
            text={user.company ? user.company : "Ex: Finder Propert Group"}
            input={"Company Name"}
          >
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={"text"}
                  mt={"mt-0"}
                  placeholder={
                    user.company ? user.company : "Enter your company name"
                  }
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.company?.message}</p>
          </PersonalAccordian>
          <Divider orientation="horizontal" className="mt-3" />

          <PersonalAccordian
            text={user.address ? user.address : "Ex: Main Street, Colombo 02"}
            input={"Address"}
          >
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={"text"}
                  mt={"mt-0"}
                  placeholder={
                    user.address ? user.address : "Enter your address"
                  }
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.address?.message}</p>
          </PersonalAccordian>
        </div>

        <div className="mt-8">
          <h4 className="text-[17px] font-bold">Socials</h4>
          <div className="flex items-center gap-3">
            <div className="rounded-full shadow-lg p-2 bg-[#efecf3] text-black">
              <RiFacebookFill />
            </div>
            <Controller
              name="facebook"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={"text"}
                  placeholder={
                    user.facebook
                      ? user.facebook
                      : "Enter your facebook account"
                  }
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.facebook?.message}</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="rounded-full shadow-lg p-2 bg-[#efecf3] text-black">
              <FaLinkedin />
            </div>
            <Controller
              name="linkedin"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={
                    user.linkedin
                      ? user.linkedin
                      : "Enter your linkedin account"
                  }
                  type={"text"}
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.linkedin?.message}</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="rounded-full shadow-lg p-2 bg-[#efecf3] text-black">
              <FaTwitter />
            </div>
            <Controller
              name="twitter"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={
                    user.twitter ? user.twitter : "Enter your twitter account"
                  }
                  type={"text"}
                />
              )}
            />
            <p className="text-xs text-red-500">{errors.twitter?.message}</p>
          </div>
        </div>

        <div className="mt-12">
          <Divider orientation="horizontal" />

          <div className="mt-5">
            <Button text={"Save changes"} type={"submit"} px={"px-5"} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
