import {getApp,getApps,initializeApp} from 'firebase/app';
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDHjh6DU__reFrGhscx2GKq6q84yOxfzqk",
    authDomain: "wzone-attend-a0859.firebaseapp.com",
    projectId: "wzone-attend-a0859",
    storageBucket: "wzone-attend-a0859.appspot.com",
    messagingSenderId: "685975463786",
    appId: "1:685975463786:web:eebe67f593ba2a706fe713"
  };
  const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const storage=getStorage(app)
export{app,db,storage};