"use client";
import { useState } from "react";

const ourWorkProcessData = [
  {
    id: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    description:
      "Our team will conduct thorough research on your industry, competitors, and target audience. Based on this research, we will develop a customized digital marketing strategy that aligns with your business goals and objectives.",
  },
  {
    id: "03",
    title: "Implementation",
    description:
      "Once the strategy is approved, our team will implement the various components of the digital marketing campaign. This includes setting up accounts, creating content, designing ads, and configuring tracking tools.",
  },
  {
    id: "04",
    title: "Reporting and Communication",
    description:
      "We believe in transparent communication. You will receive regular reports on the performance of your digital marketing campaigns, including key metrics and insights. Our team will also be available to answer any questions you may have.",
  },
  {
    id: "05",
    title: "Continual Improvement",
    description:
      "Digital marketing is an ongoing process. We continuously monitor and analyze the performance of your campaigns and make data-driven adjustments to improve results over time.",
  },
];

export const OurWorkProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="my-10 px-4 md:px-8 lg:px-16 w-full  mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-start items-center lg:items-start gap-6 md:gap-10 mb-8 md:mb-10">
        <div className="flex flex-col justify-start items-start">
          <div className="px-3 py-1 rounded-[7px] bg-[#b9ff66]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black">
              Our Working Process
            </h2>
          </div>
        </div>
        <p className="max-w-full md:max-w-[292px] text-base md:text-lg text-center lg:text-left text-black">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-4 md:gap-6 w-full">
        {ourWorkProcessData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-start w-full relative overflow-hidden rounded-2xl md:rounded-[45px] border border-[#191a23] transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#b9ff66]"
                : "bg-[#F3F3F3] hover:bg-gray-200"
            }`}
            style={{ boxShadow: "0px 5px 0px 0 #191a23" }}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center w-full p-4 md:p-6 lg:px-[60px] lg:py-[41px] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-[25px]">
                <p className="text-3xl md:text-4xl lg:text-6xl font-medium text-black">
                  {item.id}
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-black max-w-full md:max-w-[612px]">
                  {item.title}
                </p>
              </div>
              <div
                className={`flex-shrink-0 w-10 h-10 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center bg-[#F3F3F3] border border-[#191A23] transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? (
                  <div className="w-5 h-0.5 bg-black"></div>
                ) : (
                  <div className="relative">
                    <div className="w-5 h-0.5 bg-black"></div>
                    <div className="w-5 h-0.5 bg-black absolute top-0 transform rotate-90"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div
              className={`w-full h-px bg-black ${
                activeIndex !== index && "hidden"
              }`}
            ></div>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-300 w-full ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-4 md:p-6 lg:px-[60px] lg:pb-[41px] text-base md:text-lg text-left text-black">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
