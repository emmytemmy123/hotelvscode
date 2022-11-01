import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Customer } from '../../Model/users/customer';
import { CustomerService } from '../../Service/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  styleUrls: ['./table-crud.component.css']
})
export class TableCrudComponent implements OnInit {

  floatInputText: any;

  customerDialog!: boolean;

  customers: any[]=[];

  customer!: Customer;

  selectedCustomer!: Customer[];

  submitted!: boolean;

  statuses!: any[];

  Delete!: string;

  toast: any;
   

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    nin: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    
  });


  constructor(private customerService: CustomerService, private messageService: MessageService,
              private confirmationService: ConfirmationService, private router: Router) { }


  ngOnInit(): void {
    this.getCustomers();
  
  }


  openNew() {
      //this.customer = {};
      this.submitted = false;
      this.customerDialog = true;
  }


  hideDialog() {
      this.customerDialog = false;
      this.submitted = false;
  }


  getCustomers(){
    this.customerService.getCustomerList().subscribe(result => {
      if(result.code=='200'){
        this.customers =result["data"]
      }else{
        this.customers =[]
      }
    });
  }
  

  saveCustomer() {
     


  }



deleteSelectedCustomer(){

  this.confirmationService.confirm({
    message: 'Are you sure you want to delete the selected customer?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
  
});

}


editCustomer(customers: Customer) {
  this.customer = {...customers};
  this.customerDialog = true;
}




}
