import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";
import { Partner } from "../components/partner/Partner";
import "./home.css";
import { Category } from "../components/categories/Category";
import { Services } from "../components/services/Services";
import { Blog } from "../components/blog/Blog";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="offer">January Offer</h1>
      <p>Shop Now</p>
      <Category />
      <Services />
      <Blog />
      <Partner />
      <Footer />
    </div>
  );
};
