import React, { createContext, useEffect, useState, useContext } from 'react'
//import { Permissions, Roles } from '../assets/data/permissions';
import axios from '../api/axios';
import { Spinner } from 'reactstrap';
import TopbarProgressIndicator from 'react-topbar-progress-indicator';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
//import { DataResponseContext } from './DataResponseContext';



const AuthUserContext = createContext({});



// const getExistingAuthUser = () => {

//     if (userType !== null) {
//         const url = `/${userType}/refresh_token`;
//         if (userType != null) {
//             return axios.get(url).then(({ data, status }) => {
//                 console.log("rf_token:" + JSON.stringify(data))
//                 // const newAccessToken = data.accessToken;
//                 return data

//             }).catch((err) => {
//                 console.log("unable to get refresh token" + err.message);
//                 return {}
//             });
//         }
//     }

//     return {}
// }

export function AuthUserProvider({ children }) {
    
        // const {dataResponse,setDataResponse}= useContext(DataResponseContext)
        // console.log(dataResponse)
    
    
    const [authUser, setAuthUser] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const [fetchFireBase, setFetchFireBase] = useState(false)
    
    const [user, setUser] = useState(() => {
        const user = auth.currentUser;
        
        return user;
    });
    
    useEffect(() => {
        auth.onAuthStateChanged(firebaseUser => {
            setUser(firebaseUser);
            setFetchFireBase(true)
        //   setDataResponse(true)
        });
      }, [])

    /*** user case: when user refresh the page   */
    const userType = localStorage.getItem('userType') != null ? localStorage.getItem('userType') : null;
    const [isContentReady, setIsContentReady] = useState(false);

    useEffect(() => {

        const loadData = async () => {
            if (userType != null) {
                const url = `/${userType}/refresh_token`;
                await axios.get(url).then(({ data, status }) => {
                    // console.log("rf_token:" + JSON.stringify(data))
                    // const newAccessToken = data.accessToken;
                    setAuthUser(data)
                    //  setIsContentReady(true)


                }).catch((err) => {
                    console.log("unable to get refresh token" + err.message);
                    // setIsContentReady(true)

                });


            }
            setIsContentReady(true)

        }

        loadData();
    }

        , [userType])


    //{  roles: [Roles.DEALER], permissions: [Permissions.READ_WRITE__DEALER_PRODUCT_LIST.id] }
    return isContentReady ?
        <AuthUserContext.Provider value={[authUser, setAuthUser, setShowModal, showModal, user, setUser, fetchFireBase]}>
            {children}
        </AuthUserContext.Provider>
        :
        <TopbarProgressIndicator
            color="#F44336"
            height={3}
            duration={200}
            className="my-progress-bar"
        />
    // <Spinner style={{ width: '2rem', height: '2rem', position: "absolute", left: "50%", top: "50%" }} children={false} />

}

export default AuthUserContext