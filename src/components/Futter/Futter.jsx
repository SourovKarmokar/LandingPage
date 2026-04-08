import Container from "../Layout/Container";
import React from "react";

const Futter = () => {
  return (
    <div className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[40px] m-auto">
      <Container>
        <div className="mt-[40px] md:mt-[80px] lg:mt-[140px] mb-[40px] md:mb-[60px] lg:mb-[80px] w-full h-[2px] bg-black/15"></div>

        {/* Top Grid
            mobile : 1 column
            tablet : 2 columns
            desktop: 4 columns (আগের মতো) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {/* About */}
          <div>
            <h3 className="font-primary font-medium text-[18px] md:text-[20px] mb-4">About</h3>

            <p className="max-w-full lg:max-w-[502px] font-primary text-[15px] md:text-[18px] font-normal leading-normal text-black/70 mb-4">
              At MuscleForge, we believe in the power of dedication and hard
              work. Our mission is to provide you with the tools, resources, and
              community you need to build the body of your dreams.
            </p>

            <div className="flex items-center gap-4 font-primary text-[16px] md:text-[18px] text-black/80">
              <span className="cursor-pointer hover:text-primary">Fb</span>
              <span className="cursor-pointer hover:text-primary">In</span>
              <span className="cursor-pointer hover:text-primary">Tw</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-primary font-medium text-[18px] md:text-[20px] mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-[13px] md:text-[14px] text-black/70">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">
                Our gym location
              </li>
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
              <li className="hover:text-primary cursor-pointer">
                Privacy policy
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-primary font-medium text-[18px] md:text-[20px] mb-4">
              Our Service
            </h3>

            <ul className="space-y-2 text-[13px] md:text-[14px] text-black/70">
              <li>Indoor gym</li>
              <li>Outdoor gym</li>
              <li>On ground gym</li>
              <li>Yoga class</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-primary font-medium text-[18px] md:text-[20px] mb-4">
              Contact Info
            </h3>

            <ul className="space-y-2 text-[13px] md:text-[14px] text-black/70">
              <li>Mail: info@example.com</li>
              <li>Call: +91 9876543210</li>
              <li>Location: New York, 235 Lane, 10001</li>
              <li>Time: Workout Hours 5AM - 8PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-[30px] md:mt-[40px] mb-[20px] w-full md:w-[60%] lg:w-[455px] h-[2px] bg-black/15 mx-auto"></div>

        {/* Bottom */}
        <p className="font-primary text-[14px] md:text-[16px] lg:text-[18px] text-black/60 text-center">
          websitename.com ©2024 all right reserve
        </p>
      </Container>
    </div>
  );
};

export default Futter;