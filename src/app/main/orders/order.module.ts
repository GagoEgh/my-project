import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OrdersRouterModule } from "./orders-router.module";
import { OrdersComponent } from "./orders.component";

@NgModule({
    declarations:[OrdersComponent],
    imports:[CommonModule, OrdersRouterModule],
    exports:[RouterModule],
    providers:[]
}) export class OrderModule{}