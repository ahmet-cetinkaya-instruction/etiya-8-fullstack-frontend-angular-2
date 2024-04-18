import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, MainLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
