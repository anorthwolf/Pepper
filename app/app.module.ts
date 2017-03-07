/**
 * Created by yxzhang on 9/23/16.
 */
import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { LoginPageModule } from "./pages/login-page/login-page.module";
import { ResearchPageModule } from "./pages/research-page/research-page.module";
import { LaunchPageModule } from "./pages/launch-page/launch-page.module";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        AppRoutingModule,
        CoreModule,
        LoginPageModule,
        ResearchPageModule,
        LaunchPageModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}