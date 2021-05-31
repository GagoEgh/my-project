import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MeinRouterModule } from "./mein-router.module";
import { MeinComponent } from "./mein.component";

@NgModule({
    declarations:[MeinComponent],
    imports:[CommonModule,MeinRouterModule],
    exports:[RouterModule],
    providers:[]
}) export class MeinModule{}