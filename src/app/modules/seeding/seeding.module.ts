import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeedingRoutingModule } from './seeding-routing.module';
import { ListComponent } from './list/list.component';

const components = [ListComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SeedingRoutingModule
  ]
})
export class SeedingModule { }
