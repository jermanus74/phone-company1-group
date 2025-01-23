/* eslint-disable react/prop-types */

export const Heading = ({ title, subtitle }) => {
  return (
    <div className="heading-container">
      <h1 className="heading-title dark:text-white">{title}</h1>
      <p className="heading-subtitle dark:text-brandWhite">{subtitle}</p>
    </div>
  );
};
