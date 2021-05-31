import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OtherOrdersComponent } from "./other-orders.component";

const router:Routes = [
    {path:'',component:OtherOrdersComponent}
]
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[]
}) export class OtherOrdersRouterModule{}