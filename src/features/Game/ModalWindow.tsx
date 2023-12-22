import React, { useState } from 'react';
import './style/modalStyle.css';
import type { Question } from './types/gameType';
import { useAppDispatch } from '../../store';



function ModalWindow({active,question,setActive}:{active:boolean,question:Question,setActive:(a:boolean)=>void}):JSX.Element {
const [otvet,setOtvet] = useState('')
const [message,setMessage] = useState('')
const dispatch=useAppDispatch()
const answer =():void=>{
  if(otvet.toLowerCase() === question.a.toLowerCase()){
    dispatch({type:'answer'})
    setActive(false)
    setOtvet('')
  }else{
setMessage('Вы ответили не верно , попробуйте еще раз')
setTimeout(()=>{
  setMessage('')
},2000)
  }

}
  
  return (
    <div className={active ? 'modal active' : 'modal'} >
     
      <div className="modal_content">
        <div>
       <h2>{question.q}</h2>
       <input value={otvet} onChange={(e)=>setOtvet(e.target.value)}/>
       <button type='button'className='btnA' onClick={answer}>ответить</button>
      <p>{message}</p>
      </div>
    
      <div className="">
      <div onClick={()=>setActive(false)} className='x'><img alt='...' src='/src/features/Game/style/x.png'/></div>
        <div className='gif'>  <img alt='...' src='/src/features/Game/style/gif.gif'/></div>
      
      </div>
     
      </div>
    </div>
  )
}

export default ModalWindow;
