// React
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../redux/actions/actions';

const UserProfil = () => {
   const store = useSelector((state) => state);
   const user = store.user;

   const firstName = user && user.firstName;
   const lastName = user && user.lastName;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUserData());
   }, [dispatch]);


   return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {firstName}&nbsp;
                {lastName}
            </h1>
            <button
                className="edit-button"
            >
                Edit Name
            </button>
        </div>

   );
};

export default UserProfil;