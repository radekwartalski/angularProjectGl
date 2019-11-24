import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }


}
