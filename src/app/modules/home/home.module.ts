import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './component/home-view/home-view.component';

@NgModule({
    declarations: [


    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HomeViewComponent,
    ],
    exports:[

    ]

})
export class HomeModule { }
