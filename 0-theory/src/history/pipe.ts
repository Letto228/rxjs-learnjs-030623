
// filter(value => value % 3)
// take(5)

// const stream$ = interval(1000);
// const streamMultiple3$ = filter<number>(value => (value % 3) === 0)(stream$);
// const streamMultiple3AndTake5$ = take(5)(streamMultiple3$);

// streamMultiple3AndTake5$.subscribe(v => {
//     terminalLog(v);
// })

// take(5)(
//     filter<number>(value => (value % 3) === 0)(
//         stream$
//     )
// ).subscribe(v => {
//     terminalLog(v);
// })

// function customPipe(
//     ...operators: OperatorFunction<any, any>[]
// ): OperatorFunction<any, any> {
//     return (source$: Observable<any>): Observable<any> => operators.reduce(
//         (prevOperatorStream$, operator$) => operator$(prevOperatorStream$),
//         source$,
//     )
// }

// const multiple3AndTake5$ = pipe(
//     filter<number>(value => (value % 3) === 0),
//     take(5),
// );

// multiple3AndTake5$(stream$).subscribe(v => {
//     terminalLog(v);
// })

// stream$.pipe(
//     filter<number>(value => (value % 3) === 0),
//     take(5),
// ).subscribe(v => {
//     terminalLog(v);
// })

// pipe(...)(source$) ~ source$.pipe(...)