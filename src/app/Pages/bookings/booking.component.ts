import { CustomerService } from './../../Service/customer.service';
import { Component } from '@angular/core';
import { Customer } from 'src/app/Model/users/customer';
import { LayoutService } from '../../Service/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding:1rem;
        }

        :host ::ng-deep .pi-eye{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class BookingComponent {

    customer!: Customer[];

    valCheck: string[] = ['remember'];

    password!: string;


    form = new FormGroup({
        uuid : new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        nin: new FormControl('', Validators.required),
        photo: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        dateCreated: new FormControl('', Validators.required),
        lastModified: new FormControl('', Validators.required),

      });

    customerService: any;

    roomCategory!: any[];

    roomNumber!: any[];

    cascadeSelectRooms!: any[];

    

    constructor(public layoutService: LayoutService,  customerService: CustomerService) {
        this.roomCategory = [
            { roomCategory: "Standard" },
            { roomCategory: "Family" },
            { roomCategory: "Single" },
            { roomCategory: "Deluxe" },
            { roomCategory: "Luxury" },
            { roomCategory: "Couple" }

          ];

     }


     ngOnInit(){

        this.cascadeSelectRooms = [
            {
              name: "Standard",
          
                  roomNumber: [
                    { cname: "Room 101", code: "A-SY" },
                    { cname: "Room 102", code: "A-NE" },
                    { cname: "Room 103", code: "A-WO" }
                  ]
                },

            {
              name: "Canada",
              code: "CA",
              states: [
                {
                  name: "Quebec",
                  cities: [
                    { cname: "Montreal", code: "C-MO" },
                    { cname: "Quebec City", code: "C-QU" }
                  ]
                },
                {
                  name: "Ontario",
                  cities: [
                    { cname: "Ottawa", code: "C-OT" },
                    { cname: "Toronto", code: "C-TO" }
                  ]
                }
              ]
            },
            {
              name: "United States",
              code: "US",
              states: [
                {
                  name: "California",
                  cities: [
                    { cname: "Los Angeles", code: "US-LA" },
                    { cname: "San Diego", code: "US-SD" },
                    { cname: "San Francisco", code: "US-SF" }
                  ]
                },
                {
                  name: "Florida",
                  cities: [
                    { cname: "Jacksonville", code: "US-JA" },
                    { cname: "Miami", code: "US-MI" },
                    { cname: "Tampa", code: "US-TA" },
                    { cname: "Orlando", code: "US-OR" }
                  ]
                },
                {
                  name: "Texas",
                  cities: [
                    { cname: "Austin", code: "US-AU" },
                    { cname: "Dallas", code: "US-DA" },
                    { cname: "Houston", code: "US-HO" }
                  ]
                }
              ]
            }
          ];

     }


    hideDialog(){

    }

    saveCustomer(){
        this.customerService.saveCustomer(this.form.value).subscribe((result: any) => {
            console.log(result); 
          });

    }




}
