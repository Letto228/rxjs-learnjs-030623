
// const stream$ = interval(1000).pipe(
//     share({
//         connector: () => new ReplaySubject<number>(1),
//         resetOnComplete: true,
//         resetOnError: true,
//         resetOnRefCountZero: false,
//     }),
// )

// const subscr = stream$.subscribe(v => {
//     terminalLog(`Sub 1 - ${v}`);
// })

// setTimeout(() => {
//     subscr.unsubscribe();
// }, 3000)

// setTimeout(() => {
//     stream$.subscribe(v => {
//         terminalLog(`Sub 2 - ${v}`);
//     })
// }, 6000);

// const stream$ = ajax({url: 'https://api.github.com/search/repositories?q=123', crossDomain: true})
//     .pipe(
//         map(({response}) => response),
//         share(),
//     )

// stream$.subscribe(v => console.log(v));
// stream$.subscribe(console.log);
// stream$.subscribe(console.log);