import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../../models/stock';
import { StocksService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.scss']
})
export class EditstockComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stockService: StocksService
  ) { }

  stock: Stock;

  ngOnInit() {
    this.getStockBySymbol();
  }

  getStockBySymbol(){
    const symbol = this.route.snapshot.paramMap.get('symbol');
    this.stockService.getStockBySymbol(symbol).subscribe(
      stock => this.stock = {...stock}['0']);
  }

}
