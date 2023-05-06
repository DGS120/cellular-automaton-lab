import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DECLARED_COMPONENTS,
  GameOfLifeRoutingModule,
} from 'src/app/modules/game-of-life/game-of-life-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DECLARED_COMPONENTS],
  imports: [
    CommonModule,
    GameOfLifeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GameOfLifeModule {}
