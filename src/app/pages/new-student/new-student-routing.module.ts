import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStudentPage } from './new-student.page';

const routes: Routes = [
  {  path: '', redirectTo: 'newstudent', pathMatch: 'full'},
  {  path: 'home', loadChildren: () => import('../../home/home.module').then(m => m.HomePageModule)},
  {  path: 'newstudent', loadChildren: () => import('../../pages/new-student/new-student.module').then (m => m.NewStudentPageModule)},
  //  component: NewStudentPage
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStudentPageRoutingModule {}
