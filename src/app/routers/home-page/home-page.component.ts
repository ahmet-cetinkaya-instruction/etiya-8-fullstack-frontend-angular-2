import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutComponent,
    ModelsListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
