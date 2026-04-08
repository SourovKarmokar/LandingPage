import React from 'react'
import Container from '../Layout/Container'
import client_1 from "../../assets/client_2.png"
import client_2 from "../../assets/client_2.png"
import client_3 from "../../assets/client_3.png"
import client_4 from "../../assets/client_4.png"
import client_5 from "../../assets/client_5.png"
import client_6 from "../../assets/client_6.png"
import star from "../../assets/star.png"

const testimonialsData = [
  {
    id: 1,
    title: "The Best Training Program!",
    review: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    image: client_1,
  },
  {
    id: 2,
    title: "The Best Training Program!",
    review: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    image: client_2,
  },
  {
    id: 3,
    title: "The Best Training Program!",
    review: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    image: client_3,
  },
  {
    id: 4,
    title: "The Best Training Program!",
    review: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    image: client_4,
  },
  {
    id: 5,
    title: "The Best Training Program!",
    review: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    image: client_5,
  },
  {
    id: 6,
    title: "The Best Training Program!",
    review: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
    name: "Stive Meloni",
    role: "Ceo Of Miko",
    rating: 4.5,
    image: client_6,
  },
]

const StarRating = () => {
  return (
    <div className="flex items-center gap-x-1">
      <img src={star} alt="" />
    </div>
  )
}

const TestimonialCard = ({ title, review, name, role, rating, image }) => {
  return (
    <div className="bg-black rounded-[30px] md:rounded-[38px] lg:rounded-[45px] p-4 md:p-5 lg:p-[26px] flex flex-col justify-between gap-y-4 min-h-[181px]">

      {/* Text Content */}
      <div className="flex flex-col gap-y-2">
        <h3 className="w-full lg:w-[294px] font-primary text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-normal tracking-[0%] text-left text-white">
          {title}
        </h3>
        <p className="w-full lg:w-[397px] font-primary text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-normal tracking-[0%] text-white">
          {review}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-x-3">
        <img
          src={image}
          alt={name}
          className="w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col flex-1">
          <p className="w-full lg:w-[131px] font-primary text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-normal tracking-[0%] text-left text-white">
            {name}
          </p>
          <p className="font-primary font-medium text-[12px] lg:text-[13px] text-[#888] leading-normal">
            {role}
          </p>
        </div>
        <StarRating rating={rating} />
      </div>

    </div>
  )
}

const Client = () => {
  return (
    <div className="pt-[40px] md:pt-[50px] lg:pt-[60px] pb-[80px] md:pb-[120px] lg:pb-[160px]">
      <Container>

        <div>
          {/* Section Header */}
          <div className="mb-8 md:mb-10 lg:mb-[57px]">
            <h2 className="font-primary font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-normal text-[rgba(0,0,0,0.75)]">
              What Our Clients Are Saying
            </h2>
            <p className="font-primary font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal text-[rgba(0,0,0,0.75)]">
              Real Stories, Real Results — Hear From Our Athletes
            </p>
          </div>

          {/* Testimonials Grid
              mobile : 1 column
              tablet : 2 columns
              desktop: 3 columns (আগের মতো) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[28px]">
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Client