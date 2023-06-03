import { EMPTY, OperatorFunction, catchError, debounceTime, distinctUntilChanged, filter, map, of, pipe, retry, switchMap, timer } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

const searchDebounce = 300;

export function liveSearch<T>(
    urlCreate: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(searchDebounce),
        filter(searchParam => searchParam.length >= 3),
        distinctUntilChanged(),
        map((searchParam): AjaxConfig => ({
            ...requestConfig,
            url: urlCreate(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                delay: (error, retryCount) => timer(1000 * retryCount),
                resetOnSuccess: false,
            }),
            catchError(() => EMPTY),
        )),
    );
}

// EMPTY
// |

// NEVER
// --------------------------------

// THROW (throwError)
// x
