import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RandomImageComponent } from './pages/random-image/random-image.component';
import { ListImageComponent } from './pages/list-image/list-image.component';

const routes: Routes = [
  { path: '', component: ListImageComponent, },
  { path: 'random', component: RandomImageComponent },
  { path: 'list', component: ListImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
