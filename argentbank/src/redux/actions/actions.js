import { getToken, userData } from '../../utils/dataFetcher.js';
import { saveLocal, clearStorage } from '../../utils/tokenStorage.js';
import { LOGIN_SUCCESS, LOADING_IN_PROGRESS, LOGIN_FAILED, USER_PROFILE, PROFILE_FAILED } from './type.js';



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

const loginSuccess = (payload) => {
   return {
      type: LOGIN_SUCCESS,
      payload
   }
}



export { checkSignin, getUserData, loginSuccess };