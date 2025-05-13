import Image from "next/image";

const logos = [
  "/assets/amazon.png",
  "/assets/drill.png",
  "/assets/hupSpot.png",
  "/assets/notion.png",
  "/assets/netflix.png",
  "/assets/zoom.png",
];

export const CompanyLogos = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16">
      <div className="flex items-center gap-4 md:gap-8 justify-center flex-wrap">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-[100px] h-[60px] md:w-[120px] md:h-[70px] lg:w-[140px] lg:h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={logo}
              alt={`Company logo ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
