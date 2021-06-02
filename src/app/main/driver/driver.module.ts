import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DriverRouterModule } from "./driver-router.module";
import { DriverComponent } from "./driver.component";

@NgModule({
    declarations:[DriverComponent],
    imports:[CommonModule,DriverRouterModule],
    exports:[RouterModule]

}) export class DriverModule{}