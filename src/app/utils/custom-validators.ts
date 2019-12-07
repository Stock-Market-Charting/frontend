import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value;
        const confirmedPassword: string = control.get('confirmedPassword').value;

        if (password !== confirmedPassword) {
            control.get('confirmedPassword').setErrors({ matched: true });
        }
    }
}
