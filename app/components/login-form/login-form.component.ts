/**
 * Created by yxzhang on 9/26/16.
 */
import { Component, Input } from "@angular/core";
import { User } from "../../models/user.model";
import { AuthService } from "../../business/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "login-form",
    providers: [ AuthService ],
    templateUrl: "components/login-form/login-form.component.html"
})
export class LoginFormComponent {
    user: User;
    _name: string = '';

    @Input()
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }

    get name(): string { return this._name; }

    constructor(private userService: AuthService, private router: Router) {
        this.user = new User();
        this.user.usr = "admin";
    }

    submit() {
        this.userService.login(this.user)
            .map(response => response.json())
            .subscribe(
                (response) => {
                    if(response.hasOwnProperty("_body")) {
                        global.token = response["_body"].userinfo.token;
                    }
                    else if(response.hasOwnProperty("userinfo")){
                        global.token = response["userinfo"].token;
                    }
                    this.router.navigate(["/research"]);
                },
                (e) => {
                    alert("Login failure: " + e);
                }
            );
    }
}