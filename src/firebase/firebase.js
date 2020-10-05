import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDK8nhdHHELnTZMnFrZ2a8XfH7G2LX8EIg',
  authDomain: 'expensify-7d00f.firebaseapp.com',
  databaseURL: 'https://expensify-7d00f.firebaseio.com',
  projectId: 'expensify-7d00f',
  storageBucket: 'expensify-7d00f.appspot.com',
  messagingSenderId: '465868574008',
  appId: '1:465868574008:web:97a1b2a87a7a0bfcc505cd',
  measurementId: 'G-85S56085ZV',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// --- Firebase version of array list ---

// --- child_removed event ---
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// --- child_changed event ---
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// --- child_added event ---
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// --- Subscribing to data changes off of the expense ref ---
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// --- Reading data off of the expense ref once ---
// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// --- Creating individual expenses ---
// database.ref('expenses').push({
//   description: 'coffee',
//   amount: 345,
//   note: 'lavazaa',
//   createdAt: 'Oct 2nd, 2020',
// });

// --- Creating individual notes ---
// database.ref('notes').push({
//   title: 'course topics',
//   body: 'gatsby, native',
// });

// --- Removing a specific note by id ---
// database.ref('notes/-MIjfJjECVXFVsr_wEM-').remove();

// database.ref('notes').set(notes);

// --- Subscribing to the database for changes ---
// database.ref().on(
//   'value',
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.location}`);
//   },
//   (e) => {
//     console.log('error fetching data', e);
//   }
// );

// setTimeout(() => {
//   database.ref('name').set('Mikey Mike');
// }, 3000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching', e)
// });

// setTimeout(() => {
//   database.ref('age').set(65);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(17);
// }, 10500);

// database
//   .ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('error fetching data', err);
//   });

// database
//   .ref()
//   .set({
//     name: 'Ricky Torrez',
//     age: 30,
//     stressLevel: 8,
//     job: {
//       title: 'Software Developer',
//       company: 'Ladder Labs',
//     },
//     location: {
//       city: 'Sterling',
//       country: 'United States',
//     },
//   })
//   .then(() => {
//     console.log('data is saved!');
//   })
//   .catch((error) => {
//     console.log('this failed', error);
//   });

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   })
//   .then(() => {
//     console.log('changes being made');
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// database
//   .ref()
//   .update({
//     job: 'Manager',
//     'location/city': 'Boston',
//   })
//   .then(() => {
//     console.log('updating data');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('removing');
//   })
//   .catch((err) => {
//     console.log('error removing', err);
//   });

// database.ref('isSingle').set(null);
