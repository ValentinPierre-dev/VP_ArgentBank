// React
import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loading, setUserFailed, setUserProfile, userFailed, userProfile } from '../redux/actions/actions';
import { userData, userEdit } from '../utils/dataFetcher';

const UserProfil = () => {

   const userFirstName = useSelector((state) => state.user?.firstName);
   const userLastName = useSelector((state) => state.user?.lastName);

   const [edit, setEdit] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      userData().then(data => {
         try{
            dispatch(loading(data))
            dispatch(userProfile(data))
         }
         catch (err){
            console.log(err)
            dispatch(userFailed(data))
        }
      });
   }, [dispatch]);

   // OPEN MODALE
   const openModale = () => {
        setEdit(true);
     };

   // CLOSE MODALE
   const cancelEdit = () => {
        setEdit(false);
     };

   // SAVE EDITION
   const onSave = (e) => {
        e.preventDefault();
        const editFirstName = document.querySelector('#editFirstName').value;
        const editLastName = document.querySelector('#editLastName').value;

        userEdit(editFirstName, editLastName).then(data => {
         dispatch(setUserProfile(data.data.body))
         setEdit(false)
        }).catch((err) => {
            alert(err)
            dispatch(setUserFailed())
        });
    };


   return (
    <div>
        {!edit ? (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {userFirstName}&nbsp;
                {userLastName}
            </h1>
            <button
                className="edit-button"
                onClick={openModale}
            >
                Edit Name
            </button>
        </div>
        ) : (
            <div className="header">
            <h1>
               Welcome back
               <br />
               <div>
                  <input
                     type="text"
                     placeholder={userFirstName}
                     id="editFirstName"
                  />
                  <input
                     type="text"
                     placeholder={userLastName}
                     id="editLastName"
                  />
               </div>
               <div className="edit-btn">
                  <button
                     className="edit-button sheen-btn sheen"
                     onClick={onSave}
                  >
                     &nbsp;Save&nbsp;
                  </button>
                  <button
                     className="edit-button sheen-btn sheen"
                     onClick={cancelEdit}
                  >
                     Cancel
                  </button>
               </div>
            </h1>
         </div>
        )}
    </div>
   );
};

export default UserProfil;