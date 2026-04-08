import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full flex justify-center mt-[40px] md:mt-[70px] lg:mt-[100px] px-4 md:px-6 lg:px-0">
      {/* Main Container */}
      <div className="w-full max-w-[1413px] bg-black rounded-[25px] md:rounded-[35px] lg:rounded-[45px] py-[40px] md:py-[60px] lg:py-[80px] px-6 text-center">
        {/* Inner Content */}
        <div className="max-w-[962px] mx-auto">
          {/* Top Text */}
          <p className="font-primary text-[18px] md:text-[22px] lg:text-[28px] font-medium text-white mb-4">
            Join our community
          </p>

          {/* Heading */}
          <h2 className="font-[Tilt_Warp] text-[28px] md:text-[38px] lg:text-[48px] text-white mb-4">
            Subscribe to our{" "}
            <span className="relative inline-block">
              newsletter
              <span className="absolute left-0 bottom-1 w-full h-[4px] md:h-[5px] lg:h-[6px] bg-[#FE552B]"></span>
            </span>
          </h2>

          {/* Description */}
          <p className="font-primary text-[14px] md:text-[16px] lg:text-[18px] text-white/80 leading-normal mb-6 md:mb-8">
            Join our community of fitness enthusiasts and athletes! By
            subscribing to our newsletter, you'll receive expert training tips,
            nutrition guides, exclusive discounts, and the latest news on
            upcoming events and products.
          </p>

          {/* Input + Button */}
          <div className="flex items-center justify-between border-2 border-white rounded-full px-3 md:px-4 py-2 max-w-[95%] md:max-w-[500px] lg:max-w-[600px] mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none text-white w-full px-2 md:px-4 text-[13px] md:text-[15px] lg:text-base"
            />

            <button className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-primary font-medium text-[12px] md:text-[14px] lg:text-base whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;