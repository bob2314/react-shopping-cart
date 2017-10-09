// src/store.js

import { createStore } from "redux";
import rootReducer from './reducers';

let store = createStore(rootReducer);
export default store;
// export default function ({ store }){ console.log(store) }