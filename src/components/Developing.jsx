import React from 'react'
import NavBar from './TestNav'
import MyFooter from './MyFooter'


export default function Developing() {
  return (
    <div path="developing">
      <div className="mb-16">
                <NavBar/>    
            </div>
      <h2 className="md-px-14 px-20 py-16 max-w-screen-2xl mx-auto text-center font-bold text-4xl" >
      このウェブページはまだ開発中です
     </h2>
     <div>
        <MyFooter/>
     </div>
    </div>
  )
}
