import React from 'react'
import logo from '../assets/bandmember.jpg'
import Tour_img from './Tour_img'
import Contact from './Contact'
const ConTainer = () => {
    return (
        <div id = 'container'>
          <div id = 'Theban' >
              <div className= 'container_header'>
              <h2 className='TheBan'>THE BAND</h2>
              <p className = 'Love'>We love music</p>
              <p className = 'Theban_Text'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
          </div>

            <div className='container_img'> 
           <div>
           <p className= 'container_name'>Name</p> 
            <img src={logo} alt="" className='container_img-1'/>
           </div>
           <div>
           <p className= 'container_name'>Name</p> 
            <img src={logo} alt="" className='container_img-1'/>
           </div>
           <div>
           <p className= 'container_name'>Name</p> 
            <img src={logo} alt="" className='container_img-1'/>
           </div>         
            </div>
             <div id = 'tour_date'>
            <div id = 'tour' className = 'tour_dates'>
                    <div className="tour_header">
                        <h2 className='tour_header1'>
                        TOUR DATES
                        </h2 >
                        <p className='tour_header2'>Remember to book your tickets!</p>
                    </div>
                    <ul className='tour_list'>
                        <li className = 'tour_list-1'>
                            September 
                        <span className='tour_list_3'>Sold out</span>

                        </li>
                        <li className = 'tour_list-1'>October 
                        <span className='tour_list_3'>Sold out</span>

                        </li>
                        <li className='tour_list-2'>November
                            <span className='tour_list-4'>3</span>
                        </li>
                    </ul>
                    <Tour_img />
                   
            </div>
           </div>
           <Contact />
        </div>
        
    )
}

export default ConTainer
