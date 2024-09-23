import React, {useState} from 'react'

function Navbar() {
  return (
    <div className="h-25 w-full px-4 py-2 font-[Nunito-Montserrat] flex justify-between gap-2"> 
    <div className="">
      <img src="https://cdn-icons-png.flaticon.com/512/8216/8216380.png" alt="EeTt" className="gap-10 w-20 h-auto"/>
      </div>
      <div>      
        {["Services", "About US", "Contact"].map((item, index) => (
          <a key={index} className="py-4 px-2 font-light">{item}</a>
        ))}
        </div>
    </div>
  );
}

export default Navbar;