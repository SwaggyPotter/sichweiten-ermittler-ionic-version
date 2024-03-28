import { Component } from '@angular/core';
import { firebaseConfiguration } from 'firebase-login';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {
  lineData, lineList, choosenLineCounter, stationChooser, choosenSpeed, trackspeed, groupSelector, setableSpeed, lineDropDownBtn, group, time, track, stationBtn
  , movableSpeedBar, choosedUndergroundLine
} from 'src/assets/script';
import {
  changeValueToSpeed, greetings, openDropDownLine, chooseLine,
  stationChoosed, chooseTrack, calcView, calcNewView, setSpeedRange,
  loadUndergroundLine, chooseGroup, timeChoosed, openDropDownStation, openDropDownTrack, openDropDownGroup, openDropDownTime
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

  constructor() {
    greetings()

  }
}
