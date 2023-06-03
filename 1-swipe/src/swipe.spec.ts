import { TestScheduler } from "rxjs/testing";
import { swipeFn$ } from "./swipe";

function createSubEvent(x: number): TouchEvent {
    return new TouchEvent('event', {
        changedTouches: [
            new Touch({clientX: x, identifier: 1, target: new EventTarget()})
        ]
    })
}

describe('Swipe', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        })
    })

    it('swipe test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const touchStart$ = cold(
                '-a----b------------|',
                {
                    a: createSubEvent(2),
                    b: createSubEvent(30),
                }
            );
            const touchEnd$ = cold(
                '----a----b-----c---|',
                {
                    a: createSubEvent(200),
                    b: createSubEvent(20),
                    c: createSubEvent(10)
                }
            );

            const swipe$ = swipeFn$(
                touchStart$,
                touchEnd$,
            );

            const expectedMarbles = '----a--------------|'
            const expectedMarblesValuewMap = {
                a: 198,
            }

            expectObservable(swipe$).toBe(expectedMarbles, expectedMarblesValuewMap);
        })
    })
})