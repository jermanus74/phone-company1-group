import { Heading } from "../shared/Heading";
import { ProductCard } from "./ProductCard";
import Image1 from "../../assets/hero-img/z-flip.png";
import Image2 from "../../assets/hero-img/img3.avif";
import Image3 from "../../assets/hero-img/galaxy-z-flip6.png";
import { useEffect, useState } from "react";

export const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // Fetching the JSON data
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        // Map through the data to dynamically update the images
        const updatedProducts = data.map((product, index) => {
          const images = [Image1, Image2, Image3, Image3];
          return {
            ...product,
            image: images[index % images.length], // Assign image based on index
          };
        });
        setProductsData(updatedProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <div className="container">
        {/* header section */}
        <Heading title="Our Products" subtitle="VIew our products" />
        {/* card section */}
        <ProductCard data={productsData} />
        <ProductCard data={productsData} />
      </div>
    </div>
  );
};
