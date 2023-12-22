import React, { useEffect } from 'react';
import './App.css';




import { useSelector } from 'react-redux';
import GameLists from '../features/Game/gameList';
import type { RootState} from '../store';
import { useAppDispatch } from '../store';
import '../features/Game/style/gameStyle.css'

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const users = useSelector((store:RootState)=>store.gameReducer.gameArr)
  useEffect(()=>{
    dispatch({type:'start'})
  },[])

  return (
  <div >
  {
    users.length > 0 &&  <GameLists />
  
  }
       </div>    
 
  );
}

export default App;
