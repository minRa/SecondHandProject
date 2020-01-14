import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALSrR3A87EzYoQL1FxR8aEpqkvG0GLI9Y",
    authDomain: "react-secondhandshop.firebaseapp.com",
    databaseURL: "https://react-secondhandshop.firebaseio.com",
    projectId: "react-secondhandshop",
    storageBucket: "react-secondhandshop.appspot.com",
    messagingSenderId: "577381426862",
    appId: "1:577381426862:web:46ad94ef771eae7840af3f",
    measurementId: "G-000W2YLE6W"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const token = userAuth.getIdToken();
  localStorage.setItem('FBToken',token);
  //setAuthorizationHeader(token);
 // console.log(localStorage.getItem('FBToken'))
  //console.log(localStorage.getItem('FBIdToken'))
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
   const transformedCollection = collections.docs.map(doc => {
    //const { title, items } = doc.data();
    return {
     // routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      ...doc.data()
    };
  });
  return transformedCollection
 // console.log(transformedCollection);

  // return transformedCollection.reduce((accumulator, collection) => {
  //   accumulator[collection.title.toLowerCase()] = collection;
  //   return accumulator;
  // }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// const setAuthorizationHeader = (token) => {
//   const FBIdToken = `Bearer ${token}`;
//   localStorage.setItem('FBIdToken', FBIdToken);
//  // axios.defaults.headers.common['Authorization'] = FBIdToken;
// };

export default firebase;
