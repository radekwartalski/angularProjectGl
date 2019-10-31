import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';
import { EditstockComponent } from './components/editstock/editstock.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { GeneratedStockComponent } from './components/generated-stock/generated-stock.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'stock', component: StockComponent},
  { path: 'editstock/:symbol', component: EditstockComponent},
  { path: 'users', component: UsersComponent},
  { path: 'generatedStockList', component: GeneratedStockComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
