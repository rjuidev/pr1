import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeoComponent } from './ceo/ceo.component';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [
    CeoComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
