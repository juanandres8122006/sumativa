// home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NewsCardComponent } from '../news-card/news-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [HomePage, NavBarComponent, NewsCardComponent],
})
export class HomePageModule {}
