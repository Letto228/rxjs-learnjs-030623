// from(Array.from({length: 10}, (_, index) => index), asapScheduler)
//     .subscribe(v => {
//         console.log(v);
//     });

// Antipattern
// from(Array.from({length: 10}, (_, index) => index))
//     .pipe(observeOn(asyncScheduler))
//     .subscribe(v => {
//         console.log(v);
//     });

// scheduled(
//     Array.from({length: 10}, (_, index) => index),
//     asapScheduler,
// ).subscribe(v => {
//     console.log(v);
// });

// interval(0).subscribe(v => {
//     console.log(v);
// });

// setInterval(() => {
//     console.log('interval')
// }, 0)
// Promise.resolve('123421').then(console.log)


// from(Array.from({length: 10}, (_, index) => index))
//     .pipe(
//         tap(() => {
//             console.log('default schedular');
//         }),
//         observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before async schedular');
//         }),
//         subscribeOn(asapScheduler),
//     )
//     .subscribe(v => {
//         console.log(v);
//     });

// from(Array.from({length: 10}, (_, index) => index))
//     .pipe(
//         tap(() => {
//             console.log('default schedular 1');
//         }),
//         // observeOn(asyncScheduler),
//         tap(() => {
//             console.log('before async schedular 1');
//         }),
//     )
//     .subscribe(v => {
//         console.log(v);
//     });
