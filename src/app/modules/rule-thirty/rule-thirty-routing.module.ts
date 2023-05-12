import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleThirtyComponent } from 'src/app/modules/rule-thirty/components/rule-thirty/rule-thirty.component';

export const DECLARED_COMPONENTS = [RuleThirtyComponent];

const routes: Routes = [{ path: '', component: RuleThirtyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuleThirtyRoutingModule {}
