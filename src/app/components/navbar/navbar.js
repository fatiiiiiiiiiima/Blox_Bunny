"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './globals.css'
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigatetoblog = () => {
    router.push('/blogpage')
  }
  const navigatetoreview = () => {
    router.push('/reviewpage')
  }
  const navigatetopricing = () => {
    router.push('/accpage#payplan')
  }
  const navigatetocontact = () => {
    router.push('/accpage#contact us')
  }
  const navigatetosignup = () => {
    router.push('/accpage')
  }
  const navigatetosign = () => {
    router.push('/signin')
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};
    return(
      <div className='navbar'>
      <div className="logo">
        <Link legacyBehavior href="/">
          <a>
        <Image src="/navbarlogo.png" alt="BloxBunny Logo" width={169.34} height={60.8} />
        </a>
        </Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navlinks ${isOpen ? 'open' : ''}`}>
        
        <ul className='navList'>
          <li><Link legacyBehavior href="/dashboard"><a>DASHBOARD</a></Link></li>
          <li><Link legacyBehavior href="/reviewpage"><a>ROBLOX OVERVIEW</a></Link></li>
          <li><Link legacyBehavior href="/blogpage"><a>BLOG</a></Link></li>
          <li><Link legacyBehavior href="/accpage#payplan"><a>PRICING</a></Link></li>
          <li><Link legacyBehavior href="/accpage#contact us"><a>CONTACT US</a></Link></li>
          
        
        <Image src='/twittericon.png' alt="Twitter Logo" width={28} height={28} />
        <div className='ButtonContainer'>
          <Link legacyBehavior href="/signin">
          <a><button className='login'>LOGIN</button></a>
          </Link>
          <Link legacyBehavior href="/accpage">
          <a><button className='getstarted' onClick={navigatetosignup}>GET STARTED</button></a>
          </Link>
        </div>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

export default Navbar;