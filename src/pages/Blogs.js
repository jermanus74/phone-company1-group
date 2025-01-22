import { Navbar } from "../components/navbar/Navbar";
import { Partner } from "./../components/partner/Partner";
import { Footer } from "./../components/Footer/Footer";
import { Banner2 } from "../components/banner/Banner2";
import { Blog } from "../components/blog/Blog";
import { Heading } from "../components/shared/Heading";
import image1 from "../assets/sam.jpg";
import image2 from "../assets/sam2.jpeg";
import image3 from "../assets/images.jpeg";
import { useEffect } from "react";
import { useState } from "react";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/BlogData")
      .then((response) => response.json())
      .then((data) => {
        // Add img paths to the data
        const updatedBlog = data.map((BlogData, index) => {
          const images = [image1, image2, image3, image3];
          return {
            ...BlogData,
            img: images[index % images.length],
          };
        });

        setBlogs(updatedBlog);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);
  return (
    <div>
      <Navbar />
      <Blog />
      <Banner2 />

      <div className="blog">
        <Heading title="Recent Blogs" subtitle={"View Recent News"} />
        <div className="details">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog_item">
              <div className="image_wrapper">
                <img src={blog.img} alt={blog.title} className="Picture_blog" />
                <div className="overlay">
                  <h3>{blog.name}</h3>
                  <p>{blog.position}</p>
                </div>
              </div>
              <h3>{blog.title}</h3>
              <p className="blog_details">{blog.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <Partner />
      <Footer />
    </div>
  );
};
