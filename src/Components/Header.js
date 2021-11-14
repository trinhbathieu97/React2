import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'



const Header = () => {
    
    return (
        <div id = 'header'>
         <ul id = 'header_list'>
         <li><a href="">HOME</a></li>
         <li><a href="#Theban">BAND</a></li>
         <li><a href="#tour">TOUR</a></li>
         <li><a href="#contact">CONTACT</a></li>
         <li>
             <a href="">MORE
                <AiFillCaretDown className ='icons1'/>
             </a>
             <ul className='header_list-item'>
                 <li>
                    <a href="">Merchandise</a>
                 </li>
                 <li>
                 <a href="">Extras</a>
                 </li>
                 <li>
                 <a href="">Media</a>
                 </li>
              </ul>   
              
             </li>
         </ul> 

         <div className = 'header_search'>
         <AiOutlineSearch className = 'icons2'/>
         </div>
                
        </div>
    )
}

export default Header
