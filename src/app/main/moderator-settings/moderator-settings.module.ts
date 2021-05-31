import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModeratorSettingsRouterModule } from "./moderator-settings-router.module";
import { ModeratorSettingsComponent } from "./moderator-settings.component";

@NgModule({
    declarations:[ModeratorSettingsComponent],
    imports:[CommonModule,ModeratorSettingsRouterModule],
    exports:[RouterModule]
}) export class ModeratorSettingsModule{}