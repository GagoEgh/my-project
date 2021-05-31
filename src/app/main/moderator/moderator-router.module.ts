import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModeratorComponent } from "./moderator.component";

const router:Routes = [
    {path:'', component:ModeratorComponent}
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[]
}) export class ModeratorRouterModule{}