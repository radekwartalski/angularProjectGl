import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../../models/stock';
import { StocksServiceService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.scss']
})
export class EditstockComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StocksServiceService
  ) { }

  stock: Stock;

  ngOnInit() {
    const symbol = this.route.snapshot.paramMap.get('symbol');
    console.log(symbol)
    this.stockService.getStockBySymbol(symbol).subscribe(
      stock => this.stock = stock);
  }

}
