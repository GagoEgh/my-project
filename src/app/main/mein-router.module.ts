import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MeinComponent } from "./mein.component";
const router: Routes = [
    {
        path: '', component: MeinComponent, children: [
            { path: 'users', loadChildren: () => import('./users/users.module').then(e => e.UsersModule) },
            { path: 'main-routes', loadChildren: () => import('./main-routes/main-routes-router.module').then(e => e.MainRoutesRouterModule) },
            { path: 'orders', loadChildren: () => import('./orders/order.module').then(e => e.OrderModule) },
            { path: 'moderator', loadChildren: () => import('./moderator/moderator.module').then(e => e.ModeratorModule) },
            { path: 'other-orders', loadChildren: () => import('./other-orders/other-orders.module').then(e => e.OtherOrdersModule) },
            { path: 'moderator-settings', loadChildren: () => import('./moderator-settings/moderator-settings.module').then(e => e.ModeratorSettingsModule) },
            { path: 'settings', loadChildren: () => import('./settings/settings.module').then(e => e.SettingsModule) },
            { path: 'driver', loadChildren: () => import('./driver/driver.module').then(e => e.DriverModule) },
            { path: '', pathMatch: 'full', redirectTo: 'driver' },
        ]
    },


]
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
   
}) export class MeinRouterModule { }