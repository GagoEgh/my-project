import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OtherOrdersComponent } from "../other-orders/other-orders.component";
import { ModeratorSettingsComponent } from "./moderator-settings.component";

const router:Routes = [
    {path:'',component:ModeratorSettingsComponent}
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[]
}) export class ModeratorSettingsRouterModule{}