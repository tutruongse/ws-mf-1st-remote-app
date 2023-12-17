import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { PageNotFoundComponent } from '../../shared-components/page-not-found/page-not-found.component';
import { ModuleHomeComponent } from './components/module-home/module-home.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleHomeComponent,
    children: [
      { path: 'first-component', component: FirstComponent },
      { path: 'second-component', component: SecondComponent },
    ],
    title: 'Module Home component',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterOutlet, RouterLink]
})
export class FirstModuleRoutingModule { }
