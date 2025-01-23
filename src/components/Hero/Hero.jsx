import Slider from "react-slick";
import Image1 from "../../assets/hero-img/z-flip.png";
import Image2 from "../../assets/hero-img/Image2.png";
import Image3 from "../../assets/hero-img/galaxy-z-flip6.png";
import Image4 from "../../assets/hero-img/img4.webp";
import Image5 from "../../assets/hero-img/A-series.webp";
// import Image6 from "../../assets/hero-img/camera.jpg";
import { Button } from "../shared/Button";

export const Hero = () => {
  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "Ai powered Smartphones",
      title: "Samsung Galaxy Z Flip 3",
      title2: "Z-FLIP",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Get Offer Now",
      title: "Galaxy full set",
      title2: "Goldenset",
    },
    {
      id: 3,
      img: Image3,
      subtitle: "New Arrival",
      title: "Z Flip Series",
      title2: "Z Flip 6",
    },
    {
      id: 4,
      img: Image4,
      subtitle: "New Arrival",
      title: "A-Series",
      title2: "A 35 pro",
    },
    {
      id: 5,
      img: Image5,
      subtitle: "New Arrival",
      title: "S Series",
      title2: "S24 pro",
    },
    {
      id: 6,
      img: Image3,
      subtitle: "New feature",
      title: "Enjoy the pixels",
      title2: "Aicamera",
    },
  ];
  // auto slide library settings
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 1,
  };
  return (
    <div className="container px-2 py-4 h-[90vh] sm:h-[85vh]">
      <div
        className="overflow-hidden rounded-3xl h-full
      hero-bg-color flex justify-center items-center duration-200"
      >
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0 rounded-3xl max-h-max justify-center">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id} className="h-full ">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                  {/* txt content */}
                  <div
                    className="flex flex-col justify-center 
                  gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left
                  order-2 sm:order-1 relative z-[-10]"
                  >
                    <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold">
                      {data.title}
                    </h1>
                    <h1
                      className="text-5xl uppercase text-white
                     dark:text-white/5 sm:text-[80px] md:text-[100px]
                      xl:text-[150px] font-bold relative z-10"
                    >
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop Now"
                        bgColor="bg-brandBlue"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* img content */}
                  <div className="sm-order-1 sm:order-1 pb-10 sm:pb-0">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[350px] h-[300px] sm:h-[400px] 
                    sm:scale-101 lg:scale-110 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
