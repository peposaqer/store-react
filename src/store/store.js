import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import cartReduer from './redusers';
import thunk from "redux-thunk";
import throttle from "lodash.throttle"; 


function loadState() {
  try {
    const state = localStorage.getItem("cart");

    if (state !== null) { 
      return JSON.parse(state);
    }
  } catch (e) {
    // ignore errors
  }

  return {
    cart: [],
  };
}

function saveState(state) {
  localStorage.setItem("cart", JSON.stringify(state));
}

const appReducers = combineReducers({
  cart: cartReduer,
});

const store = createStore(appReducers, loadState());

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 2000)
);


export default store;

