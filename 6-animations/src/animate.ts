import { Observable, animationFrameScheduler, asapScheduler, asyncScheduler, interval, map, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(scheduler = animationFrameScheduler): Observable<number> {
    const startTime = scheduler.now();

    return interval(0, scheduler).pipe(
        map(() => scheduler.now() - startTime) // временной diff
    );
}

function duration$(allMs: number): Observable<number> {
    return time$(animationFrameScheduler).pipe(
        tap(console.log),
        map(time => time / allMs),
        takeWhile(percentage => percentage <= 1),
    )
}

const diffInPx = 100;

export function animationDownElement$(element: HTMLElement, animationTime: number) {
    return duration$(animationTime).pipe(
        map(animationFn),
        map(percentage => percentage * diffInPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`;
        }),
    );
}