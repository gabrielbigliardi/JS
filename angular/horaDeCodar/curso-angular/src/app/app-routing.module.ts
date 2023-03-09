import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PipesComponent } from './components/pipes/pipes.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';

const routes: Routes = [
  {path: '', component: InterpolationComponent },
  {path: 'list', component: ListRenderComponent },
  {path: 'pipes', component: PipesComponent },
  {path: 'twowaydatabinding', component: TwoWayBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //dizendo q as rotas começam no root da aplicação
  exports: [RouterModule]
})
export class AppRoutingModule { }
