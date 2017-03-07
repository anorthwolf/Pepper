/**
 * Created by yxzhang on 9/26/16.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "../models/user.model";

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    login(user: User) {
        let url = "http://tamaledev.gencos.com/restapi/2.0/token/?outputformat=json";
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("username", "admin");
        headers.append("Authorization", "Basic Gh+VN4+UprI=");

        try {
            return this.http.request(
                url,
                { headers: headers, method: "POST", body: 'test' }
            );
        } catch(e) {
            console.log(e);
        }
    }
}