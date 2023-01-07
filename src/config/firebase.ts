import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase-admin/auth";
import {
    App,
    applicationDefault,
    initializeApp as initializeAdminApp ,
} from "firebase-admin/app";
import { share } from "mem-box/memory";


const firebaseConfig = {
    apiKey: "AIzaSyD15FHif6MjgjbeET2XzXWifbDuTAm8WjU",
    authDomain: "spwr-9e05c.firebaseapp.com",
    projectId: "spwr-9e05c",
    storageBucket: "spwr-9e05c.appspot.com",
    messagingSenderId: "524823826204",
    appId: "1:524823826204:web:781a7f7de76ff5016034d9",
    measurementId: "G-WYKJMBSMT5",
};

/**
 * Firebase initialization.
 */
export default function configureFirebase (): void {
    const
        firebase = initializeApp(firebaseConfig),
        db = getFirestore(firebase),
        firebaseAdmin = initializeAdminApp({
            credential: applicationDefault(),
        }),
        auth = getAuth(firebaseAdmin);

    share({ firebase, firebaseAdmin, db, auth });
}

declare global {
    interface Ctx {
        firebase: FirebaseApp;
        firebaseAdmin: App;
        db: Firestore;
        auth: Auth;
    }
}
