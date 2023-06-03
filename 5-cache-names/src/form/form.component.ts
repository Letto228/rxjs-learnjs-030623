import { combineLatest, distinctUntilChanged, fromEvent, map, startWith } from "rxjs";
import { userService } from "./user.service";

export class FormComponent {
    private readonly inputElement!: HTMLInputElement;
    private readonly buttonElement!: HTMLButtonElement;

    constructor(formContainer: HTMLElement) {
        const inputElement = formContainer.querySelector('input');
        const buttonElement = formContainer.querySelector('button');

        if (!inputElement || !buttonElement) {
            throw new Error('Форма не имеет необходимых элементов');
        }

        this.inputElement = inputElement;
        this.buttonElement = buttonElement;

        this.listenInputChange();
        this.listenSendValue();
    }

    private listenInputChange() {
        const inputValue$ = fromEvent<InputEvent>(this.inputElement, 'input')
            .pipe(
                map(({target}) => (target as HTMLInputElement).value),
                startWith(this.inputElement.value),
                distinctUntilChanged(),
            );

        combineLatest([
            inputValue$,
            userService.uniqueSequence$,
        ]).subscribe(([inputValue, names]) => {
            this.updateFormValidState(inputValue, names);
        })
    }

    private updateFormValidState(inputValue: string, names: string[]) {
        const isValid = inputValue && names.includes(inputValue);

        this.buttonElement.disabled = !isValid;

        if (isValid) {
            this.inputElement.classList.remove('error');

            return;
        }

        this.inputElement.classList.add('error');
    }

    private listenSendValue() {
        fromEvent(this.buttonElement, 'click').subscribe(() => {
            console.log(this.inputElement.value);
        })
    }
}