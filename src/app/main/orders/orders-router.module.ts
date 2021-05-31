import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";

const router:Routes = [
    {path:'',component:OrdersComponent}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(router)],
    exports:[],

}) export class OrdersRouterModule{}