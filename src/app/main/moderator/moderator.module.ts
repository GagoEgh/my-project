import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ModeratorRouterModule } from "./moderator-router.module";
import { ModeratorComponent } from "./moderator.component";

@NgModule({ 
    declarations:[ModeratorComponent],
    imports:[ModeratorRouterModule,SharedModule,CommonModule],
    exports:[RouterModule],
    providers:[]
}) export class ModeratorModule{}