import Image from "next/image";
import Link from "next/link";

export const HomeBanner = () => {
  return (
    <section
      id="about-us"
      className="py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row w-full  px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-full lg:max-w-[523px] space-y-3.5 order-1 h-full flex flex-col justify-center">
        <BannerHeader />
        <div className="space-y-3.5 order-3 lg:order-1 hidden lg:block">
          <BannerDescription />
          <BannerButton />
        </div>
      </div>

      {/* Banner image - will appear after header on mobile */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto relative my-6 sm:my-8 lg:my-0 order-2 lg:order-3 flex-shrink-0 lg:flex-1">
        <Image
          src="/assets/banner-image.png"
          alt="banner-image"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-full lg:max-w-[523px] space-y-3.5 order-3 lg:order-1 block lg:hidden">
        <BannerDescription />
        <BannerButton />
      </div>
    </section>
  );
};

const BannerHeader = () => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center lg:text-left leading-tight">
      Navigating the digital landscape for success
    </h1>
  );
};

const BannerDescription = () => {
  return (
    <p className="text-base sm:text-lg md:text-xl mt-4 lg:mt-9 text-center lg:text-left text-gray-700">
      Our digital marketing agency helps businesses grow and succeed online
      through a range of services including SEO, PPC, social media marketing,
      and content creation.
    </p>
  );
};

const BannerButton = () => {
  return (
    <div className="flex justify-center lg:justify-start">
      <Link href="/contact">
        <button className="bg-black text-white font-bold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-full mt-4 sm:mt-6 lg:mt-9 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
          Book a consultation
        </button>
      </Link>
    </div>
  );
};
