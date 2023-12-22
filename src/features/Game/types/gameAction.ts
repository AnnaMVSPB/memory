
import type { GameArr } from './gameType';

type GameAction =
{type:'start'}
| {type: 'CHANGE_STATUS', payload: GameArr }
| {type:'q'}
| {type:'answer'}
export default GameAction;
