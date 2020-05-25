import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmFUcwDbq4FiE4VFCBSD8P3Jv3F-9UsKI",
    authDomain: "catch-of-the-day-jack-brown.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jack-brown.firebaseio.com",
  })

  const base = Rebase.createClass(firebaseApp.database())

  export {firebaseApp}

  export default base