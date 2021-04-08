import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {VehicallistComponent} from "./components/vehicallist/vehicallist.component";
import {AddComponent} from "./components/add/add.component";
import {UpdateComponent} from "./components/update/update.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'show', component: VehicallistComponent},
  {path: 'add', component: AddComponent},
  {path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
