import { Button } from "@/components/ui/button";
import { BsInfoSquareFill } from 'react-icons/bs'

// components
import  Social  from "@/components/Social";
import  Photo  from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span className="text-xl ">Construction & Global Trade Company</span>
            <h1 className="h1 mb-6">
              It's <br /><span className="text-accent">Azar Bonian Marava</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
             <b>Azar Bonian Marava</b> is a leading company in construction, project management, and international trade, delivering high-quality engineering solutions and export services with a commitment to innovation, precision, and sustainable growth.
</p>
            {/* Button and social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">


              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <BsInfoSquareFill />
              <span>
                Discover Our Story
                </span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-0 mb-8 xl:mb-0"><Photo /></div>
        </div>
      </div>
    </section >
  );
}
