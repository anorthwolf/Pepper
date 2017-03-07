import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [
        ComponentsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ],
    exports: [
        LoginPageComponent
    ]
})
export class LoginPageModule {}