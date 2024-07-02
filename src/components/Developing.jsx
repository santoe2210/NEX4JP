import React from 'react'
import NavBar from './TestNav'
import MyFooter from './MyFooter'
import bg from "../assets/icons/bg1.jpg";


export default function Developing() {
  return (
    <div path="developing">
      {/* <div className="mb-16">
                <NavBar/>    
            </div> */}
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px',
                }}className=" mb-8 flex flex-col justify-center items-center rounded-xl">
                <div>
                    <h1 className='text-6xl font-bold mb-4 text-white leading-snug text-center'>
                        <span className='cursor-pointer hover:text-black '>このウェブページはまだ開発中です</span>   
                    </h1>
                    
                </div>  
            </div>
     {/* <div>
        <MyFooter/>
     </div> */}
    </div>
  )
}
