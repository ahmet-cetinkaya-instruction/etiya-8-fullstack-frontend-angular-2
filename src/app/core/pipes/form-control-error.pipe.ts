import { Pipe, type PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'appFormControlError',
  standalone: true,
})
export class FormControlErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null): string {
    console.log(errors);

    if (errors?.['required']) return 'This field is required.';
    if (errors?.['minlength'])
      return `This field must be at least ${errors['minlength'].requiredLength} characters but it has ${errors['minlength'].actualLength} characters.`;

    return 'Invalid field value.';
  }
}
