import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent,children:[
  {path:'contactlist',component:ContactListComponent},
  {path:'addcontact',component:AddContactComponent},
  {path:'home',component:HomeComponent}]},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
