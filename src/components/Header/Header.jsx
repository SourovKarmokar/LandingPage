import React from 'react'
// import bannerShape from "../../assets/bannershep.png"

const Header = ({children}) => {
  return (
    <div 
    // className=" bg-no-repeat bg-center " 
    // style={{
    //     backgroundImage:` url(${bannerShape})`
    // }}
    >
      {children}
    </div>
  )
}

export default Header
