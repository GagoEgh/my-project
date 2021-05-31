import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModeratorRouterModule } from "./moderator-router.module";
import { ModeratorComponent } from "./moderator.component";

@NgModule({ 
    declarations:[ModeratorComponent],
    imports:[CommonModule,ModeratorRouterModule],
    exports:[RouterModule],
    providers:[]
}) export class ModeratorModule{}