// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

import { Observable, Subscriber } from "rxjs";

// // const stream$ = new Promise(resolve => {
// //     let count = 0;

// //     setInterval(() => {
// //         count += 1;

// //         console.log('setInterval ', count);
// //         resolve(count);
// //     }, 1000);
// // })

// // stream$.then(value => {
// //     terminalLog(`First terminal: ${value}`);
// // })

// // setTimeout(() => {
// //     stream$.then(value => {
// //         terminalLog(`Second terminal: ${value}`);
// //     })
// // }, 5000)

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         console.log('iteratorFn ', count);

// //         yield count;
// //     }
// // })();

// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);

// const stream$ = new Observable((subscriber: Subscriber<number>) => {
//     let count = 0;

//     console.log('START');

//     const intervalId = setInterval(() => {
//         count += 1;

//         if (count === 5) {
//             console.log('COMPLETE')
//             subscriber.complete();
//             // console.log('ERROR')
//             // subscriber.error(new Error('message'));

//             // throw new Error('123');
    
//             // return;
//         }

//         console.log('setInterval ', count);
//         subscriber.next(count);
//     }, 1000);

//     return () => {
//         console.log('DESTROY');
//         clearInterval(intervalId);
//     }
// })

// setTimeout(() => {
//     const subsription = new Subscription();

//     subsription.add(
//         stream$.subscribe({
//             next: v => {
//                 terminalLog(v);
//             },
//             complete: () => {
//                 terminalLog('COMPLETE');
//             },
//             error: (error: Error) => {
//                 terminalLog(`ERROR ${error.message}`);
//             }
//         })
//     );
//     // stream$.subscribe(v => { // next cb
//     //     terminalLog(v);
//     // });

//     setTimeout(() => {
//         subsription.add(
//             stream$.subscribe(v => { // next cb
//                 terminalLog(v);
//             })
//         );
//     }, 5000)

//     setTimeout(() => {
//         subsription.add(
//             stream$.subscribe(v => { // next cb
//                 terminalLog(v);
//             })
//         );
//     }, 8000)

//     setTimeout(() => {
//         subsription.unsubscribe();
//     }, 9000)
// }, 3000)

// function defer(cb: () => Observable<any>) {
//     return new Observable((subscriber: Subscriber<number>) => {
//         return cb().subscribe(subscriber);
//     })
// }