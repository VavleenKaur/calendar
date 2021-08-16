import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB2a73Y0Em3Cd7OY1jC7YXpc36Ggx9a1LI",
    authDomain: "calendar-abfc6.firebaseapp.com",
    projectId: "calendar-abfc6",
    storageBucket: "calendar-abfc6.appspot.com",
    messagingSenderId: "107889588857",
    appId: "1:107889588857:web:27dd124429385146f932a8",
    measurementId: "G-9N14MQRE2Z"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;