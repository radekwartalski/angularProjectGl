import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Stock } from 'src/app/models/stock';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StocksServiceService {

constructor(
  private httpClient: HttpClient
) { }

private stockUrl = 'https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=AAPL,GOOG,FB,AMZN,TWTR';

getStocks(): Observable<Stock[]>{
  return this.httpClient.get<Stock[]>(this.stockUrl);
}

}
