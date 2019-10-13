import { Component, OnInit } from '@angular/core';
import { StocksServiceService } from 'src/app/services/stocks-service.service';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(
    private stocksServiceService: StocksServiceService
  ) { }

  stocks: Stock[];

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void {
     this.stocksServiceService.getStocks()
     .subscribe(stockFromService => this.stocks = stockFromService);
  }

  removeStock(stock: Stock) {
   this.stocks.forEach((current, index) => {
      if (stock.symbol === current.symbol) {
        this.stocks.splice(index, 1);
      }
    });
  }

}
