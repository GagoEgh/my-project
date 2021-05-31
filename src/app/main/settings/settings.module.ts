import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SettingsRouterModule } from "./setting-router.module";
import { SettingsComponent } from "./settings.component";

@NgModule({
    declarations:[SettingsComponent],
    imports:[CommonModule,SettingsRouterModule],
    exports:[RouterModule]
}) export class SettingsModule{}