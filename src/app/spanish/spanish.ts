import { Component } from '@angular/core';

@Component({
  selector: 'app-spanish',
  imports: [],
  templateUrl: './spanish.html',
  styleUrl: './spanish.css',
})
export class Spanish {

}

  // const contacts = [{name: "Aisha Khan", selected: false},
  // ]

  // const filterInput = document.querySelector(".filter input");
  // const select = document.querySelector("select");

  // function populateOptions(array) {
  //   select?.innerHTML ="";

  //   array.forEach((obj) => {
  //     const option = document.createElement("option");
  //     option.textContent = obj.name;
  //     option.selected = obj.selected;
  //     select?.appendChild(option);
  //   });
  // }

  // function filterOptions(filter, array){
  //   if(filter.trim() === ""){
  //     populateOptions(array);
  //   } else {
  //     const filteredArray = array.filter((obj) => 
  //     obj.name.toLowerCase().startsWith(filter.toLowerCase()),
  //   );
  //   populateOptions(filteredArray);
  //   }
  // }

  // filterInput?.addEventListener("input", () => {
  //   filterOptions(filterInput.ariaValueMax, contacts);
  // });

  // select?.addEventListener("change", () => {
  //   const allCurrentValues = Array.from(select.options).map((option) => option.value,);
  //   const currentSelectedValues = Array.from(select.selectedOptions).map((option) =>option.value,);

  //   contacts.forEach((contact) => {
  //     if (allCurrentValues.includes(contact.name)) {
  //       contact.selected = currentSelectedValues.includes(contact.name);
  //     }
  //   });
  // });

  // populateOptions(contacts);

