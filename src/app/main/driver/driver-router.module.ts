import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DriverComponent } from "./driver.component";
    const router:Routes = [
        {path:'',component:DriverComponent}
    ]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[]

}) export class DriverRouterModule{}