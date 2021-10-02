import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable, } from "@angular/core";

@Injectable()
export class Service {
    constructor(private httpClient: HttpClient) { }

    getData(){
        const options: {
            headers?: HttpHeaders | {
                [header: string]: string | string[] ;
            };
            observe?: 'body';
            params?: HttpParams | {
                [param: string]: string | string[];
            };
            reportProgress?: boolean;
            responseType?: 'json';
            withCredentials?: boolean;
        } = {
            headers: {
            }
        }

        return this.httpClient.get('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts', options);
    }
}