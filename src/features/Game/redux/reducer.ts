/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type gameAction from '../types/gameAction';
import type gameState from '../types/gameState';
import questions from './questions';
import users from './users'

export const initState: gameState = {
  users,
  gameArr:[],
  arr:[],
  moves:6,
  questions,
};


function reducer(state: gameState = initState, action: gameAction): gameState {
  switch (action.type) {
    case 'start':
      const arr = [...state.users]
      let j; let temp;
      let num = 0
      const cardArr = []
      arr.forEach((el, ) => {
        num += 1
        cardArr.push({
          ...el,
          id: num,
          status: false,
          status2: false,
        })
        num += 1
        cardArr.push({
          ...el,
          id: num,
          status: false,
          status2: false,
        })
      })
      for (let i = cardArr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = cardArr[j]
        cardArr[j] = cardArr[i]
        cardArr[i] = temp
      }
      return {
        ...state,
        gameArr:cardArr
      };

      case 'CHANGE_STATUS':
        if(state.moves > 0){
          let newMoves = state.moves
          let arrUser=state.gameArr.map(el=>el.id === action.payload.id ? {...el,status:true} : el)
       let newArr = [...state.arr,action.payload]
        if(newArr.length === 2){
          newMoves -= 1
          if(newArr[0].name === newArr[1].name){
            arrUser=arrUser.map(el=>(el.id === newArr[0].id || el.id === newArr[1].id) ? {...el,status2:true} : el)
          newArr=[]
          }
        }
          return {
            ...state,
          gameArr:arrUser,
          arr:newArr,
          moves:newMoves
          };
        }return state
   
case 'q':
  
  return{
    ...state,
    gameArr:state.gameArr.map(el=>(el.id === state.arr[0].id || el.id === state.arr[1].id) ? {...el,status:false} : el),
    arr:[],
  }
  case 'answer':
    return{
      ...state,
      moves:2 + state.moves,
      questions:state.questions.filter((el,i)=> i !== 0)
    }
    default:
      return state;
  }
}

export default reducer;
