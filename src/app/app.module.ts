import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {MatCurrencyFormatModule} from 'mat-currency-format';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HomePageComponent } from './compoment/home-page/home-page.component';
import { HistoryComponent } from './compoment/history/history.component';
import { CdkTableModule, DataSource} from '@angular/cdk/table';
import {MatTableModule} from "@angular/material/table";
import { DepositWithdrawalComponent } from './compoment/deposit-withdrawal/deposit-withdrawal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
   
    HistoryComponent,
    DepositWithdrawalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
     MatTableModule,
     CdkTableModule,
     MatCurrencyFormatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
