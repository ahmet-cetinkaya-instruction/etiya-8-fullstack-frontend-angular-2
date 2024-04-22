import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { ModelDetailsPageComponent } from './routers/model-details-page/model-details-page.component';

export const routes: Routes = [
  // Home
  {
    path: '', // /
    pathMatch: 'full',
    redirectTo: 'home',
    // children: []
  },
  {
    path: 'home', // /home
    // pathMatch: 'prefix', // Default // ^(/home)
    component: MainLayoutComponent,
    children: [
      {
        path: 'models', // /home/models
        component: HomePageComponent,
      },
      {
        path: 'models/:modelId', // /home/models/1
        // : ile başlayanlar route parametresi olur.
        component: ModelDetailsPageComponent,
      },
    ],
  },
  // Test Page
  {
    path: 'layout-test',
    component: TestPageComponent,
  },
  // Create Brand Page
  {
    path: 'brands/create',
    component: CreateBrandPageComponent,
  },
  // 404 Not Found Page
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
];
