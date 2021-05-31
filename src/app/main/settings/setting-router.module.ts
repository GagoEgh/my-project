import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsComponent } from "./settings.component";

const router:Routes = [
    {path:'',component:SettingsComponent}
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[]

}) export class SettingsRouterModule{}