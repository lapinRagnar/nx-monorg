import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomePageComponent, AboutComponent],
  imports: [CommonModule, HomeRoutingModule, IonicModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
