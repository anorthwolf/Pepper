import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginPageComponent }
  ])],
  exports: [RouterModule]
})
export class LoginRoutingModule {}