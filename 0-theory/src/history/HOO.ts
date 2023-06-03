// const stream$ = interval(2000).pipe(
//     // take(6),
//     // map(value => of(value)), // Observable<Observable<number>>
//     // mergeAll(), // Observable<number>
//     tap(console.log),
//     exhaustMap(count => interval(500).pipe(
//         take(8),
//         tap(value => {
//             console.log(`${count} - ${value}`)
//         })
//     ))
// ).subscribe(v => {
//     terminalLog(v);
// });
