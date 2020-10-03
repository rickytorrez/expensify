// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       name: 'Ricky',
//       age: 60,
//     });
//   }, 5000);
// });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('something went wrong!');
  }, 5000);
});

console.log('before');

// callback that fires when the promise resolves
promise.then(
  (data) => {
    console.log('1', data);
  },
  (error) => {
    console.log('error', error);
  }
);

console.log('after');
