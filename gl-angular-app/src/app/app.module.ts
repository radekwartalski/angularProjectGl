import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './components/stock/stock.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditstockComponent } from './components/editstock/editstock.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { GeneratedStockComponent } from './components/generated-stock/generated-stock.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipes } from './helpers/customPipes';
import { LoginComponent } from './components/login/login.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    SpinnerComponent,
    NavbarComponent,
    EditstockComponent,
    HomeComponent,
    GeneratedStockComponent,
    UsersComponent,
    UserFormComponent,
    CustomPipes,
    LoginComponent,
    PopupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    CustomPipes
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
