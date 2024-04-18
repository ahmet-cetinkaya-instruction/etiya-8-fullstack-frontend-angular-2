import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestPageComponent { }
