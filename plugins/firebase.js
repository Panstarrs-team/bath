import firebase from 'firebase/app'
import 'firebase/firestore'
const config = {
  apiKey: 
  authDomain: 
  databaseURL: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId: 
  measurementId:
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
firebase.firestore()
export default firebase
