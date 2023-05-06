import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOfLifeComponent } from 'src/app/modules/game-of-life/components/game-of-life/game-of-life.component';

const routes: Routes = [{ path: '', component: GameOfLifeComponent }];

export const DECLARED_COMPONENTS = [GameOfLifeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameOfLifeRoutingModule {}
