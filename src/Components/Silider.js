import React from 'react'
import { useState,useEffect } from 'react'




const Silider = () => {
  const [imgAll,setImgAll] = useState(
      {
          id:'Silice',
          text: 'Chicago',
          textp:'Thank you, Chicago - A night we won\'t forget.'
      })
      const list = [
        {
          
          id:'Silice',
          text: 'Chicago',
          textp:'Thank you, Chicago - A night we won\'t forget.'
        },
        {
          
          id:'Silice1',
          text: 'Los Angeles',
          textp:'We had the best time playing at Venice Beach!'
      },
      {   
          
          id: 'Silice2',
          text: 'New York',
          textp:'The atmosphere in New York is lorem ipsum.'
      }
    ]
   
 
    const [stt,setStt] = useState(0)

      const listImg =()=>{
        setStt(stt + 1)
        if(stt === 2){
         setStt(0)
        }
        let index = stt
        console.log(index)
        setImgAll(list[index])
             
      }
     
      useEffect(() => {
        const id = setInterval(() => {
          listImg()
        }, 2000);
        return () => clearInterval(id);
      }, [imgAll]);
      
    
    return (
        
        <div id = {imgAll.id} onClick={listImg}>
        <div className = 'Silice_text'>
            <h2>{imgAll.text}</h2>
            <p className = 'Silice_text-1'>{imgAll.textp}</p>
        </div>
        </div>
         
        
    )
    }


export default Silider
