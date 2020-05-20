import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDVwVEQNuzuFp5R70ugKyiS9kYg1gIHJ1E",
    authDomain: "expensify-97388.firebaseapp.com",
    databaseURL: "https://expensify-97388.firebaseio.com",
    projectId: "expensify-97388",
    storageBucket: "expensify-97388.appspot.com",
    messagingSenderId: "470083487058",
    appId: "1:470083487058:web:1365a56ea7d54d4320a68b",
    measurementId: "G-DE6X7WN6M8"
  };


firebase.initializeApp(config)

const database =  firebase.database()

database.ref().set({
    name:'Si Thu San',
    age:21,
    isSingle:true,
    location:{
      city:'Yangon',
      country:'Myanmar'
    }
})

// database.ref().set('This is my data.')

database.ref('age').set(27);
database.ref('location/city').set('Mandalay')
database.ref('attributes').set({
  height:5.7,
  weight:'120lbs'
})

console.log('Data has been changed')