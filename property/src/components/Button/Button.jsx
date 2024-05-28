/* eslint-disable react/prop-types */
const Button = ({
  text,
  shadow,
  shadowColor,
  bgColor,
  py,
  px,
  rounded,
  type,
  onClick,
  icon,
  width,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white text-lg font-semibold ${width ? width : ""} ${
        shadow ? shadow : "hover:shadow-md"
      } ${shadowColor ? shadowColor : "hover:shadow-primary"} ${
        bgColor ? bgColor : "bg-primary"
      } ${py ? py : "py-2"} ${px ? px : "px-2"} ${
        rounded ? rounded : "rounded-lg"
      }  ease-in-out duration-300 ${icon ? "flex items-center gap-1" : ""}`}
    >
      {icon ? icon : ""}
      {text}
    </button>
  );
};

export default Button;
