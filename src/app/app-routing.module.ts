import { AboutUsComponent } from './Pages/About Us/about-us/about-us.component';
import { BookingComponent } from './Pages/bookings/booking.component';
import { LoginComponent } from './Pages/logIn/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { Table2Component } from './user/customer/table2.component';
import { FeaturesComponent } from './Pages/features/features/features.component';
import { ServicesComponent } from './Pages/ourServices/services/services.component';
import { RoomsComponent } from './Pages/rooms/rooms/rooms.component';
import { ContactComponent } from './Pages/contact/contact/contact.component';
import { EmployeeComponent } from './user/employee/employee/employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent },
  {path: 'landing', component: LandingComponent},
  {path: "login", component:LoginComponent},
  {path: "table2", component:Table2Component},
  {path: "booking", component: BookingComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'features', component: FeaturesComponent},
  {path:'services', component: ServicesComponent},
  {path:'rooms', component: RoomsComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
