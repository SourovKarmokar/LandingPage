import React from 'react'
import Container from '../Layout/Container'
import choclate1 from "../../assets/chocolate_1.png"
import choclate2 from "../../assets/chocolate_2.png"
import choclate3 from "../../assets/chocolate_3.png"
import choclate4 from "../../assets/chocolate_4.png"
import choclate5 from "../../assets/chocolate_5.png"
import choclate6 from "../../assets/chocolate_6.png"
import stars from "../../assets/star.png"

const products = [
  { id: 1, img: choclate1, name: "Mint flavor chocolate", price: "₹399.00" },
  { id: 2, img: choclate2, name: "Mint flavor chocolate", price: "₹399.00" },
  { id: 3, img: choclate3, name: "Mint flavor chocolate", price: "₹399.00" },
  { id: 4, img: choclate4, name: "Mint flavor chocolate", price: "₹399.00" },
  { id: 5, img: choclate5, name: "Mint flavor chocolate", price: "₹399.00" },
  { id: 6, img: choclate6, name: "Mint flavor chocolate", price: "₹399.00" },
]

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="bg-black rounded-[30px] md:rounded-[38px] lg:rounded-[45px] p-4 md:p-5 lg:p-[26px] flex flex-col gap-y-4">
      
      {/* Product Image */}
      <div className="rounded-[22px] md:rounded-[28px] lg:rounded-[35px] overflow-hidden h-[220px] md:h-[320px] lg:h-[425px] w-full">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Info */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-y-1">
          <h4 className="font-primary font-medium text-[16px] md:text-[20px] lg:text-[24px] text-white leading-normal">
            {name}
          </h4>
          <div className="flex items-center gap-x-3">
            <p className="font-primary font-medium text-[18px] md:text-[22px] lg:text-[28px] text-white leading-normal">
              {price}
            </p>
            <img src={stars} alt="rating" className="h-[12px] md:h-[14px] lg:h-[15px]" />
          </div>
        </div>

        {/* + Button */}
        <button className="w-[50px] h-[50px] md:w-[62px] md:h-[62px] lg:w-[76px] lg:h-[76px] bg-primary rounded-[12px] lg:rounded-[15px] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity">
          <span className="text-white text-[24px] md:text-[30px] lg:text-[36px] font-light leading-none">+</span>
        </button>
      </div>

    </div>
  )
}

const OurProducts = () => {
  return (
    <div className="pt-[40px] md:pt-[50px] lg:pt-[60px] pb-[80px] md:pb-[120px] lg:pb-[160px]">
      <Container>

        {/* Section Header */}
        <div className="mb-8 md:mb-10 lg:mb-[57px]">
          <h2 className="font-primary font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-normal text-[rgba(0,0,0,0.75)]">
            Our Products
          </h2>
          <p className="font-primary font-medium text-[16px] md:text-[20px] lg:text-[24px] leading-normal text-[rgba(0,0,0,0.75)]">
            Fuel Your Workouts with Protein-Packed Nutrition
          </p>
        </div>

        {/* Product Grid
            mobile : 1 column
            tablet : 2 columns
            desktop: 3 columns (আগের মতো) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[28px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

      </Container>
    </div>
  )
}

export default OurProducts