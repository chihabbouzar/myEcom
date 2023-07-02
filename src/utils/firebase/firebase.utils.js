// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore' 

import {getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAvPcsrPm7l7t7FYfyOnSjskka4WPPaMM",
  authDomain: "centered-effort-381816.firebaseapp.com",
  projectId: "centered-effort-381816",
  storageBucket: "centered-effort-381816.appspot.com",
  messagingSenderId: "998460105774",
  appId: "1:998460105774:web:3d45650dd1c2bc7f7d2bbf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();P

provider.setCustomParameters({
    prompt : 'select_account'
}); 

  
export const auth = getAuth();
export const signInWithGooglePopup = ()   => signInWithPopup(auth,provider);


export const db = getFirestore()

export const createUserDocFromAuth  = async (userAuth,additionalInformation) =>{
    if(!userAuth)return;
    const userDocRef = doc(db,"users",userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);  
    // if user exists,  ? turn doc ref :  i want to create  and set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const { displayName,email } =userAuth
        const signinAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                signinAt,
                ...additionalInformation
            });
        }
        catch (error) {  
                console.log("error creating user in the db",error.message);
        }
    }
    return userDocRef;
}



export const createAuthUserWithhEmailAndPassword = async (email,password)=>{
    if(!email || !password) {
        console.log("problem here");
        return;
    }
     return await createUserWithEmailAndPassword(auth,email,password);
}


export const signInWithAuthUserWithhEmailAndPassword = async (email,password)=>{
    if(!email || !password) {
        console.log("problem here"); 
        return;
    }
     return await signInWithEmailAndPassword(auth,email,password);
}

export const signoutUser = async() =>  await signOut(auth);



export const onAuthStateChangedListener =  (callback) =>{
    onAuthStateChanged(auth,callback);
}


