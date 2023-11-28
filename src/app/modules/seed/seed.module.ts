import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeedRoutingModule } from './seed-routing.module';
import { ListComponent } from './list/list.component';

const components = [ListComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SeedRoutingModule
  ]
})
export class SeedModule { }
