import { HttpClient} from '@angular/common/http';
import { UploadService } from './../../upload.service';
import { Customer } from '../../Model/users/customer';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CustomerService } from '../../Service/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

    uploadedFiles: any[] = [];

    customerDialog!: boolean;

    customers!: Customer[];

    customer!: Customer;

    selectedCustomers!: Customer[];

    submitted!: boolean;

    statuses!: any[];
    
    Delete!: string;

    uuid!: String;

    maxFileSize!: number;

    multiple!: boolean;

    touched!: boolean;

    shortLink: string = "";

    loading: boolean = false; // Flag variable

    file!: File; // Variable to store file
  
    image!: string | ArrayBuffer | null;

    selectedFile!: File;
    
        form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        nin: new FormControl('', Validators.required),
        photo: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        dateCreated: new FormControl('', Validators.required),
        lastModified: new FormControl('', Validators.required),

      });

    observe: any;
    fileInput: any;


    constructor(private customerService: CustomerService, private messageService: MessageService, private http: HttpClient,
                 private confirmationService: ConfirmationService, private uploadService: UploadService) { }

    ngOnInit() {
        this.getCustomers();
    }

   

    openNew() {
        //this.customer = {};
        this.submitted = false;
        this.customerDialog = true;
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

      onChange(event:any) {
        this.file = event.target.files[0];
    }


    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.uploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }

    onFileSelect(){

    }


    onUpload5(event: { files: any; }) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

    onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];

    }

    onUpload2(){
        const fd = new FormData();
        fd.append('photo', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:8181/USERS/customer/add', fd).subscribe(res =>{
            console.log(res);
        });
    }

      saveCustomer() {
        this.submitted = true;
    
        let customer : Customer = {
            name: this.form.controls['name'].value!,
            email: this.form.controls['email'].value!,
            phone: Number(this.form.controls['phone'].value!),
            address: this.form.controls['address'].value!,
            nin: Number(this.form.controls['nin'].value!),
            photo: this.form.controls['photo'].value!,
            username: this.form.controls['username'].value!,
            password: this.form.controls['password'].value!,
        }
        console.log(customer);
        this.customerService.saveCustomer(customer).subscribe(res => {
            console.log(res); 
          });
        
    }

    deleteSelectedCustomers(customer: Customer, uuid: String) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected customer?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
        });
        this.customerService.deleteCustomer(uuid).subscribe( result => {
            console.log(result);
            this.getCustomers();
          })
    }


    editCustomers(customer: Customer) {
        this.customer = {...customer};
        this.customerDialog = true;
    }


    deleteCustomers( uuid: String) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected customer?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
        });
        
        this.customerService.deleteCustomer(uuid).subscribe( result => {
            if(result.code=='200'){
                this.customers =result["data"]
              }else{
                this.customers =[]
              }
            console.log(result);
            this.getCustomers();
          })
    }


    hideDialog() {
        this.customerDialog = false;
        this.submitted = false;
    }
    
  

    findIndexById(uuid: string): number {
        let index = -1;
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].uuid === uuid) {
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
