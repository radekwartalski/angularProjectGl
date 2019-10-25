import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks-service.service';
import { StockNew } from 'src/app/models/StockNew';
import { ActivatedRoute } from '@angular/router';
import { CustomPipes } from '../../helpers/customPipes';

@Component({
  selector: 'app-generated-stock',
  templateUrl: './generated-stock.component.html',
  styleUrls: ['./generated-stock.component.css']
})
export class GeneratedStockComponent implements OnInit {

  constructor(
    private stocksService: StocksService,
    private route: ActivatedRoute,
  ) { }

  stocks: StockNew[];

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void {
     this.stocksService.getRandomlyGeneratedStock()
     .subscribe(stockFromService => this.stocks = stockFromService);
  }

  removeStock(stock: StockNew) {
   this.stocks.forEach((current, index) => {
      if (stock.symbol === current.symbol) {
        this.stocks.splice(index, 1);
      }
    });
  }

  refreshStocks(){
    this.stocksService.getRandomlyGeneratedStock()
    .subscribe(stockFromService => this.stocks = stockFromService);
  }
}
