import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Modal = ({ass,asd}) => {
    const a = ass
    const b = asd
   console.log(b)

   const Exit=()=>{
        b()
   }
   
    return (
        <div  className='modal' style = {a}>
            <div className='modal_container'>
                <div className='modal_header '>

                   <p className='modal_icon2' onClick={Exit}><AiOutlineClose /></p>

                <p><AiFillCalendar className='modal_icon1'/></p> 
                    <h2 className = 'modol_header-1'> Tickets</h2>
                </div>
                <div className = 'modal_container-2'>
                    <label >
                        <p className ='modal_label'><BsFillCartFill /> Tickets, $15 per person</p>
                    </label>
                    <input type="text" placeholder='How Many'  className='modal_input'/>
                    <label  >
                    <p className ='modal_label'><BsFillPersonFill />SenTo</p>
                    </label>
                    <input type="text" placeholder='Enter Email'  className='modal_input'/>
                    <div>
                    <button className = 'modal_play'>Play</button>
                    </div>
                    <div className='modal_futer'>
                        <button className = 'modal_close'>Close</button>
                        <p>Needa
                        <a href="">help</a>
                    </p>
                    </div>
                    
                </div>
            </div>
            
        </div> 
    )
} 

export default Modal
