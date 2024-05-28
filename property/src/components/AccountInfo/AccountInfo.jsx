import Breadcrumb from "../Breadcrumb/Breadcrumb";
import LeftSideBar from "./LeftSideBar";
import Wishlist from "./Wishlist";
import { useState } from "react";
import MyProperties from "./MyProperties";
import Password from "./Password";
import PersonalInfo from "./PersonalInfo";
import { useAuth } from "../../context/AuthContext";
import SpinnerComp from "../Spinner/SpinnerComp";

const AccountInfo = () => {
  const [link, setLink] = useState("personal-info");
  const { user, update } = useAuth();
  if (!user) {
    return <SpinnerComp />;
  } else {
    return (
      <section className="mt-5 px-6 mb-12">
        <Breadcrumb
          route={"/"}
          preName={"Home"}
          midName={"Account"}
          midRoute={"/account"}
          nowName={`Personal Info`}
        />

        <div className="grid grid-cols-3 gap-8 mt-5">
          {/* Left content */}
          <div className="w-full">
            <LeftSideBar setLink={setLink} link={link} user={user} />
          </div>

          {/* Right content */}
          <div className="col-span-2 ">
            {link === "personal-info" ? (
              <PersonalInfo user={user} update={update} />
            ) : (
              ""
            )}
            {link === "password-and-security" ? <Password /> : ""}
            {link === "my-properties" ? <MyProperties /> : ""}
            {link === "wishlist" ? <Wishlist /> : ""}
          </div>
        </div>
      </section>
    );
  }
};

export default AccountInfo;
