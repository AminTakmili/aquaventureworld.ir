import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './core/services/storage.service';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    private isBrowser: boolean | undefined;
     token:string|null=  "1" ;

    constructor(
        public http: HttpClient,
        private storage:LocalStorageService
    ) {


    }

    title = 'aquaventureworld.ir';

    ngOnInit(): void {
         this.token =  this.storage.getItem("token");

        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        if(!this.token){
            this.getToken().subscribe(async (res: any) => {
                if(res.token){
                     this.storage.setItem("token",res.token)
                }
            }, async (error: any) => {
                console.log(error)
            });
        }
        console.log(this.token);
    }


    getToken() {

        const params = {
            username: 'users',
            password: ')WZYNahGbv5*Q9VueouYxt^B'
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + `${token}`,

            }),
            // params: params
        };
        // but this does NOT work

        // console.log(environment.apiurl+"/posts");
        return this.http.post<any>(environment.apiurl + "/jwt-auth/v1/token/", JSON.stringify(params), httpOptions);
    }
}
