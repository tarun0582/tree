import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main/tree', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/treeModule/tree.module').then((m) => m.TreeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
