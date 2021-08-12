import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConversionFormComponent } from './components/conversion-form/conversion-form.component';

const routes: Routes = [
	{
		path:'',
		redirectTo:'/conversion-moneda',
		pathMatch:'full'
	},
	{
 		path:'conversion-moneda',
 		component:ConversionFormComponent
	}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
