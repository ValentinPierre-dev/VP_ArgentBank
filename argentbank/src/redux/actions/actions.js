import { getToken } from '../../utils/dataFetcher.js';
import { saveLocal, clearStorage } from '../../utils/tokenStorage.js';


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
            /** @type {actionsTypes} */
            type: 'LOADING_IN_PROGRESS',
            payload: true,
         });
         // sent to axios
         const token = await getToken(email, password);
         saveLocal(token);

         dispatch({
            /** @type {actionsTypes} */
            type: 'LOGIN_SUCEED',
            payload: { token },
            loader: true,
            error: false,
         });
      } catch (err) {
         clearStorage();
         console.error(err);
         dispatch({
            /** @type {actionsTypes} */
            type: 'LOGIN_FAILED',
            payload: true,
         });
      }
   };
};



export { checkSignin };