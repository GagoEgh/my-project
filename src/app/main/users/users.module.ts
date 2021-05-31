import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersRouterModule } from "./users-router.module";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule,UsersRouterModule],
    exports: [RouterModule],
    providers: []
}) export class UsersModule { }