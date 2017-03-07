/**
 * Created by yxzhang on 9/28/16.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class NoteService {

    constructor(private http: Http) {}

    getNotes() {
        let url = "http://tamaledev.gencos.com/restapi/2.0/thread/?expand=thread;entry;entities;entity;source;submitter;&outputformat=json&page=1&rpp=50&showpermission=true&sortby=lastediteddate&sortorder=desc";
        let headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Authorization", "Basic [token" + global.token + "token]");
        
        return this.http.post(
            url,
            '',
            { headers: headers }
        );
    }
}