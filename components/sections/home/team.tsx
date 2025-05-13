"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const teamData = [
  {
    image: "/assets/john-smith.png",
    linkedin: "#",
    name: "John Smith",
    major: "CEO and Founder",
    p: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: "/assets/jane-doe.png",
    linkedin: "#",
    name: "Jane Doe",
    major: "Director of Operations",
    p: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: "/assets/michael-brown.png",
    linkedin: "#",
    name: "Michael Brown",
    major: "Senior SEO Specialist",
    p: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: "/assets/emily-johnson.png",
    linkedin: "#",
    name: "Emily Johnson",
    major: "PPC Manager",
    p: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: "/assets/brian-williams.png",
    linkedin: "#",
    name: "Brian Williams",
    major: "Social Media Specialist",
    p: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    image: "/assets/sarah-kim.png",
    linkedin: "#",
    name: "Sarah Kim",
    major: "Content Creator",
    p: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 space-y-10 w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center lg:justify-start">
        <div className="px-3 py-1 h-fit bg-[#B9FF66] text-3xl md:text-4xl lg:text-5xl font-bold">
          Team
        </div>
        <p className="max-w-[473px] text-base md:text-lg text-center lg:text-left">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {teamData.map((item, index) => (
          <div
            className="flex flex-col justify-start items-start h-auto w-full overflow-hidden gap-2.5 px-4 sm:px-6 md:px-[35px] py-6 md:py-10 rounded-2xl md:rounded-[45px] bg-white border border-[#191a23] transition-transform duration-300 hover:translate-y-[-5px]"
            style={{ boxShadow: "0px 5px 0px 0 #191a23" }}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col justify-start items-start w-full relative gap-7">
              <div className="flex justify-between items-start w-full">
                <div className="flex items-end gap-4">
                  <div className="relative w-[100px] h-[100px]">
                    {/* Star-shaped background */}
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 99 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-0 top-0 z-0"
                    >
                      <path
                        d="M84.631 48.9117C117.473 86.3213 87.1455 116.649 49.7359 83.8068C12.3263 116.649 -18.0016 86.3213 14.8408 48.9117C-18.0016 11.5021 12.3263 -18.8258 49.7359 14.0166C87.1455 -18.8258 117.473 11.5021 84.631 48.9117Z"
                        fill="#231F20"
                      />
                    </svg>

                    {/* Image with proper positioning */}
                    <div className="w-[100px] h-[100px] relative overflow-hidden z-10">
                      <Image
                        src={item.image}
                        alt={`${item.name} profile picture`}
                        width={100}
                        height={100}
                        className="object-cover object-center scale-[0.9]"
                        style={{
                          clipPath: "url(#starMask)",
                        }}
                      />
                    </div>

                    {/* SVG Clip Path Definition */}
                    <svg width="0" height="0" className="absolute">
                      <defs>
                        <clipPath
                          id="starMask"
                          clipPathUnits="objectBoundingBox"
                        >
                          <path d="M0.855 0.499C1.187 0.881 0.88 1.19 0.502 0.855C0.124 1.19 -0.182 0.881 0.15 0.499C-0.182 0.117 0.124 -0.192 0.502 0.143C0.88 -0.192 1.187 0.117 0.855 0.499Z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-lg md:text-xl font-medium text-black">
                      {item.name}
                    </p>
                    <p className="text-base md:text-lg text-black">
                      {item.major}
                    </p>
                  </div>
                </div>

                <Link
                  href={item.linkedin}
                  className="flex-shrink-0 w-[34px] h-[34px] transition-transform duration-300 hover:scale-110"
                  aria-label={`${item.name}'s LinkedIn profile`}
                >
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[34px] h-[34px] ${
                      hoveredIndex === index ? "animate-pulse" : ""
                    }`}
                  >
                    <circle cx={17} cy={17} r={17} fill="black" />
                    <path
                      d="M9.31776 25H12.8131V13.6844H9.31776V25Z"
                      fill="#B9FF66"
                    />
                    <path
                      d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                      fill="#B9FF66"
                    />
                    <path
                      d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                      fill="#B9FF66"
                    />
                  </svg>
                </Link>
              </div>

              <div className="w-full h-px bg-black"></div>

              <p className="w-full text-base md:text-lg text-black">{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
