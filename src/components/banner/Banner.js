import phone from "../../assets/hero-img/galaxy-z-flip6.png";
export const Banner = () => {
  const bannerData = {
    discount: "30% OFF",
    title: "Fine Picture",
    date: "17 Jan to 29 Jan",
    image: phone,
    title2: "Super 5G Smartphone",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
    bgColor: "#1376f4",
  };

  return (
    <div className="banner-container min-h-[400px] flex justify-center items-center py-12">
      <div className="container p-1">
        <div
          style={{ backgroundColor: bannerData.bgColor }}
          className="banner-grid grid grid-cols-1 md:grid-cols-3 gap-6 text-white rounded-3xl items-center"
        >
          {/* First column */}
          <div className="banner-col p-6 sm:p-8">
            <p className="banner-discount text-sm text-white">
              {bannerData.discount}
            </p>
            <h1 className="banner-title text-4xl uppercase lg:text-7xl font-bold">
              {bannerData.title}
            </h1>
            <p className="banner-date text-sm text-white">{bannerData.date}</p>
          </div>
          {/* Second column */}
          <div className="banner-image-container h-full flex items-center">
            <img
              src={bannerData.image}
              alt="Galaxy Z Flip6"
              className="banner-image scale-120 w-[350px] md:w-[350px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* Third column */}
          <div className="banner-info flex flex-col justify-center gap-4 p-6">
            <p className=" text-white banner-subtitle font-bold text-xl">
              {bannerData.title2}
            </p>
            <p className="text-white banner-main-title text-3xl sm:text-6xl font-bold">
              {bannerData.title3}
            </p>
            <p className="text-white banner-description text-sm tracking-wide leading-5">
              {bannerData.title4}
            </p>
            <div>
              <button
                style={{ color: bannerData.bgColor }}
                className="banner-button bg-white text-brandBlue py-2 px-4 capitalize font-semibold rounded-full"
              >
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
