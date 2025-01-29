import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { EmployeeComponent } from './employee/employee.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailComponent } from './mail/mail.component';
import { PintrestComponent } from './pintrest/pintrest.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { IdcardComponent } from './idcard/idcard.component';
import { CreateidcardComponent } from './createidcard/createidcard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormComponent } from './form/form.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { ViewidComponent } from './viewid/viewid.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {
    path: '',component: MywebsiteComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'databinding', component: DatabindingComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'directives',component: DirectivesComponent,},
      { path: 'flipkart', component: FlipkartComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'myntra', component: MyntraComponent },
      { path: 'Mail', component: MailComponent },
      {path: 'pintrest',component: PintrestComponent,},
      { path: 'blog', component: BlogComponent },
      { path: 'imdb', component: ImdbComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'profiles', component: ProfilesComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'createvehicle', component: CreatevehicleComponent },
      { path: 'idcard', component: IdcardComponent },
      { path: 'createidcard', component: CreateidcardComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'form', component:FormComponent },
      { path: 'vehicledetails/:id', component:VehicledetailsComponent },
      { path: 'edit-vehicle/:id', component: CreatevehicleComponent },
      { path: 'viewid/:id', component:ViewidComponent },
      { path: 'editid/:id', component:CreateidcardComponent },
      { path: 'sibling1', component:Sibling1Component },
      { path: 'sibling2', component:Sibling2Component},
      {path:'parent', component:ParentComponent},
      {path:'child', component:ChildComponent},
      {path:'rating', component:RatingComponent},
      {path:"payments",loadChildren:() => import ('./payments/payments.module').then(m=> m.PaymentsModule)}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
