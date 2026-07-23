"use client";

import CountUp, { useCountUp } from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 180,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Money transformation ",
  },
  {
    num: 100,
    text: "Client Testimonials",
  },
];

const Stats = () => {
  return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="contianer mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
          return (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start xl:ml-10" key={index}>
              <CountUp
                end={item.num}
                duration={10}
                delay={3}
                className="text-4xl lg:text-6xl font-extrabold"
              />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>;
};

export default Stats;
