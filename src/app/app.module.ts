import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { FormsModule,} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
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
import { ReactiveFormsModule } from '@angular/forms';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { ViewidComponent } from './viewid/viewid.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';





@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    MywebsiteComponent,
    EmployeeComponent,
    DirectivesComponent,
    FlipkartComponent,
    VehicleComponent,
    MyntraComponent,
    MailComponent,
    PintrestComponent,
    BlogComponent,
    ImdbComponent,
    WeatherComponent,
    ProfilesComponent,
    CarouselComponent,
    AccountsComponent,
    CreatevehicleComponent,
    IdcardComponent,
    CreateidcardComponent,
    CreateUserComponent,
    FormComponent,
    VehicledetailsComponent,
    ViewidComponent,
    Sibling1Component,
    Sibling2Component,
    ParentComponent,
    ChildComponent,
      RatingComponent,
      CapitalDirective,
      BalancePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
 
    
  ],
  providers: [
     { provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
