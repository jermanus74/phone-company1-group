import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/Footer/Footer";
import { Partner } from "../components/partner/Partner";
import "./home.css";
import { Category } from "../components/categories/Category";
import { Services } from "../components/services/Services";
import { Blog } from "../components/blog/Blog";
import { Heading } from "../components/shared/Heading";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Heading title={"January Offer"} subtitle={"Shop Now"} />
      <Category />
      <Services />
      <Blog />
      <Partner />
      <Footer />
    </div>
  );
};
