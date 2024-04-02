import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { firebaseConfiguration } from 'firebase-login';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {
  lineData, lineList, choosenLineCounter, stationChooser, choosenSpeed, trackspeed, groupSelector, setableSpeed, lineDropDownBtn, group, time, track, stationBtn
  , movableSpeedBar, choosedUndergroundLine, u1Names, u2Names, u3Names, u4Names, u5Names, u6Names, u7Names, u8Names, u9Names, u1, u2, u3, u4, u5, u6, u7, u8, u9
} from 'src/assets/script';
import {
  changeValueToSpeed, openDropDownLine, chooseLine,
  stationChoosed, chooseTrack, calcView, calcNewView, setSpeedRange,
  loadUndergroundLine, chooseGroup, timeChoosed, openDropDownStation, openDropDownTrack, openDropDownGroup, openDropDownTime, addEventListenersToSpeedBar
} from 'src/assets/script';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  openDropDownLine = openDropDownLine
  changeValueToSpeed = changeValueToSpeed
  chooseLine = chooseLine
  stationChoosed = stationChoosed
  chooseTrack = chooseTrack
  calcView = calcView
  calcNewView = calcNewView
  setSpeedRange = setSpeedRange
  loadUndergroundLine = loadUndergroundLine
  chooseGroup = chooseGroup
  timeChoosed = timeChoosed
  openDropDownStation = openDropDownStation
  openDropDownTrack = openDropDownTrack
  openDropDownGroup = openDropDownGroup
  openDropDownTime = openDropDownTime
  lineData = lineData
  lineList = lineList
  choosenLineCounter = choosenLineCounter
  stationChooser = stationChooser
  choosenSpeed = choosenSpeed
  trackspeed = trackspeed
  groupSelector = groupSelector
  setableSpeed = setableSpeed
  lineDropDownBtn = lineDropDownBtn
  group = group
  time = time
  track = track
  stationBtn = stationBtn
  movableSpeedBar = movableSpeedBar
  choosedUndergroundLine = choosedUndergroundLine
  GL1 = 'GL1'
  GL2 = 'GL2'
  KG = 'KG'
  AG = 'AG'
  U1 = 'U1'
  U2 = 'U2'
  U3 = 'U3'
  U4 = 'U4'
  U5 = 'U5'
  U6 = 'U6'
  U7 = 'U7'
  U8 = 'U8'
  U9 = 'U9'
  u1Names = u1Names
  u2Names = u2Names
  u3Names = u3Names
  u4Names = u4Names
  u5Names = u5Names
  u6Names = u6Names
  u7Names = u7Names
  u8Names = u8Names
  u9Names = u9Names
  u1 = u1
  u2 = u2
  u3 = u3
  u4 = u4
  u5 = u5
  u6 = u6
  u7 = u7
  u8 = u8
  u9 = u9


  constructor() {

  }
  
  ngAfterViewInit() {
    addEventListenersToSpeedBar();
  }


}
