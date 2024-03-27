import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { trackData } from '../data';



import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  lineList = document.getElementById('undergroundLine')
  choosenLineCounter = 0;
  stationChooser = document.getElementById('station')
  choosenSpeed: any
  trackspeed: any
  lineData: any
  groupSelector = document.getElementById('GrpSelector')
  setableSpeed = document.getElementById('speedRange')
  lineDropDownBtn = document.getElementById('lineDropDownBtn')
  group: any
  time: any
  track: any
  stationBtn = document.getElementById('stationDropdownBtn')
  movableSpeedBar = document.getElementById('speedRange')
  choosedUndergroundLine: any
}