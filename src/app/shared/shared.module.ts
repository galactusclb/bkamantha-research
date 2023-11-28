import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { RouterModule } from "@angular/router";

const components: any[] = [
    NavigationComponent
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ...components
    ]
})
export class SharedModule { }