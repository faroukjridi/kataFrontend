import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-deposit-withdrawal',
  templateUrl: './deposit-withdrawal.component.html',
  styleUrls: ['./deposit-withdrawal.component.css']
})
export class DepositWithdrawalComponent implements OnInit {
  testvalue: number = 12345.67;

  title = "MatCurrencyFormatLibrary";
  usAmount = 100;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  deposit(amount){
  this.accountService.deposit(amount).subscribe({
      next: data => {
    
      },
      error: error => {
    
      }
  })
  }
  withdrawal ( amount ) {
  this.accountService.withdrawal(amount).subscribe({

    next: data => {
    
    },
    error: error => {
  
    }
})

}
updateUSAmount(event) {
  this.usAmount = event.target.value;
}
}
