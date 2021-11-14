import React from 'react'
import logo1 from '../assets/newyork.jpg'
import logo2 from '../assets/paris.jpg'
import logo3 from '../assets/sanfran.jpg'
import Modal from './Modal'
import { useState } from 'react'

const Tour_img = () => {
   const [open, setOpen] = useState({top:'0'})
  
   const abc = ()=>{
       setOpen({display: 'flex'})
       
    }
  const all = ()=>{
      setOpen({display: 'none'})
  }
    
    
   
   
   
   
    return (
        <div id='tour_img'>
        <div className='tour_img-list'>
            <img src={logo1} alt="" className='tour_img-item'/>
            <div className='img_text'>
                <p className="tour_text-1">New York</p>
                <p className="tour_text-2">Fri 27 Nov 2016</p>
                <p className ='tour_text-3'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className ='tour_text-4'onClick={abc}>Buy Tickets</button>
            </div>                          
        </div>
                
        <div className='tour_img-list'>
        
            <img src={logo2} alt="" className='tour_img-item'/>
            <div className='img_text'>
                <p className="tour_text-1">Paris</p>
                <p className="tour_text-2">Sat 28 Nov 2016</p>
                <p className ='tour_text-3' >Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className ='tour_text-4' onClick={abc}>Buy Tickets</button>
            </div>
            
        </div>

        <div className='tour_img-list'>
            <img src={logo3} alt="" className='tour_img-item' />
            <div className='img_text'>
                <p className="tour_text-1">San Francisco</p>
                <p className="tour_text-2">Sun 29 Nov 2016</p>
                <p className ='tour_text-3'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button className ='tour_text-4' onClick={abc}>Buy Tickets</button>
            </div>
           <Modal ass = {open} asd={all}/>
        </div>
    </div>
    )
}

export default Tour_img
