import { createStore } from 'redux';
import axios from 'axios';
import { usersReducer } from '../reducers/reducers.js';

const initialState = {
   token: null,
   loggedIn: false,
   user: null,
   currentState: '',
   loader: false,
   error: false,
};

function setInitialState() {
   const token =
      localStorage.getItem('token') || sessionStorage.getItem('token') || null;
   if (token === null) return initialState;
   axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
   return { ...initialState, loggedIn: true, token };
}

const store = createStore(
   usersReducer,
   setInitialState(),
);

export { store, initialState };