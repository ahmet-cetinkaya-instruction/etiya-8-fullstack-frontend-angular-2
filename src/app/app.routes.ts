import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    // children: []
  },
  {
    path: 'home', // /home
    // pathMatch: 'prefix', // Default // ^(/home)
    component: HomePageComponent,
    // children: [
    //   {
    //     path: "models", // /home/models
    //     // pathMatch: 'prefix', // ^(/home/models)
    //     component: HomePageComponent,
    //   }
    // ]
  }
];
