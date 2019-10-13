import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Stock } from 'src/app/models/stock';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class StocksServiceService {

constructor(
  private httpClient: HttpClient
) { }

private stockUrl = 'https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=';

getStocks(): Observable<Stock[]> {
  return this.httpClient.get<Stock[]>(this.stockUrl.concat('AAPL,GOOG,FB,AMZN,TWTR'));
}

getStockBySymbol(symbol: string): Observable<Stock> {
  return this.httpClient.get<Stock>(`${this.stockUrl}${symbol}`);
}

removeStock(symbol: string) {
  return this.httpClient.delete(`${this.stockUrl}${symbol}`, httpOptions, );
}
}

