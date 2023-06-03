// timer(5000, 1000).subscribe(v => {
//     terminalLog(v);
// })

// interval(1000).subscribe(v => {
//     terminalLog(v);
// })

// of(1, 2, [3, 4], {count: 5}).subscribe(v => {
//     terminalLog(v);
// })

// from(fetch('')).subscribe(v => {
//     terminalLog(v);
// })

// ajax({
//     url: '',
//     crossDomain: true,
//     method: 'GET',
// }).subscribe(v => {
//     terminalLog(v);
// })

// shortUser$ = stream$.pipe(
//     switchMap(({id}) => id
//         ? this.getAllUSerInfo$(id)
//         : of(guest),
//     )
// )