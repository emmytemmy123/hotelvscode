import { EmployeeService } from 'src/app/Service/employee.service';
import { ProductService } from './Service/productservice';
import { BookingComponent } from './Pages/bookings/booking.component';
import { LoginComponent } from './Pages/logIn/login.component';
import { PhotoService } from './Service/photo.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { HomeComponent } from './Pages/home/home.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { AutoTextFeildComponent } from './components/auto-text-feild/auto-text-feild.component';
import { CalenderComponent } from './components/calender/calender.component';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectComponent } from './components/cascade-select/cascade-select.component';
import { CascadeSelectModule } from "primeng/cascadeselect";
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ChipsComponent } from './components/chips/chips.component';
import { DropdownModule } from 'primeng/dropdown';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { AutoPlayGalleryComponent } from './components/auto-play-gallery/auto-play-gallery.component';
import {GalleriaModule} from 'primeng/galleria';
import { CarouselComponent } from './components/carousel/carousel.component';
import {CarouselModule} from 'primeng/carousel';
import { CustomerService } from './Service/customer.service';
import { TableCrudComponent } from './components/table-crud/table-crud.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './Pages/landing/landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { AutoGalleryComponent } from './components/auto-gallery/auto-gallery.component';
import { Table2Component } from './user/customer/table2.component';
import { AssetsComponent } from './Assets/assets/assets.component';
import { AssetsCategoryComponent } from './Assets/assets-category/assets-category.component';
import { DamagedAssetsComponent } from './Assets/damaged-assets/damaged-assets.component';
import { DocumentComponent } from './Others/document/document.component';
import { HotelComponent } from './Others/hotel/hotel.component';
import { ProductOrderComponent } from './Products/product-order/product-order.component';
import { ProductOrderItemsComponent } from './Products/product-order-items/product-order-items.component';
import { ProductPurchaseComponent } from './Products/product-purchase/product-purchase.component';
import { ProductsComponent } from './Products/products/products.component';
import { RoomsComponent } from './Rooms/rooms/rooms.component';
import { RoomTypeComponent } from './Rooms/room-type/room-type.component';
import { ServiceRequestComponent } from './Services/service-request/service-request.component';
import { ServicesComponent } from './Services/services/services.component';
import { AccountCategoryComponent } from './Transactions/account-category/account-category.component';
import { AccountChartComponent } from './Transactions/account-chart/account-chart.component';
import { BookingReminderComponent } from './Transactions/booking-reminder/booking-reminder.component';
import { ExpenseRequestComponent } from './Transactions/expense-request/expense-request.component';
import { ExpensesComponent } from './Transactions/expenses/expenses.component';
import { MaintenanceRequestComponent } from './Transactions/maintenance-request/maintenance-request.component';
import { PaymentComponent } from './Transactions/payment/payment.component';
import { EmployeeShiftComponent } from './user/employee-shift/employee-shift.component';
import { RoleComponent } from './user/role/role.component';
import { UserComponent } from './user/user/user.component';
import { AboutUsComponent } from './Pages/About Us/about-us/about-us.component';
import { FeaturesComponent } from './Pages/features/features/features.component';
import { ContactComponent } from './Pages/contact/contact/contact.component';
import { EmployeeComponent } from './user/employee/employee/employee.component';
import { UploadComponent } from './upload/upload.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AutoTextFeildComponent,
    CalenderComponent,
    CascadeSelectComponent,
    CheckboxComponent,
    ChipsComponent,
    DropDownComponent,
    HomeComponent,
    InputTextComponent,
    InputTextAreaComponent,
    PasswordComponent,
    RadioButtonComponent,
    AutoPlayGalleryComponent,
    CarouselComponent,
    TableCrudComponent,
    LandingComponent,
    LoginComponent,
    BookingComponent,
    AutoGalleryComponent,
    Table2Component,
    AssetsComponent,
    AssetsCategoryComponent,
    DamagedAssetsComponent,
    DocumentComponent,
    HotelComponent,
    ProductOrderComponent,
    ProductOrderItemsComponent,
    ProductPurchaseComponent,
    ProductsComponent,
    RoomsComponent,
    RoomTypeComponent,
    ServiceRequestComponent,
    ServicesComponent,
    AccountCategoryComponent,
    AccountChartComponent,
    BookingReminderComponent,
    ExpenseRequestComponent,
    ExpensesComponent,
    MaintenanceRequestComponent,
    PaymentComponent,
    EmployeeShiftComponent,
    RoleComponent,
    UserComponent,
    AboutUsComponent,
    FeaturesComponent,
    ContactComponent,
    EmployeeComponent,
    UploadComponent,
    ImageUploadComponent
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    MegaMenuModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    HttpClientModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    RadioButtonModule,
    GalleriaModule,
    TableModule,
    SliderModule,
    DialogModule,
    ContextMenuModule,
    ToastModule,
    ProgressBarModule,
    CarouselModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    ConfirmDialogModule,
    MenubarModule,
    PanelModule,
    ChartModule,
    StyleClassModule,
    CommonModule,
    FileUploadModule


  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService, EmployeeService, PhotoService, ProductService, ConfirmationService, MessageService ]
})

export class AppModule { }
