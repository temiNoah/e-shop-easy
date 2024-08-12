import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp, collection, getDocs } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB-UrDAJSovtwBlE_tnU87ibTzX6JDMPTo",
    authDomain: "ninja-firegram-80354.firebaseapp.com",
    projectId: "ninja-firegram-80354",
    storageBucket: "ninja-firegram-80354.appspot.com",
    messagingSenderId: "856389900450",
    appId: "1:856389900450:web:6ee021b29f53458eb3dffb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//const db = getFirestore(app);
const projectStorage = getStorage(app); //firebase.storage();
const projectFirestore = getFirestore(app)   //firebase.firestore();
const timestamp = serverTimestamp;//projectFirestore.FieldValue.serverTimestamp;
const analytics = getAnalytics(app);

export {auth}
export { projectStorage, projectFirestore, timestamp };


