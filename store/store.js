import mealsReducer from './reducers/meal';
import { createStore, combineReducers } from 'redux';


const rootReducer = combineReducers({
	meals: mealsReducer
})


const store = createStore(rootReducer);

export default store;






