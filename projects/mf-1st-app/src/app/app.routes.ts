import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },
    {
        path: 'first-component',
        loadChildren: () => import('./modules/first-module/first-module.module').then(m => m.FirstModuleModule)
    }
];
