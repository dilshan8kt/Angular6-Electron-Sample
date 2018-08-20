import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './Shared/layout/layout.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { SublocationComponent } from './Home/Master/sublocation/sublocation.component';
import { SupplierComponent } from './Home/Master/supplier/supplier.component';
import { CategoryComponent } from './Home/Master/Product/category/category.component';
import { DepartmentComponent } from './Home/Master/Product/department/department.component';
import { ProductComponent } from './Home/Master/Product/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    SublocationComponent,
    SupplierComponent,
    CategoryComponent,
    DepartmentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
