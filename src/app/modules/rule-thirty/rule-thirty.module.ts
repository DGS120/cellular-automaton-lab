import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DECLARED_COMPONENTS,
  RuleThirtyRoutingModule,
} from 'src/app/modules/rule-thirty/rule-thirty-routing.module';

@NgModule({
  declarations: [...DECLARED_COMPONENTS],
  imports: [CommonModule, RuleThirtyRoutingModule],
})
export class RuleThirtyModule {}
