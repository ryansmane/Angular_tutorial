import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes.component';
import { Dashboard } from './components/dashboard.component';
import { HeroDetail } from './components/hero-detail.component'


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent }, 
  { path: 'dashboard', component: Dashboard }, 
  { path: 'detail/:id', component: HeroDetail}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
