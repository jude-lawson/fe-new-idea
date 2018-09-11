import * as firebase from 'firebase';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN } from '../env';

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN
};

firebase.initializeApp(config);

export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const githubOAuthLogin = () => firebase.auth().signInWithPopup(githubAuthProvider);


export { firebase };