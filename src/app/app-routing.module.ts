import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './Shared/layout/layout.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { SublocationComponent } from './Home/Master/sublocation/sublocation.component';
import { SupplierComponent } from './Home/Master/supplier/supplier.component';
import { DepartmentComponent } from './Home/Master/Product/department/department.component';
import { CategoryComponent } from './Home/Master/Product/category/category.component';
import { ProductComponent } from './Home/Master/Product/product/product.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'sublocation', component: SublocationComponent },
      { path: 'supplier', component: SupplierComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent }
    ]
  }
  // ,
  // {
  //   path: '', redirectTo: 'login', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
