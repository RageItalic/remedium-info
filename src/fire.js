import firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "AIzaSyA4aIKwKXw9gnVpiN2opEtBjepJZqmTKNQ",
authDomain: "remedium-info.firebaseapp.com",
databaseURL: "https://remedium-info.firebaseio.com",
projectId: "remedium-info",
storageBucket: "remedium-info.appspot.com",
messagingSenderId: "554294190572"
};
var fire = firebase.initializeApp(config);

export default fire;