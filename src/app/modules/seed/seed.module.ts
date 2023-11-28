import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeedRoutingModule } from './seed-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';

const components = [ListComponent]

@NgModule({
  declarations: [components, CreateComponent],
  imports: [
    CommonModule,
    SeedRoutingModule,
    FormsModule
  ]
})
export class SeedModule { }
