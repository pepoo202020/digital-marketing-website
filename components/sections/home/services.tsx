"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IServiceData {
  bg: "gray" | "green" | "black";
  titles: string[];
  image: string;
}

const servicesData: IServiceData[] = [
  {
    bg: "gray",
    titles: ["SEO", "Digital Marketing"],
    image: "/assets/search-engine-image.png",
  },
  {
    bg: "green",
    titles: ["Pay-per-click", "advertising"],
    image: "/assets/pay-per-click-advertising-image.png",
  },
  {
    bg: "black",
    titles: ["Social Media", "Marketing"],
    image: "/assets/social-media-marketing-image.png",
  },
  {
    bg: "gray",
    titles: ["Email", "Marketing"],
    image: "/assets/email-marketing-image.png",
  },
  {
    bg: "green",
    titles: ["Content", "Creation"],
    image: "/assets/content-creation-image.png",
  },
  {
    bg: "black",
    titles: ["Analytics and ", "Tracking"],
    image: "/assets/analytics-and-tracking-image.png",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-10 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:justify-start">
        <div className="px-3 py-1 h-fit bg-[#B9FF66] text-3xl md:text-4xl lg:text-5xl font-bold">
          Services
        </div>
        <p className="max-w-[580px] text-lg text-center lg:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            bg={service.bg}
            titles={service.titles}
            src={service.image}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({
  bg,
  titles,
  src,
}: {
  bg: "gray" | "green" | "black";
  titles: string[];
  src: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-auto md:h-[310px] shadow-2xl rounded-2xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between border-2 transition-all duration-300 ${
        bg === "gray"
          ? "bg-[#F3F3F3]"
          : bg === "green"
          ? "bg-[#B9FF66]"
          : "bg-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start h-full justify-between py-5 w-full md:w-auto">
        <div
          className={`text-2xl md:text-3xl font-semibold text-black mb-6 md:mb-0`}
        >
          {titles.map((title, index) => (
            <h2
              key={index}
              className={`${
                bg === "gray"
                  ? " bg-[#B9FF66]"
                  : bg === "green"
                  ? " bg-[#F3F3F3]"
                  : " bg-[#F3F3F3]"
              } w-fit px-2 mb-1`}
            >
              {title}
            </h2>
          ))}
        </div>
        <button className="flex items-center gap-4 mt-4 md:mt-0 group">
          <span
            className={`${
              bg === "gray"
                ? "bg-black"
                : bg === "green"
                ? "bg-black"
                : "bg-white"
            } rounded-full flex items-center justify-center p-2 transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            <ArrowUpRight
              size={30}
              className={`${
                bg === "gray"
                  ? "text-[#B9FF66]"
                  : bg === "green"
                  ? "text-[#B9FF66]"
                  : "text-black"
              }`}
            />
          </span>
          <h3
            className={`text-xl md:text-2xl font-semibold ${
              bg === "gray"
                ? "text-black"
                : bg === "green"
                ? "text-black"
                : "text-white"
            }`}
          >
            Learn More
          </h3>
        </button>
      </div>
      <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-center">
        <Image
          src={src}
          alt={`${titles.join(" ")} service`}
          width={210}
          height={170}
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};
