import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl ">Construction & Global Trade Company</span>
            <h1 className="h1 mb-6">
             It's <br/><span className="text-accent">Azar Bonian Marava</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Azar Bonian Marava is a specialized company in construction, project management, and international trade, delivering high-quality engineering services and export solutions with a focus on precision, innovation, and excellence.
Through global partnerships and sustainable growth, the company aims to become a trusted brand in the construction industry and international markets.
            </p>
            
          </div>
          {/* Photo */}
          <div className="">photo</div>
        </div>
      </div>
    </section>
  );
}
