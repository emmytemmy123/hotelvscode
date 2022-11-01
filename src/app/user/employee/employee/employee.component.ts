import { Employee } from './../../../Model/users/employee';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    employeeDialog!: boolean;

    employees!: Employee[];

    employee!: Employee;

    selectedEmployees!: Employee[];

    submitted!: boolean;

    statuses!: any[];
    
    Delete!: string;

    uuid!: String;

        form = new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        designation: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        dateCreated: new FormControl('', Validators.required),
        lastModified: new FormControl('', Validators.required),
      });
    

    constructor(private employeeService: EmployeeService, private messageService: MessageService,
         private confirmationService: ConfirmationService) { }


    ngOnInit() {
        this.getEmployees();
    }


    openNew() {
        //this.customer = {};
        this.submitted = false;
        this.employeeDialog = true;
    }

    getEmployees(){
        this.employeeService.getEmployeeList().subscribe(result => {
          if(result.code=='200'){
            this.employees =result["data"]
          }else{
            this.employees =[]
          }
        });
      }

      saveEmployees() {
        this.submitted = true;
        console.log(this.form.value);
        
    }

    deleteSelectedEmployees(employee: Employee, uuid: String) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected customer?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
        });
        this.employeeService.deleteEmployee(uuid).subscribe( result => {
            console.log(result);
          })
    }


    editEmployees(employee: Employee) {
        this.employee = {...employee};
        this.employeeDialog = true;
    }


    deleteEmployees(employee: Employee, uuid: String) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected customer?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
        });
        this.employeeService.deleteEmployee(uuid).subscribe( result => {
            console.log(result);
          })
    }


    hideDialog() {
        this.employeeDialog = false;
        this.submitted = false;
    }
    
  
    findIndexById(uuid: string): number {
        let index = -1;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].uuid === uuid) {
                index = i;
                break;
            }
        }
        return index;
    }


    createId(): string {
        let uuid = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            uuid += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return uuid;
    }

}
