import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ResearchPageComponent }    from './research-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'research', component: ResearchPageComponent }
  ])],
  exports: [RouterModule]
})
export class ResearchRoutingModule {}