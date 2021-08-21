import { createStore } from "redux";
import rootReducer from '../store/Reducers/reducer'

const store = createStore(rootReducer);

export default store;