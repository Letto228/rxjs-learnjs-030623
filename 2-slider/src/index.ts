import 'bootstrap';
import 'bootstrap-slider';
import '../../assets/css/style.css';
import  './styles.css';
import  './slider';
import { createSlider$ } from './slider';
import { distinctUntilChanged, fromEvent, map, withLatestFrom } from 'rxjs';
import { terminalLog } from '../../utils/log-in-terminal';

const buttonElement = document.getElementById('send-result') as HTMLElement;

fromEvent(buttonElement, 'click').pipe(
    withLatestFrom(
        createSlider$('quality'),
        createSlider$('rating'),
        createSlider$('actual'),
    ),
    map(([_clickEvent, quality, rating, actual]) => (quality + rating + actual) / 3),
    distinctUntilChanged(),
).subscribe(v => {
    terminalLog(`SEND ${v}`);
})

// createSlider$('quality')
// createSlider$('rating')
// createSlider$('actual')