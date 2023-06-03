// import { Observable } from 'rxjs';
// import '../../assets/css/style.css';

// // const ws = new WebSocket('ws://localhost:8081');

// // ws.onopen = () => {
// //     ws.send('on');
// // };

// // const wsMessage$ = new Observable<MessageEvent>(subscriber => {
// //     console.log('START');

// //     function messageListener(message: MessageEvent) {
// //         console.log('NEXT ', message);
// //         subscriber.next(message);
// //     };

// //     function closeListener() {
// //         console.log('COMPLETE');
// //         subscriber.complete();
// //     }

// //     ws.addEventListener('message', messageListener);
// //     ws.addEventListener('close', closeListener);

// //     return () => {
// //         ws.removeEventListener('message', messageListener);
// //         ws.removeEventListener('close', closeListener);
// //         console.log('DESTROY');
// //     }
// // });

// // wsMessage$.subscribe(v => {
// //     terminalLog(`Sub 1 - ${v.data}`);
// // })

// // setTimeout(() => {
// //     wsMessage$.subscribe(v => {
// //         terminalLog(`Sub 2 - ${v.data}`);
// //     });
// // }, 4000)

// // ws is producer
// function createWSMessages$() {
//     return new Observable<MessageEvent>(subscriber => {
//         console.log('START');
//         const ws = new WebSocket('ws://localhost:8081');
    
//         ws.onopen = () => {
//             ws.send('on');
//         };
    
//         function messageListener(message: MessageEvent) {
//             console.log('NEXT ', message);
//             subscriber.next(message);
//         };
    
//         function closeListener() {
//             console.log('COMPLETE');
//             subscriber.complete();
//         }
    
//         ws.addEventListener('message', messageListener);
//         ws.addEventListener('close', closeListener);
    
//         return () => {
//             ws.removeEventListener('message', messageListener);
//             ws.removeEventListener('close', closeListener);
//             console.log('DESTROY');
//         }
//     });
// }
