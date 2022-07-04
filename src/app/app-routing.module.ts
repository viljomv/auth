import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {path:'login',  component:LoginComponent

},
// {path:'' ,redirectTo:"login",pathMatch:'full'},

  {path:'home',  component:HomeComponent,
  canActivate:[AuthGuard]
},
 {path:'user',component:UserComponent,
   canActivate:[AuthGuard]

 },
  {path:'contacts',
  component:ContactsComponent,
  canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
