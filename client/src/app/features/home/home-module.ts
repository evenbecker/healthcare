import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './pages/home/home';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [Home],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule {}
