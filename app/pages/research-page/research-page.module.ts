import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { ResearchRoutingModule } from './research-routing.module';

import { ResearchPageComponent } from './research-page.component';

@NgModule({
    imports: [
        ComponentsModule,
        ResearchRoutingModule
    ],
    declarations: [
        ResearchPageComponent
    ],
    exports: [
        ResearchPageComponent
    ]
})
export class ResearchPageModule {}