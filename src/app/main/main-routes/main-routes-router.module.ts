import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainRoutesComponent } from "./main-routes.component";

const router:Routes = [
    {path:'',component:MainRoutesComponent}
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[],
    providers:[]
}) export class MainRoutesRouterModule{}