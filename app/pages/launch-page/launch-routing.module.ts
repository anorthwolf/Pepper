import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LaunchPageComponent } from './launch-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'launch', component: LaunchPageComponent }
  ])],
  exports: [RouterModule]
})
export class LaunchRoutingModule {}