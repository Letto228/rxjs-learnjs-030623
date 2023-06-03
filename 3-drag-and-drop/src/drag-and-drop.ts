import { Observable, fromEvent, map, switchMap, take, takeUntil, tap } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    const elementMousedown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    return drag$(
        elementMousedown$,
        mousemove$,
        mouseup$
    );
}

function drag$(
    mousedown$: Observable<MouseEvent>,
    mousemove$: Observable<MouseEvent>,
    mouseup$: Observable<MouseEvent>,
): Observable<ElementPosition> {
    return mousedown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        switchMap(({offsetX, offsetY}: MouseEvent) => mousemove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}: MouseEvent): ElementPosition => ({
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            takeUntil(mouseup$.pipe(take(1))),
        )),
    )
}