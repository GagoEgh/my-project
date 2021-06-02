import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { MeinRouterModule } from "./mein-router.module";
import { MeinComponent } from "./mein.component";

@NgModule({
    declarations:[MeinComponent],
    imports:[CommonModule,MeinRouterModule,SharedModule],
    exports:[RouterModule],
    providers:[]
}) export class MeinModule{}