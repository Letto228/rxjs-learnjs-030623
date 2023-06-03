// const source$ = interval(1000);
// -0-1-2-3-4-5-6-7-8-9-10-11-

// take(10)

// -0-1-2-3-4-5-6-7-8-9|

// map(value => value * 2)

// -0-2-4-6-8-10-12-14-16-18|

// filter(value => value % 3 === 0)

// -0- - -6- -  -12-  -  -18|

// skip(2)

// - - - - - -  -12-  -  -18|

// take(1)

// - - - - - -  -12|

// source$.pipe(
//     take(10),
//     map(value => value * 2),
//     take(2),
//     tap({
//         next: v => {
//             console.log(v);
    
//             return 0;
//         },
//         complete: () => {
//             console.log('COMPLETE 12')
//         }
//     }),
//     filter(value => value % 3 === 0),
//     skip(2),
//     take(1),
// ).subscribe({
//     next: v => {
//         terminalLog(v);
//     },
//     complete: () => {
//         console.log('COMPLETE');
//     }
// })
