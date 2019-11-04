import { AbstractControl } from '@angular/forms';

export function descriptionValidator(control: AbstractControl):({[key: string]: boolean} | null) {
  const description = control.value.toLowerCase();
  const regexForGLetter = /g/i;
  return (regexForGLetter.test(control.value) && checkIfMoreAthanK(description)) ? null : {descriptionValidator : true};
}

function checkIfMoreAthanK(description) {
  description = [...description];
  return description.filter(e => e === 'a').length > description.filter(e => e === 'k').length;
}
