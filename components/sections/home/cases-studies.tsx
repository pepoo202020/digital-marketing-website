import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const casesStudiesData = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

export const CasesStudies = () => {
  return (
    <section id="uses-cases" className="my-10 px-4 md:px-8 lg:px-16 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-start items-center lg:items-start gap-6 md:gap-10 mb-8 md:mb-10">
        <div className="flex flex-col justify-start items-start">
          <div className="px-3 py-1 rounded-[7px] bg-[#b9ff66]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black">
              Case Studies
            </h2>
          </div>
        </div>
        <p className="max-w-full md:max-w-[580px] text-base text-center lg:text-left md:text-lg text-black">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Case Studies Container */}
      <div className="rounded-2xl md:rounded-[45px] bg-[#191a23] p-6 md:p-10 lg:p-[70px]">
        <div className="flex flex-col md:flex-row justify-around items-start gap-8 md:gap-16">
          {casesStudiesData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-10"
            >
              <div className="flex flex-col justify-start items-start gap-5 max-w-full md:max-w-[286px]">
                <p className="text-base md:text-lg text-white">{item}</p>
                <Link href="/case-studies" className="group">
                  <div className="flex items-center gap-3 md:gap-[15px]">
                    <p className="text-lg md:text-xl text-[#b9ff66]">
                      Learn more
                    </p>
                    <ArrowUpRight className="w-5 h-5 text-[#b9ff66] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
                  </div>
                </Link>
              </div>

              {/* Divider line - only show between items and not after the last item */}
              {index !== casesStudiesData.length - 1 && (
                <div className="w-full h-[1px] md:w-[1px] md:h-auto md:min-h-[186px] bg-white my-6 md:my-0 md:mx-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
