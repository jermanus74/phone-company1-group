import {
  FaCarSide,
  FaCheckCircle,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

export const Services = () => {
  const serviceData = [
    {
      id: 1,
      icon: (
        <FaCarSide
          className="text-4xl md:text-5x
             text-primary"
        />
      ),
      title: "Free Shipping",
      description: "For january orders",
    },
    {
      id: 2,
      icon: (
        <FaCheckCircle
          className="text-4xl md:text-5x
             text-primary"
        />
      ),
      title: "Assured Quality",
      description: "30 Days Money Back",
    },
    {
      id: 3,
      icon: (
        <FaWallet
          className="text-4xl md:text-5x
             text-primary"
        />
      ),
      title: "Advanced feature",
      description: "All Payment Secure",
    },
    {
      id: 4,
      icon: (
        <FaHeadphonesAlt
          className="text-4xl md:text-5x
             text-primary"
        />
      ),
      title: "Online Support ",
      description: "Technical Support 24/7",
    },
  ];
  return (
    <div className="container my-6 md:my-8">
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4
      gap-y-8"
      >
        {serviceData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-start sm:flex-row gap-4"
          >
            {data.icon}
            <div>
              <h1 className="lg:text-xl font-bold">{data.title}</h1>
              <h1 className="text-sm text-gray-400">{data.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
