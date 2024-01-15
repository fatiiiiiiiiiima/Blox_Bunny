// Import Next.js Image component for image rendering
"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import './globals.css';
const GamesAnalyticsTable = () => {
    useEffect(() => {
        const tableCells = document.querySelectorAll('.table-container td');
        
        tableCells.forEach(cell => {
          if (cell.textContent.trim() === '0' || cell.textContent.trim().toLowerCase() === 'free') {
            cell.classList.add('grey-text');
          }
        });
      }, []);
    
  return (
    <div className="table-container">
      <table>
        <tbody>
          {/* Repeat for each game entry */}
          <tr>
            <td>
              <div className="game-info">
                {/* <Image src="/deadcells.png" alt="Game Image" width={40} height={40} /> */}
                <span>Yesterday</span>
              </div>
            </td>
            <td><p className='heading'>New visits</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>CC. Users</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td><p className='heading'>Dislikes</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>Revenue</p>22.30$</td>
            <td><p className='heading'>Favouries</p>8</td>
            <td>
            <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="game-info">
                {/* <Image src="/dino.png" alt="Game Image" width={40} height={40} /> */}
                <span>This Week</span>
              </div>
            </td>
            
            <td><p className='heading'>New visits</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>CC. Users</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td><p className='heading'>Dislikes</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>Revenue</p>22.30$</td>
            <td><p className='heading'>Favouries</p>8</td>
            <td>
            <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="game-info">
                {/* <Image src="/teacher.png" alt="Game Image" width={40} height={40} /> */}
                <span>This Month</span>
              </div>
              </td>
            <td><p className='heading'>New visits</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>CC. Users</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td><p className='heading'>Dislikes</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>Revenue</p>22.30$</td>
            <td><p className='heading'>Favouries</p>8</td>
            <td>
            <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="game-info">
                {/* <Image src="/teacher.png" alt="Game Image" width={40} height={40} /> */}
                <span>This Year</span>
              </div>
              </td>
            <td><p className='heading'>New visits</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>CC. Users</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td><p className='heading'>Dislikes</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td ><p className='heading'>Revenue</p>22.30$</td>
            <td><p className='heading'>Favouries</p>8</td>
            <td>
                <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={20} height={20} />
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GamesAnalyticsTable;
