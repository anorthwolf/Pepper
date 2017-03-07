/**
 * Created by yxzhang on 12/07/16.
 */
import { NgModule, Optional, SkipSelf } from "@angular/core";

import { coreComponents } from "./components/core-components.const";

@NgModule({
    declarations: [
        ...coreComponents
    ],
    exports: [
        ...coreComponents
    ]
})
export class CoreModule {

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot() {
        return {
            ngModule: CoreModule
        };
    }
}