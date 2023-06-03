import { AsyncSubject, Observable, map, share } from "rxjs";
import { ajax } from "rxjs/ajax";
import { User } from "./user.interface";

class UserService {
    readonly uniqueSequence$: Observable<string[]> = ajax<User[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1mj1pec',
        crossDomain: true,
        method: 'GET',
    }).pipe(
        map(({response}) => response.map(({profileName}) => profileName)),
        share({
            connector: () => new AsyncSubject(),
            resetOnRefCountZero: false,
            resetOnComplete: false,
        })
    )
}

export const userService = new UserService();