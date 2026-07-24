"use client";

import CountUp from "react-countup";
import { useTranslations } from "next-intl";

const stats = [
  {
    num: 1,
    key: "experience",
  },
  {
    num: 180,
    key: "projects",
  },
  {
    num: 10,
    key: "transformation",
  },
  {
    num: 100,
    key: "clients",
  },
];


const Stats = () => {

  const t = useTranslations("stats");


  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">

      <div className="container mx-auto">

        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">

          {stats.map((item, index) => (

            <div
              className="
                flex-1 
                flex gap-4 
                items-center 
                justify-center 
                xl:justify-start 
                xl:ml-10
              "
              key={index}
            >

              <CountUp
                end={item.num}
                duration={10}
                delay={3}
                className="text-4xl lg:text-6xl font-extrabold"
              />


              <p
                className="
                  max-w-[150px]
                  leading-snug
                  text-white/80
                "
              >
                {t(item.key)}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Stats;