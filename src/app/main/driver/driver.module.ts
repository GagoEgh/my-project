import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { DriverRouterModule } from "./driver-router.module";
import { DriverComponent } from "./driver.component";

@NgModule({
    declarations:[DriverComponent],
    imports:[SharedModule,DriverRouterModule],
    exports:[RouterModule]

}) export class DriverModule{}