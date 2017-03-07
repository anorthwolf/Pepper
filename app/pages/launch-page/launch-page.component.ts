/**
 * Created by yxzhang on 01/18/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { StackLayout } from 'ui/layouts/stack-layout';
import { EventData } from 'data/observable';
import { RouterExtensions } from "nativescript-angular/router";
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import * as Enums from 'ui/enums';
import colorModule = require("color");

@Component({
    selector: 'launch-page',
    templateUrl: './pages/launch-page/launch-page.component.html',
    styleUrls: ['./pages/launch-page/launch-page.component.css']
})
export class LaunchPageComponent implements OnInit, OnDestroy {
    subscription: Subscription;

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit () {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    pageLoaded(args: EventData) {
        let page:StackLayout = <StackLayout>args.object;
        let img = page.getViewById('launchImage');
        page.animate({ backgroundColor: new colorModule.Color('#2a3d53'), duration: 1000, curve: Enums.AnimationCurve.easeIn })
            .then( () => {
                return img.animate({ scale: { x: 0.6, y: 0.6 }, duration: 2000, curve: Enums.AnimationCurve.easeIn })
            })
            .then(() => {
                let timer = TimerObservable.create(2000);
                this.subscription = timer.subscribe(() => {
                    this.routerExtensions.navigate(["/login"], { clearHistory: true });
                });
            });
    }
}