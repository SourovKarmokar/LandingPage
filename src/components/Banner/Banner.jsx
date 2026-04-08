
import React from "react";
import Container from "../Layout/Container";
import bannerShape from "../../assets/bannershep.png";
import bannerGymImage from "../../assets/bannergymimage.png";
import facebookIcon from "../../assets/facebook-app-symbol.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import linkedinIcon from "../../assets/linkedin.png";
import yogaIcon from "../../assets/yoga.png";
import mapsIcon from "../../assets/maps-and-flags.png";
import vactor from "../../assets/vactor.png";
import poligon from "../../assets/group.png";
import group from "../../assets/group_1.png";

const specialties = [
  { id: 1, icon: yogaIcon, label: "Ground running" },
  { id: 2, icon: yogaIcon, label: "Yoga Assistance" },
  { id: 3, icon: yogaIcon, label: "Personal Trainer" },
];

const socialLinks = [
  { icon: facebookIcon, href: "#", alt: "Facebook" },
  { icon: instagramIcon, href: "#", alt: "Instagram" },
  { icon: twitterIcon, href: "#", alt: "Twitter" },
  { icon: linkedinIcon, href: "#", alt: "LinkedIn" },
];

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[700px] md:min-h-screen">

      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bannerShape})` }}
      />

      {/* Gym Image */}
      <div className="hidden md:block absolute right-0 top-[160px] 
      md:left-[100px] lg:left-[436px] 
      w-[90%] md:w-[75%] lg:w-[65%] h-auto pointer-events-none">
        <img
          src={bannerGymImage}
          alt="gym"
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Polygon */}
      <div className="hidden md:block absolute right-0 top-[200px] 
      md:left-[100px] lg:left-[436px] 
      w-[90%] md:w-[75%] lg:w-[65%] pointer-events-none">
        <img
          src={poligon}
          alt="polygon"
          className="w-full h-full object-contain object-right"
        />
      </div>

      <Container>
        <div className="relative pt-20 md:pt-[120px] lg:pt-[178px] pb-[60px]">

          {/* Left Panel */}
          <div className="relative lg:absolute lg:left-0 lg:top-[178px]">

            {/* Decorative images */}
            <div className="hidden lg:block absolute mt-[320px] top-0 left-0 z-0">
              <img src={vactor} alt="vector" />
            </div>
            <div className="hidden lg:block absolute mt-[350px] top-0 left-0 z-0">
              <img src={group} alt="group"/>
            </div>

            {/* Social */}
            <div className="flex items-center gap-x-4 
            mt-6 md:mt-8 lg:mt-[100px] 
            ml-0 md:ml-2 lg:ml-6">
              <span className="font-secondary text-[18px] md:text-[20px] lg:text-[24px] text-white">
                Follow On:
              </span>
              <div className="flex items-center gap-x-3">
                {socialLinks.map((s) => (
                  <a key={s.alt} href={s.href}>
                    <img
                      src={s.icon}
                      alt={s.alt}
                      className="w-[22px] h-[22px] lg:w-[28px] lg:h-[28px] opacity-75"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Specialty */}
            <div className="relative flex flex-col gap-y-3 mt-6 md:mt-8 lg:mt-[420px]">
              <h1 className="font-[Tilt_Warp] text-[22px] md:text-[28px] lg:text-[35px] text-center text-white">
                OUR SPECIALTY
              </h1>

              {specialties.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-x-4 
                  bg-[rgba(255,255,255,0.15)] 
                  border-2 border-[rgba(255,255,255,0.5)] 
                  rounded-[30px] px-5 py-3 
                  w-full sm:w-[280px] md:w-[300px] lg:w-[344px]"
                >
                  <div className="w-[56px] h-[56px] md:w-[66px] md:h-[66px] lg:w-[76px] lg:h-[76px] 
                  bg-[rgba(255,255,255,0.15)] 
                  border-2 border-[rgba(255,255,255,0.35)] 
                  rounded-[15px] flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-[44px] h-[44px] md:w-[54px] md:h-[54px] lg:w-[62px] lg:h-[62px]"
                    />
                  </div>

                  <p className="font-primary font-bold text-[18px] md:text-[20px] lg:text-[24px] text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Headline */}
          <div className="relative 
          ml-0 mt-8 
          md:ml-[120px] md:mt-[200px] 
          lg:ml-[582px] lg:mt-[460px] 
          text-center md:text-left">

            {/* Ghost */}
            <h1 className="font-secondary text-[36px] sm:text-[44px] md:text-[90px] lg:text-[180px] 
            leading-[0.9] text-white/15 absolute inset-0 select-none">
              POWER YOUR
              <br />
              <span className="text-[40px] sm:text-[50px] md:text-[100px] lg:text-[200px]">
                PONTETIALE
              </span>
            </h1>

            {/* Main */}
            <h1 className="font-secondary text-[36px] sm:text-[44px] md:text-[90px] lg:text-[180px] 
            leading-[0.9] text-white relative">
              POWER YOUR
              <br />
              <span className="text-[40px] sm:text-[50px] md:text-[100px] lg:text-[200px]">
                PONTETIALE
              </span>
            </h1>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mt-8 
          ml-0 md:ml-[120px] lg:ml-[610px] 
          justify-center md:justify-start">

            <a
              href="#"
              className="flex items-center gap-x-4 
              text-[18px] md:text-[24px] lg:text-[32px] 
              text-white uppercase 
              px-5 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 
              bg-[rgba(255,255,255,0.1)] 
              border-2 border-white rounded-[18px]"
            >
              Shop Now <span>→</span>
            </a>

            <a
              href="#"
              className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] 
              flex items-center justify-center 
              bg-[rgba(255,255,255,0.1)] 
              border-2 border-white rounded-[18px]"
            >
              <img
                src={mapsIcon}
                alt="location"
                className="w-[26px] h-[26px] md:w-[30px] md:h-[30px] lg:w-[36px] lg:h-[36px]"
              />
            </a>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;

