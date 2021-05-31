import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
const router: Routes = [
    { path: '', component: AuthComponent }
]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(router)],
    exports: []
}) export class AuthRoutingModule { }