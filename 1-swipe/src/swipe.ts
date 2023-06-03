import { Observable, filter, fromEvent, map, merge, zip } from 'rxjs';
import '../../assets/css/style.css';

const upEvent$ = merge(
    fromEvent<MouseEvent>(document, 'mouseup'),
    fromEvent<TouchEvent>(document, 'touchend'),
);
const downEvent$ = merge(
    fromEvent<MouseEvent>(document, 'mousedown'),
    fromEvent<TouchEvent>(document, 'touchstart'),
);

function getXPosition(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
        ? event.clientX
        : event.changedTouches.item(0)!.clientX;
}

export function swipeFn$(
    downEvent$: Observable<MouseEvent | TouchEvent>,
    upEvent$: Observable<MouseEvent | TouchEvent>,
): Observable<number> {
    return zip(
        downEvent$.pipe(map(getXPosition)),
        upEvent$.pipe(map(getXPosition)),
    ).pipe(
        map(([start, end]) => end - start),
        filter(diff => Math.abs(diff) > 30),
    )
}

export const swipe$ = swipeFn$(downEvent$, upEvent$);
