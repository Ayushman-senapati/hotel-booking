import React from 'react'

const Title = ({align,font,subtitle ,title}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align=='left' && "md:items-start md:text-left"} `}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-pf"}`}>
            {title}
      </h1>
      <p className='text-sm  text-gray-500 mt-2 max-174'>{subtitle}</p>
    </div>
  )
}

export default Title
