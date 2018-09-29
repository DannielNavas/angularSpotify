import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*Componentes*/
import { DetailComponent } from '../simple/detail/detail.component';
import { PortalComponent } from '../simple/portal/portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
