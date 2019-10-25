import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private ss: StocksService) { }

  ngOnInit() {
  }

}
