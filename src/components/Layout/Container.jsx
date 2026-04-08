import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='w-full px-4 md:px-10 lg:w-[1700px] lg:px-0 mx-auto'>
      {children}
    </div>
  )
}

export default Container