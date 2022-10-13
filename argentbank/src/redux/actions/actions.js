import {
   LOGIN_SUCCESS,
   LOADING_IN_PROGRESS,
   LOGIN_FAILED,
   USER_PROFILE,
   PROFILE_FAILED,
   SAVE_SUCCESS,
   SAVE_FAILED
} from './type.js';

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


// LOADING ACTION

const loading = (payload) => {
   return {
      type: LOADING_IN_PROGRESS,
      payload
   }
}

// LOGIN ACTIONS

const loginSuccess = (payload) => {
   return {
      type: LOGIN_SUCCESS,
      payload
   }
}

const loginFailed = (payload) => {
   return {
      type: LOGIN_FAILED,
      payload
   }
}


// GET USER PROFILE ACTIONS

const userProfile = (user) => {
   return {
      type: USER_PROFILE,
      payload: { user }
   }
}

const userFailed = () => {
   return {
      type: PROFILE_FAILED,
   }
}


// EDIT USER ACTIONS

const setUserProfile = (user) => {
   return {
      type: SAVE_SUCCESS,
      payload: { user }
   }
}

const setUserFailed = () => {
   return {
      type: SAVE_FAILED,
   }
}

export { loading ,loginSuccess, loginFailed, userProfile, userFailed, setUserProfile, setUserFailed };