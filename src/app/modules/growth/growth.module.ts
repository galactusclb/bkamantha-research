import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GrowthRoutingModule } from './growth-routing.module';
import { ListComponent } from './list/list.component';

const declarations = [
  ListComponent
]

@NgModule({
  declarations,
  imports: [
    CommonModule,
    GrowthRoutingModule
  ]
})
export class GrowthModule { }
