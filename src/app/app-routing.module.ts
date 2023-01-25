import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSchematicComponent } from './dashboard-schematic/dashboard-schematic.component';
import { TablaDataComponent } from './tabla-data/tabla-data.component';

const routes: Routes = [
  {path: 'dash', component: DashboardSchematicComponent},
  {path: 'table', component: TablaDataComponent},
  {path: '', component: DashboardSchematicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
