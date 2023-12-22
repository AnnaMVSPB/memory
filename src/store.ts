import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useDispatch } from 'react-redux';

// импортируем наши редьюсеры
import gameReducer from './features/Game/redux/reducer';


//  комбинируем редьюсеры в один rootReducer
const rootReducer = combineReducers({
  // тут будем прописывать разные наши редьюсеры
  gameReducer,

});

//  создаем redux стор
const store = createStore(rootReducer, composeWithDevTools());
// composeWithDevTools нужен, чтобы пользоваться redux devtools в браузере

//  протипизировать глобальный стор для useSelector
export type RootState = ReturnType<typeof store.getState>;

// протипизировали диспатч, чтобы он нам подсказывал типы
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
