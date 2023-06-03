// import { Observable, OperatorFunction, Subscriber, interval, map, of } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// function double$(source$: Observable<number>): Observable<number> {
//     return new Observable(subscriber => {
//         const subscription = source$.subscribe({
            // next: value => {
            //     subscriber.next(value * 2);
            // },
            // error: error => {
            //     subscriber.error(error);
            // },
            // complete: () => {
            //     subscriber.complete();
            // },
//         });

//         return () => {
//             subscription.unsubscribe();
//         };
//     });
// }

// double$(interval(1000)).subscribe(v => {
//     terminalLog(v);
// })

// function customMap<T, M>(): (source$: Observable<T>) => Observable<M> {
// function customMap<T, M>(cb: (value: T) => M): OperatorFunction<T, M> {
//     return (source$: Observable<T>): Observable<M> => new Observable(subscriber => {
//         // const subsription = source$.subscribe({
//         //     next: value => {
//         //         subscriber.next(cb(value));
//         //     },
//         //     error: error => {
//         //         subscriber.error(error);
//         //     },
//         //     complete: () => {
//         //         subscriber.complete();
//         //     },
//         // });

//         // return subsription;
//         return source$.subscribe({
//             next: value => {
//                 subscriber.next(cb(value));
//             },
//             error: error => {
//                 subscriber.error(error);
//             },
//             complete: () => {
//                 subscriber.complete();
//             },
//         });
//     })
// }

// const operatorRxJs$ = map(value => value + '!');

// operatorRxJs$(interval(1000)).subscribe(v => {
//     terminalLog(v);
// })

// const double$ = map<number, number>(value => value * 2);

// its bad practic |
//                 V

// function stub$(_: Observable<unknown>): Observable<'stub'> {
//     return of('stub');
// }

// stub$(
//     new Observable(subscriber => {
//         console.log('CREATE');
//         subscriber.next('test');
//         subscriber.complete();
//     })
// ).subscribe(v => {
//     terminalLog(v);
// })
