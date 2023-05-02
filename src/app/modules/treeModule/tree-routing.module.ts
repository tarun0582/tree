import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TreeComponent } from './components/tree/tree.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {path: 'tree', component:TreeComponent },
          {path: 'main',component:MainComponent},
          {path: '', redirectTo: '/main/tree', pathMatch: 'full' },
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
