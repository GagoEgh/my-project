import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OtherOrdersRouterModule } from "./other-orders-router.module";
import { OtherOrdersComponent } from "./other-orders.component";

@NgModule({
    declarations:[OtherOrdersComponent],
    imports:[CommonModule,OtherOrdersRouterModule],
    exports:[RouterModule]
}) export class OtherOrdersModule{}