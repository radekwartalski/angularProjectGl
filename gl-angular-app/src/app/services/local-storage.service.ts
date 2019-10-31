import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

constructor() { }

putItemsIntoLocalStorage(key: string , value: any){
  let items;

  if(localStorage.getItem(key) === null){
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem(key));
  }

  items.push(value);
  localStorage.setItem(key, JSON.stringify(items));
}

resetLocalStorage(){
  localStorage.clear();
}

getAllItemsFromLocalStorage(key: string){
  return localStorage.getItem(key);
}

getSpecificItemFromLocalStorage(key: string, propertyId: string, propertyValue: string ) {
 const items = JSON.parse(localStorage.getItem(key));
 return items.find(item => {
   return item[`${propertyId}`] === propertyValue;
  });
}

doesItemExistInLocalStorage(key: string, propertyId: string, propertyValue: string): boolean {
  return this.getSpecificItemFromLocalStorage(key, propertyId, propertyValue) ? true : false;
}

}
