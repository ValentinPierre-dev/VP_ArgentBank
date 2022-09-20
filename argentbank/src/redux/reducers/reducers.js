 import { initialState } from '../store/store';
 import { clearStorage } from '../../utils/tokenStorage.js';
 import { setBearer } from '../../utils/dataFetcher.js';
import { LOGIN_SUCCESS, USER_PROFILE, LOADING_IN_PROGRESS, LOGIN_FAILED } from '../actions/type';
 
 
 export function usersReducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
       case LOADING_IN_PROGRESS:
          return {
             ...state,
             currentState: 'loading',
             loader: payload,
          };
       case LOGIN_SUCCESS:
          setBearer(action.payload);
          return {
             ...state,
             loggedIn: true,
             token: action.payload,
             currentState: 'logged',
             loader: true,
          };
       case USER_PROFILE:
          return {
             ...state,
             user: payload.user,
             loader: false,
          };
       case LOGIN_FAILED:
          return {
             ...state,
             error: true,
             loader: false,
             currentState: 'failed',
          };
       case 'LOGOUT_ACTION':
          clearStorage();
          return initialState;
       default:
          return state;
    }
 }