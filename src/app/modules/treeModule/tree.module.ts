import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './components/tree/tree.component';
import { MainComponent } from './components/main/main.component';
import { TreeRoutingModule } from './tree-routing.module';

@NgModule({
    declarations: [MainComponent, TreeComponent],
    imports: [
        CommonModule,
        TreeRoutingModule,
    ],
    exports: [

    ]

})
export class TreeModule { }
