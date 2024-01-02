import React from 'react';
import Image from 'next/image';
import './globals.css'
const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="logo">
        <Image src="/navbarlogo.png" alt="BloxBunny Logo" width={169.34} height={60.8}/>
      </div>
      <div className="navlinks">
      <p>DASHBOARD</p>
        <p>ROBLOX OVERVIEW</p>
        <p>BLOG</p>
        <p>PRICING</p>
        <p>CONTACT US</p>
        <Image src='/twittericon.png' alt="Twitter Logo" width={28} height={28}></Image>
        <div className='ButtonContainer'>
        <button className='login'>LOGIN</button>
        <button className='getstarted'>GET STARTED</button>
        </div>
      </div>
        </div>
    );
}

export default Navbar;