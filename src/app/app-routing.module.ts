import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FileComponent } from './components/file/file.component';
import { TeamComponent } from './components/team/team.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'file',
    component: FileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
