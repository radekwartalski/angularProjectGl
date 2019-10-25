import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Stock } from 'src/app/models/stock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockNew } from '../../app/models/StockNew';
import { from } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class StocksService {

constructor(
  private httpClient: HttpClient
) { }

private stockUrl = 'https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=';

getStocks(): Observable<Stock[]> {
  return this.httpClient.get<Stock[]>(this.stockUrl.concat('AAPL,GOOG,FB,AMZN,TWTR'));
}

getStockBySymbol(symbol): Observable<Stock> {
  return this.httpClient.get<Stock>(`${this.stockUrl}${symbol}`);
}

getRandomlyGeneratedStock(): Observable<StockNew[]> {
  const array = this.generateNewStocksArray(10);
  return from([array]);
}


// --> functions that help generates stocks <--
private generateNewStocksArray(numberOfStocks: number): StockNew[] {
  const generatedStocksArray = [];
  for(let i = 0; i < numberOfStocks; i++){
    generatedStocksArray[i] = this.generateStock();
  }
  return generatedStocksArray;
}

// function that generates single stock
private generateStock(): StockNew {
  return {
    symbol: this.generateRandomName(),
    name: 'MyNameIs' + this.generateRandomName(),
    change: this.generateRandomChange(),
    price: this.generateRandomPrice()
  }
}

// function that generates randomName
private generateRandomName(): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for ( let i = 0; i < 4; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// function that generates randomChange
private generateRandomChange(): number {
  return Number((Math.random() * 201 - 100).toFixed(4));
}

// function that generates randomPrice
private generateRandomPrice(): number {
  return Number((Math.random() * 201 - 100).toFixed(2));
}

}

