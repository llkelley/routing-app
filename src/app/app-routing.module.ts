import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
  { path: '', component: FooComponent}
  , { path: 'foo', component: FooComponent }
  , { path: 'bar', component: BarComponent }
  
];

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  , declarations: []
})
export class AppRoutingModule { }
