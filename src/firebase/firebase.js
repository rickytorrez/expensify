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

database.ref().set({
  name: 'Ricky Torrez',
  age: 30,
  isSingle: true,
  location: {
    city: 'Sterling',
    country: 'United States',
  },
});

// database.ref().set('this is my data');
database.ref('age').set(31);

database.ref('location/city').set('Ashburn');

database.ref('attributes').set({
  height: 60,
  weight: 185,
});
