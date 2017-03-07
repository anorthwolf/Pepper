import { NgModule } from '@angular/core';

import { LaunchRoutingModule } from './launch-routing.module';

import { LaunchPageComponent } from './launch-page.component';

@NgModule({
    imports: [
        LaunchRoutingModule
    ],
    declarations: [
        LaunchPageComponent
    ],
    exports: [
        LaunchPageComponent
    ]
})
export class LaunchPageModule {}