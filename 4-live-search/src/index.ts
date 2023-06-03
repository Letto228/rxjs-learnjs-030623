import 'bootstrap';
import '../../assets/css/style.css';
import  './styles.css';
import { catchError, filter, fromEvent, map, of, tap } from 'rxjs';
import { liveSearch } from './live-search';
import { Card } from './card.interface';
import { requestToHtmlString } from './request-to-html-string';

const inputElement = document.getElementById('search') as HTMLElement;
const containerElement = document.querySelector('.container') as HTMLElement;

fromEvent(inputElement, 'input')
    .pipe(
        map(({target}) => (target as HTMLInputElement).value),
        liveSearch<{items: Card[]}>(q => `https://api.github.com/search/repositories?q=${q}`),
        tap(console.log),
        map(({items}) => requestToHtmlString(items)),
    )
    .subscribe(html => {
        containerElement.innerHTML = html;
    })
