import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  identificator: string;
  customer: Customer;
 
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.identificator = "";
  }
 
  private searchPerson() {
    this.customerService.getCustomerByIdentificator(this.identificator)
      .subscribe(persons => this.customer = persons);
  }
 
  onSubmit() {
    this.searchPerson();
  }

}
