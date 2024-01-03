"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './globals.css'
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigatetoblog = () => {
    router.push('/blogpage')
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    return(
        <div className='navbar'>
            <div className="logo">
        <Image src="/navbarlogo.png" alt="BloxBunny Logo" width={169.34} height={60.8}/>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
      <div className={`navlinks ${isOpen ? 'open' : ''}`}>
      <p>DASHBOARD</p>
        <p>ROBLOX OVERVIEW</p>
        <p onClick={navigatetoblog}>BLOG</p>
        <p>PRICING</p>
        <p>CONTACT US</p>
        <Image src='/twittericon.png' alt="Twitter Logo" width={28} height={28}></Image>
        <div className='ButtonContainer'>
        <button className='login'>LOGIN</button>
        <button className='getstarted'>GET STARTED</button>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
    );
}

export default Navbar;