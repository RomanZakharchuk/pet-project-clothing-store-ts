import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBzb5uESa6VL_Qdtb0n-qischIiHXB0ZvM",
    authDomain: "csss-clothing-store-db.firebaseapp.com",
    projectId: "csss-clothing-store-db",
    storageBucket: "csss-clothing-store-db.appspot.com",
    messagingSenderId: "140694968258",
    appId: "1:140694968258:web:0d833de02219e01417a85b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth: any) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());
}

export {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth
}