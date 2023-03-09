import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: InterpolationComponent },
  {path: 'list', component: ListRenderComponent },
  {path: 'pipes', component: PipesComponent },
  {path: 'twowaydatabinding', component: TwoWayBindingComponent },
  {path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //dizendo q as rotas começam no root da aplicação
  exports: [RouterModule]
})
export class AppRoutingModule { }
