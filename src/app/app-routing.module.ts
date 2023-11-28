import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "customers",
    pathMatch: "full"
  },
  {
    path: "customers",
    loadChildren: () => import("./modules/customers/customers.module").then((m) => m.CustomersModule)
  },
  {
    path: "growth",
    loadChildren: () => import("./modules/growth/growth.module").then((m) => m.GrowthModule)
  },
  {
    path: "seedings",
    loadChildren: () => import("./modules/seeding/seeding.module").then(m => m.SeedingModule)
  },
  {
    path: "seeds",
    loadChildren: () => import("./modules/seed/seed.module").then(m => m.SeedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
