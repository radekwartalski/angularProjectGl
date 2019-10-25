import { AbstractControl } from '@angular/forms';

export function descriptionValidator(control: AbstractControl):({[key: string]: boolean} | null) {
  const description = control.value.toLowerCase();
  const regexForGLetter = /g/i;
  if(regexForGLetter.test(control.value) && checkIfMoreAthanK(description)) {
    return {descriptionValidator : true}
  } else {
    return null;
  }
}

function checkIfMoreAthanK(description){
  description = [...description];
  let aCounter = 0;
  let kCounter = 0;
  description.forEach(element =>{
    if(element === 'a'){
      aCounter ++;
    } else if (element === 'k'){
      kCounter ++;
    }
  });

  return (aCounter > kCounter)
}
