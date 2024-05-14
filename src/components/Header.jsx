import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";



const Header = () => {

  return (
    <div className='navbar'>
        <div className='navLogo'>
            <h3>AM.</h3>
        </div>
        {/* <div className='menu'>
          <RxHamburgerMenu onClick={()=>setIsShown(isShown)} />
            { {isShown ? <RxCross1 onClick={()=>setIsShown(false)}/> : null} }
        </div>
        <div className={setIsShown ? 'navList active' : 'navList' }>
            <a href='#home' className='navLink' onClick={()=>setIsShown(false)}><p>Home</p></a>
            <a href='#about' className='navLink' onClick={()=>setIsShown(false)}><p>About</p></a>
            <a href='#projects' className='navLink' onClick={()=>setIsShown(false)}><p>Projects</p></a>
            <a href='#contact' className='navLink' onClick={()=>setIsShown(false)}><p>Contact</p></a>
        </div> */}
    </div>
  )
}

export default Header