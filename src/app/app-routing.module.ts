import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game-of-life',
    loadChildren: () =>
      import('./modules/game-of-life/game-of-life.module').then(
        m => m.GameOfLifeModule
      ),
  },
  {
    path: 'rule-30',
    loadChildren: () =>
      import('./modules/rule-thirty/rule-thirty.module').then(
        m => m.RuleThirtyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
