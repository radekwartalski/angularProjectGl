import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';
import { EditstockComponent } from './components/editstock/editstock.component';


const routes: Routes = [
  { path: '', component: StockComponent},
  { path: 'editstock/:symbol', component: EditstockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
