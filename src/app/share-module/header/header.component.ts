import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MenuResposne, headerMenu } from "@aqua/models/header.model";
import { LocalStorageService } from "src/app/core/services/storage.service";


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(
        public http: HttpClient,
        private storage: LocalStorageService,
    ) {

    }

    ngOnInit() {

        // this.getHeader().subscribe(async (res: any) => {
        //     console.log(res);
        // }, async (error: any) => {
        //     console.log(error)
        // });

    }

    getHeader() {

        // const token = (this.login ? this.user.access_token : environment.token)
        // const params = { _fields : "author,id,excerpt,title,link,featured_media_src_url,featured_media,categories,tags,slug" };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + `${this.storage.getItem("token")}`,
            }),
            // params: params
        };
        // but this does NOT work

        // console.log(environment.apiurl+"/posts");
        return this.http.get<MenuResposne<headerMenu[]>>(environment.apiurl + "/wp-api-menus/v2/menus/18", httpOptions);
        //header 18
        //fotter 17

    }


}
