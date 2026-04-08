import React from "react";
import Container from "../Layout/Container";
import Man from "../../assets/man.png";

const focusAreas = [
  {
    title: "Strength & Conditioning",
    desc: "Develop knockout power with a mix of strength training and explosive movements.",
  },
  {
    title: "Speed & Agility",
    desc: "Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.",
  },
  {
    title: "Endurance Training",
    desc: "Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.",
  },
];

const whyUs = [
  {
    title: "Expert Coaches",
    desc: "Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.",
  },
  {
    title: "Flexible Programs",
    desc: "Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.",
  },
];

const Champion = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[60px]">
      <Container>
        {/* Section Header */}
        <div className="mb-8 md:mb-[57px]">
          <h2 className="font-primary font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-normal text-[rgba(0,0,0,0.75)]">
            Train Like a Champion
          </h2>
          <p className="font-primary font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal text-[rgba(0,0,0,0.75)]">
            Unleash Your Power with Expert Boxing Training
          </p>
        </div>

        <div className="bg-black rounded-[30px] md:rounded-[38px] lg:rounded-[45px] flex flex-col lg:flex-row items-stretch overflow-hidden">
          {/* Left — Man Image */}
          <div className="w-full h-[320px] md:h-[420px] lg:w-[522px] lg:h-[591px] shrink-0 m-auto">
            <img
              src={Man}
              alt="boxer"
              className="w-full h-full object-cover object-top rounded-[22px]"
            />
          </div>

          {/* Middle — Training Focus Areas */}
          <div className="flex-1 px-6 py-8 md:px-8 md:py-10 lg:px-[40px] lg:py-[68px] border-b md:border-b lg:border-b-0 lg:border-r border-white/20">
            <h3 className="font-primary font-bold text-[20px] md:text-[24px] lg:text-[28px] text-white mb-6 md:mb-8 lg:mb-[60px]">
              Training Focus Areas:
            </h3>
            <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-[40px]">
              {focusAreas.map((item, index) => (
                <div key={index}>
                  <h4 className="font-primary font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.75)] mb-1">
                    {item.title}
                  </h4>
                  <p className="font-primary font-normal text-[15px] md:text-[17px] lg:text-[20px] text-[rgba(255,255,255,0.75)] leading-normal max-w-[380px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Why Train With Us */}
          <div className="flex-1 px-6 py-8 md:px-8 md:py-10 lg:px-[40px] lg:py-[68px]">
            <h3 className="font-primary font-bold text-[20px] md:text-[24px] lg:text-[28px] text-white mb-6 md:mb-8 lg:mb-[60px]">
              Why Train With Us:
            </h3>
            <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-[40px]">
              {whyUs.map((item, index) => (
                <div key={index}>
                  <h4 className="font-primary font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[rgba(255,255,255,0.75)] mb-1">
                    {item.title}
                  </h4>
                  <p className="font-primary font-normal text-[15px] md:text-[17px] lg:text-[20px] text-[rgba(255,255,255,0.75)] leading-normal max-w-[451px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Punch Now Button */}
            <div className="flex items-center gap-x-4 mt-8 md:mt-10 lg:mt-[60px]">
              <button className="bg-primary text-white font-primary font-bold text-[18px] md:text-[22px] lg:text-[28px] px-6 py-3 md:px-8 md:py-4 lg:px-[40px] lg:py-[22px] rounded-[20px] hover:opacity-90 transition-opacity">
                Punch Now
              </button>

              {/* Play circle button */}
              <button className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] lg:w-[86px] lg:h-[86px] rounded-full border-2 border-dashed border-primary flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-primary text-[20px] md:text-[24px] lg:text-[28px] ml-1">
                  ▶
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Champion;
