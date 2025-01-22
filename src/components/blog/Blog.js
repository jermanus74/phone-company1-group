/* eslint-disable react/jsx-key */
import React from "react";
import { Heading } from "../shared/Heading";
import image1 from "../../assets/blog/blog1.webp";
import image2 from "../../assets/blog/blog2.jpeg";
import image3 from "../../assets/blog/blog3.jpeg";
import image4 from "../../assets/blog/blog4.jpeg";

export const Blog = () => {
  const BlogData = [
    {
      title: "How to Choose perfect Smartphone",
      published: "17 Jan 2022",
      image: image1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
    },
    {
      title: "Supere Speed 5G Network Smartphone",
      published: "17 Jan 2023",
      image: image2,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
    },
    {
      title: "Easy With Galaxy Ai",
      published: "17 April 2023",
      image: image3,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
    },
    {
      title: "Live Easy With Advanced Technology",
      published: "17 April 2024",
      image: image4,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dignissimos.",
    },
  ];
  return (
    <div className="py-12 ">
      <div className="container">
        {/* header */}
        <Heading title="Recent News" subtitle={"Explore Our Blog"} />
        {/* blog */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-4 gap-6 gap-y-8 sm:gap-4 md:gap7 "
        >
          {BlogData.map((data) => (
            <div
              className="bg-white dark:bg-gray-900 dark:text-white p-3 rounded-md"
              key={data.title}
            >
              {/* img */}
              <div className="overflow-hidden rounded-2x mb-2">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-fullh-[220px] object-cover
                rounded-2x hover:scale-105 transition duration-500 "
                />
              </div>
              {/* content */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className=" font-bold line-clamp-1">{data.title}</p>
                <p
                  className=" line-clamp-2 text-sm text-gray-600
                dark:text-gray-400"
                >
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
