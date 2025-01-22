/* eslint-disable react/prop-types */

export const Button = ({
  text,
  bgColor,
  textColor,
  handler = () => {
    console.log("Button Clicked");
  },
}) => {
  return (
    <button
      className={` ${bgColor} ${textColor} hover:cursor-pointer hover:scale-105 duration-300 py-1 px-4 rounded-full relative z-10`}
      onClick={handler}
    >
      {text}
    </button>
  );
};
