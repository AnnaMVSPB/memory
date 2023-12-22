import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import type { RootState} from '../../store';
import { useAppDispatch } from '../../store';
import type { GameArr} from './types/gameType';
import GameCard from './GameCard';
import './style/gameStyle.css'
import ModalWindow from './ModalWindow';


export default function GameLists(): JSX.Element {
  const [active,setActive] = useState<boolean>(false)
const {gameArr,arr,moves,questions} = useSelector((store:RootState)=>store.gameReducer)


const dispatch = useAppDispatch();

useEffect(()=>{
if(arr.length === 2){
  setTimeout(()=>{
    dispatch({type:'q'})
  },1000)
  
}
},[arr])

  return (
     <div className="cards flex">
      <div className='pole card'>
      <div style={{padding:'10px'}}>Колличество доступных Вам ходов : {moves}</div>
 {!moves && <button className='btn' type='button' onClick={()=>setActive(true)}>Хочеш доиграть ? Ответь на вопросики</button>}
 </div>
    {gameArr.map((user:GameArr)=><GameCard  key={user.id} user={user}/>)}
    <ModalWindow active={active} setActive={setActive} question={questions[0]}/>
    </div>
  );
}
