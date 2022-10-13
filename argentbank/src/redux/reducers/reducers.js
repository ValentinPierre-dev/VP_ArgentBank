 import { initialState } from '../store/store';
 import { clearStorage } from '../../utils/tokenStorage.js';
 import { setBearer } from '../../utils/dataFetcher.js';
import { LOGIN_SUCCESS, USER_PROFILE, LOADING_IN_PROGRESS, LOGIN_FAILED, SAVE_SUCCESS, LOGOUT_ACTION } from '../actions/type';
 

/**
 *
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.payload
 * @param {actionsTypes} action.type
 * @returns
 */

 
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
             user: action.payload.user,
             loader: false,
          };
       case LOGIN_FAILED:
          return {
             ...state,
             error: true,
             loader: false,
             currentState: 'failed',
          };
      
      case SAVE_SUCCESS:
         return {
            ...state,
            user: {
               ...state.user,
               ...action.payload.user
            }
         };
      case LOGOUT_ACTION:
          clearStorage();
          return initialState;
       default:
          return state;
    }
 }