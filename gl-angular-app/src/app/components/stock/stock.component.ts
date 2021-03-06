import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks-service.service';
import { Stock } from 'src/app/models/stock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

  constructor(
    private stocksServiceService: StocksService,
    private route: ActivatedRoute,
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

  refreshStocks(){
    this.stocksServiceService.getStocks()
    .subscribe(stockFromService => this.stocks = stockFromService);
  }
}
