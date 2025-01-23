import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Partner } from "../components/partner/Partner";
import { Category2 } from "../components/categories/Category2";
import { Category } from "../components/categories/Category";
import { Banner } from "../components/banner/Banner";
import { Banner2 } from "../components/banner/Banner2";
import { Products } from "../components/products/Products";

export const Shop = () => {
  return (
    <div>
      <Navbar />
      <h1 className="offer">Our Products</h1>
      <p>Shop With Us</p>
      <Category />
      <Category2 />
      <Banner />
      <Products />
      <Banner2 />
      <Partner />
      <Footer />
    </div>
  );
};
