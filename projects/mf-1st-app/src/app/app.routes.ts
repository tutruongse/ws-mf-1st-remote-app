import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared-components/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'App Home component',
    },
    {
        path: '',
        redirectTo: '/home',
        title: 'App Home component',
        pathMatch: 'full'
    },
    {
        path: 'first-module',
        loadChildren: () => import('./modules/first-module/first-module.module').then(m => m.FirstModuleModule)
    }
];
