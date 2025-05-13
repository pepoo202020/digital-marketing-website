import { HomeBanner } from "@/components/sections/home/banner";
import { CasesStudies } from "@/components/sections/home/cases-studies";
import { CompanyLogos } from "@/components/sections/home/company-logos";
import { ContactUs } from "@/components/sections/home/contact-us";
import { FreeProposal } from "@/components/sections/home/free-proposal";
import { OurWorkProcess } from "@/components/sections/home/our-work-process";
import { Services } from "@/components/sections/home/services";
import { Team } from "@/components/sections/home/team";

export default function Home() {
  return (
    <div className="flex-1">
      <HomeBanner />
      <CompanyLogos />
      <Services />
      <FreeProposal />
      <CasesStudies />
      <OurWorkProcess />
      <Team />
      <ContactUs />
    </div>
  );
}
