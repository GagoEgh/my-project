import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthServiceService } from "./auth-service.service";

import { AuthComponent } from "./auth.component";

@NgModule({
    declarations:[AuthComponent],
    imports:[CommonModule,AuthRoutingModule,SharedModule,HttpClientModule],
    exports:[RouterModule],
    providers:[AuthServiceService]
}) export class AuthModule{}