import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9RdhYncVzj_2XFOt5O3x-jxBjnZ3thC4",
    authDomain: "ghitar-27a17.firebaseapp.com",
    databaseURL: "https://ghitar-27a17.firebaseio.com",
    projectId: "ghitar-27a17",
    storageBucket: "",
    messagingSenderId: "761014519333",
    appId: "1:761014519333:web:ef8576b2fddbb7ff"
};
export const createUserProfileDocument = async (userAuth, additionalData) =>{
	if(!userAuth)
		return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot =await userRef.get()
	if(!snapShot.exists){
		const { displayName,email } = userAuth;
		const createdAt = new Date();
		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(err){
			console.log('error creating the user ', err.message);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 