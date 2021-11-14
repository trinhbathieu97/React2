import React from 'react'
import { AiOutlinePhone } from "react-icons/ai";
import { BsGeoAltFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import logo from '../assets/map.jpg'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
        <div id = 'contact' >  
           <div className = 'contact_header'>
                <h2 className='TheBan'>CONTACT</h2>
                <p className = 'Love'>Fan? Drop a note!!</p>
                </div>  
            <div className = 'contact'>
                <div className ='contact_list' >
                <li> <BsGeoAltFill /> Chicago, US</li>
                <li> <AiOutlinePhone /> Phone: +00 151515</li>
                <li> <FaRegEnvelope /> Email: mail@mail.com</li>
                </div>
                   <form className='contact_list1'>
                       <div>
                           <input className='contact_list2  contact_list3' type="text" placeholder='Name'/>
                           <input className='contact_list2' type="text" placeholder="Email"/>
                       </div>
                       <input className='contact_list4' type="text" placeholder="Message"/>
                       <button className='contact_list5'>Send</button>
                   </form>
            </div>
           
        </div>
        <div className='img_contact'>
            <img src={logo} alt="" className='img_contact2'/>

        </div >

        <div className = 'Contact_end'>
            <div className='contact_end-1'>
                <a>< AiFillFacebook/></a>
                <a><AiFillCamera /></a>
                <a><AiOutlineTwitter /></a>
                <a><FaPinterestP /></a>
                <a><FaLinkedinIn /></a>
            </div>
            <p className='contact_end-2'>Powered by <a href=''>w3.css</a></p>

        </div>
        
        </div>
        
    )
}

export default Contact
