import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeComponent } from './home/home.component';

import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: 'Home',
    component: HomeComponent
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
    },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, CatalogModule, HomeModule, RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
