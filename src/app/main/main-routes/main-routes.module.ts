import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainRoutesRouterModule } from "./main-routes-router.module";
import { MainRoutesComponent } from "./main-routes.component";

@NgModule({
    declarations:[MainRoutesComponent],
    imports:[CommonModule,MainRoutesRouterModule],
    exports:[RouterModule],
    providers:[]
}) export class MainRoutesModules{}