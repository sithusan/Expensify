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

const database = firebase.database()

database.ref('expenses').on('child_removed',(snapshot) => {
  console.log(snapshot.key,snapshot.val())
})

database.ref('expenses').on('child_changed',(snapshot) => {
  console.log(snapshot.key,snapshot.val())
})

database.ref('expenses').on('child_added',(snapshot) => {
  console.log(snapshot.key,snapshot.val())
})w

// database.ref('expenses').push({
//   description:'This is description',
//   note:'',
//   amount:109500,
//   createdAt:'Time Created'
// })

// database.ref('expenses')
// .on('value',(snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id:childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })
//   console.log(expenses);

// },(e) => {
//   console.log('Error in fetching data',e)
// })
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id:childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })

//   console.log(expenses)
// }).catch((error) => {
//   console.log('Error Fetching Data',error)
// })

// database.ref('notes/-M7rn4YKwgIygAZGIfby').update({
//   body:'Buy Food'
// })

// database.ref('notes').push({
//   title:'Course Topic',
//   body:'React Native,Python,Angular'
// })

// const firebaseNotes = {
//   notes: {
//     afdadf: {
//       title: 'First Note',
//       body: 'This is my note'
//     },
//     adfareaf: {
//       title: 'Another Note',
//       body: 'This is my note'
//     }
//   }
// }
// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another Note',
//   body: 'This is my note'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value',(snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
// },(e) => {
//   console.log('Error Fetching Data',e);
// })


// setTimeout(() => {
//   database.ref('name').set('Mike');
// },3000)
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error Fetching Data', e);
// })


// setTimeout(() => {
//   database.ref('age').set(28)
// }, 3500)
// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 7000)
// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500)
// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);

// }).catch((e) => {
//   console.log('Error fetching data ',e)
// })

// database.ref().set({
//     name:'Si Thu San',
//     age:21,
//     stressLevel:6,
//     job:{
//       title:'Software Engineer',
//       company:'Mother Finance'
//     },
//     location:{
//       city:'Yangon',
//       country:'Myanmar'
//     }
// }).then(() => {
//   console.log('Data is Saved');
// }).catch((e) => {
//   console.log('This is failed',e);
// })

// database.ref().update({
//   stressLevel:9,
//   'job/company':'Amazon',
//   'location/city':'Seattle'
// })

// database.ref('isSingle').remove().then(() => {
//   console.log('Data has been removed');
// }).catch((e) => {
//   console.log('Data removing failed')
// })
