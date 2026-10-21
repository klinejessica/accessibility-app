import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping',
  imports: [],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})
export class Shipping {

}

function toggleBilling(): void{
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  for(const item of billingItems){
    (item as HTMLInputElement).disabled = !(item as HTMLInputElement).disabled;
  }
}

const billingCheckbox = document.getElementById("billing-checkbox");
if(billingCheckbox){
  billingCheckbox.addEventListener("change", toggleBilling);
}

