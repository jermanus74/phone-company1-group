import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";

export const Partner = () => {
  return (
    <div className=" bg-gray-600 py-4 ">
      <div className="partner-wrapper container">
        <div className="partner-grid">
          <img src={brand1} className="partner-logo" alt="Brand 1" />
          <img src={brand2} className="partner-logo" alt="Brand 2" />
          <img src={brand3} className="partner-logo" alt="Brand 3" />
          <img src={brand4} className="partner-logo" alt="Brand 4" />
          <img src={brand5} className="partner-logo" alt="Brand 5" />
        </div>
      </div>
    </div>
  );
};
