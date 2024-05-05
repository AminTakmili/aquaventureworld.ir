import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../share-module/header/header.component';
import { FooterComponent } from '../../../../share-module/footer/footer.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}
