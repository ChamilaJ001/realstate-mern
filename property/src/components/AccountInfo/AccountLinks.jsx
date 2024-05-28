//import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AccountLinks = ({ icon, route, text, setLink, link }) => {
  console.log(link);
  return (
    <div className="w-full">
      {text.map((el, i) => (
        <div
          onClick={() => setLink(route[i])}
          key={i}
          className={`flex items-center gap-2 text-[17px] border-b border-t border-gray-100 py-4 px-1 cursor-pointer hover:text-primary ease-in-out duration-300`}
        >
          {icon[i]}
          <p className={``}>{text[i]}</p>
        </div>
      ))}
    </div>
  );
};

export default AccountLinks;
