import React from 'react'

import type { GameArr } from './types/gameType'

import { useAppDispatch } from '../../store'


function GameCard({user}:{user:GameArr}):JSX.Element {
const dispatch = useAppDispatch()
const [isRotated] = React.useState(user.status);


    function handleClick():void {
    
        dispatch({
        type: 'CHANGE_STATUS',
        payload: user
      })

      
      }
  return (
    <div className={`card ${isRotated ? 'rotated' : ''}`}>
          {
        user.status
          ? <div className="rear back"><img src={user.url} alt='...'/></div>
          : <div onClick={ handleClick} className='facial front rear'><img src='/src/features/Game/style/owl.jpeg'/></div >
      }






    </div>
  )
}

export default GameCard