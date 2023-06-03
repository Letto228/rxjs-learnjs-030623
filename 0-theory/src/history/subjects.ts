
// const stream$ = new AsyncSubject<number>();

// stream$.subscribe(v => {
//     terminalLog(`Sub 1 - ${v}`);
// });

// stream$.next(1);
// stream$.next(2);
// stream$.next(3);

// setTimeout(() => {
//     stream$.subscribe(v => {
//         terminalLog(`Sub 2 - ${v}`);
//     })
// }, 4000)

// setTimeout(() => {
//     stream$.next(4);
//     stream$.next(5);
//     stream$.next(6);
// }, 6000)

// setTimeout(() => {
//     stream$.complete();
// }, 7000)


// function getItems$<T>(url: string): Observable<T> {
//     let asyncSubject: AsyncSubject<T>;

//     return new Observable(subscriber => {
//         if (!asyncSubject) {
//             asyncSubject = new AsyncSubject<T>();

//             ajax({url, crossDomain: true})
//                 .pipe(map(({response}) => response as T))
//                 .subscribe(asyncSubject);
//         }

//         return asyncSubject.subscribe(subscriber);
//     })
// }

// const res$ = getItems$('https://api.github.com/search/repositories?q=123');

// res$.subscribe(v => console.log(v)).unsubscribe();
// res$.subscribe(console.log);
// res$.subscribe(console.log);