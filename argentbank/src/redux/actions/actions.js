import { getToken, userData, userEdit } from '../../utils/dataFetcher.js';
import { saveLocal, clearStorage } from '../../utils/tokenStorage.js';
import { LOGIN_SUCCESS, LOADING_IN_PROGRESS, LOGIN_FAILED, USER_PROFILE, PROFILE_FAILED, SAVE_SUCCESS, SAVE_FAILED } from './type.js';

/**
 * @typedef {(
 * 'LOADING_IN_PROGRESS'
 * |'LOGIN_SUCEED'
 * |'LOGIN_FAILED'
 * |'USER_PROFILE'
 * |'SAVE_SUCCEED'
 * |'SAVE_FAILED'
 * |'PROFILE_FAILED'
 * )} actionsTypes
 */

/**
 * Check if user exist
 * @param { string } email
 * @param { string } password
 * @returns { function }
 */

const checkSignin = (email, password) => {
   return async (dispatch) => {
      try {
         dispatch({
            type: LOADING_IN_PROGRESS,
            payload: true,
         });
         const token = await getToken(email, password);
         saveLocal(token);

         dispatch({
            type: LOGIN_SUCCESS,
            payload: { token },
            loader: true,
            error: false,
         });
      } catch (err) {
         clearStorage();
         console.error(err);
         dispatch({
            type: LOGIN_FAILED,
            payload: true,
         });
      }
   };
};

/**
 * Get informations of logged user
 * @returns { function }
 */
 const getUserData = () => {
   return async (dispatch) => {
      try {
         dispatch({
            type: LOADING_IN_PROGRESS,
            payload: true,
         });
         // sent to axios
         const user = await userData();
         dispatch({
            type: USER_PROFILE,
            payload: { user },
         });
      } catch (err) {
         console.log(err);
         dispatch({
            type: PROFILE_FAILED,
         });
      }
   };
};

/**
 * Update the user informations
 * @param { string } firstName
 * @param { string } lastName
 * @returns { function }
 */

const setUserData = (firstName, lastName) => {
   return async (dispatch) => {
      try {
         // sent to axios
         await userEdit(firstName, lastName);
         dispatch({
            /** @type {actionsTypes} */
            type: SAVE_SUCCESS,
            payload: {
               user: { firstName, lastName },
            },
         });
         
      } catch (err) {
         console.error(err);
         dispatch({
            /** @type {actionsTypes} */
            type: SAVE_FAILED,
         });
      }
   };
};

const loginSuccess = (payload) => {
   return {
      type: LOGIN_SUCCESS,
      payload
   }
}



export { checkSignin, getUserData, loginSuccess, setUserData };