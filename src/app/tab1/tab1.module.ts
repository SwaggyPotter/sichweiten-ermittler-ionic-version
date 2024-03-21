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

  constructor() {
    console.log(trackData)
  }


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


  /**
   * Eventlistener für den Regler für das Tempo (Click Event)
   
  movableSpeedBar.addEventListener('click', () => {
    changeValueToSpeed(movableSpeedBar.value)
  })*/


  /**
   * Eventlistener für den Regler für das Tempo (Touch Event)
  
  movableSpeedBar.addEventListener('touchend', () => {
    changeValueToSpeed(movableSpeedBar.value)
  }) */


  /**
   * Basierend auf der ausgewählten Prozentzahl beim Regler wird das entsprechende Tempo gewählt
   * und die Sichtweite neu errechnet
   * @param {number} percent 
   */
  changeValueToSpeed(percent: any) {
    if (percent == 100) {
      this.trackspeed = '70'
      calcNewView()
    }
    if (percent == 84) {
      this.trackspeed = '60'
      calcNewView()
    }
    if (percent == 68) {
      this.trackspeed = '50'
      calcNewView()
    }
    if (percent == 52) {
      this.trackspeed = '40'
      calcNewView()
    }
    if (percent == 36) {
      this.trackspeed = '25'
      calcNewView()
    }
    if (percent == 16) {
      this.trackspeed = '15'
      calcNewView()
    }
    if (percent == 0) {
      document.getElementById('viewPoint').innerText = `Gleis gesperrt`
    }
  }


  /**
   * Lädt die Banhöfe in kürzeln je nach ausgewählter linie
   */
  stationChoosed(station: any) {
    this.stationBtn.innerText = station
    if (this.choosedUndergroundLine == 'U1') {
      this.lineData = this.u1[station]
    }
    if (this.choosedUndergroundLine == 'U2') {
      this.lineData = this.u2[station]
    }
    if (this.choosedUndergroundLine == 'U3') {
      this.lineData = this.u3[station]
    }
    if (this.choosedUndergroundLine == 'U4') {
      this.lineData = this.u4[station]
    }
    if (this.choosedUndergroundLine == 'U5') {
      this.lineData = this.u5[station]
    }
    if (this.choosedUndergroundLine == 'U6') {
      this.lineData = this.u6[station]
    }
    if (this.choosedUndergroundLine == 'U7') {
      this.lineData = this.u7[station]
    }
    if (this.choosedUndergroundLine == 'U8') {
      this.lineData = this.u8[station]
    }
    if (this.choosedUndergroundLine == 'U9') {
      this.lineData = trackData
    }
  }


  /**
   * Ändert den Text der Gruppenauswahl. Die Variable mit der Gruppenart wird ein Wert mit 
   * KG(Kleingruppe) oder AG(Arbeitsgruppe) zugewiesen.
   * @param {string} chGroup Gruppenart (Klein-, oder Arbeitsgruppe)
   */
  chooseGroup(chGroup: any) {
    if (chGroup == "KG") {
      document.getElementById('groupChoosen').innerText = "Kleingruppe"
    }
    else if (chGroup == "AG") {
      document.getElementById('groupChoosen').innerText = "Arbeitsgruppe"
    }
    this.group = chGroup
  }


  /**
   * Ändert das ausgewählte Gleis zu Gleis eins oder zwei
   * @param {string} x Das ausgewählte Gleis als String
   */
  chooseTrack(x: any) {
    if (x == "GL1") {
      document.getElementById('trackBTN').innerText = "Gleis 1"
    }
    else if (x == "GL2") {
      document.getElementById('trackBTN').innerText = "Gleis 2"
    }
    this.track = x
  }


  /**
   * Lädt anhand der Daten die Erforderliche Sichtweite
   */
  calcView() {
    let gradient = lineData[track]
    let viewCode = group + gradient + time
    trackspeed = lineData['GES']
    let viewPointPosition = speed.indexOf(Number(trackspeed))
    let view = views[viewCode][viewPointPosition]
    document.getElementById('viewPoint').innerText = `Die erforderliche Sichtweite beträgt: ${view}m`
    document.getElementById('resetBTNContainer').innerHTML = `<p id="resetBTN" onclick="reset()">zurücksetzen</p>`
    document.getElementById('speedContainer').style.display = 'flex'
    setSpeedRange()
  }


  /**
   * Berechnet die neue Sichtweite durch bewegen des Reglers
   */
  calcNewView() {
    let gradient = lineData[track]
    let viewCode = group + gradient + time
    let viewPointPosition = speed.indexOf(Number(trackspeed))
    let view = views[viewCode][viewPointPosition]
    document.getElementById('viewPoint').innerText = `Die erforderliche Sichtweite beträgt: ${view}m`
    document.getElementById('speedContainer').style.display = 'flex'
    setSpeedRange()
  }


  /**
   * Setzt die Value von dem Tempo auf das normale streckentempo
   */
  setSpeedRange() {
    setableSpeed = document.getElementById('speedRange')
    if (trackspeed == 70) {
      setableSpeed.value = 100
    }
    if (trackspeed == 60) {
      setableSpeed.value = 84
    }
    if (trackspeed == 50) {
      setableSpeed.value = 68
    }
    if (trackspeed == 40) {
      setableSpeed.value = 52
    }
    if (trackspeed == 25) {
      setableSpeed.value = 36
    }
    if (trackspeed == 15) {
      setableSpeed.value = 16
    }
  }


  /**
   * Lädt die Bahnhofnamen auf der Strecke
   */
  chooseLine(line) {
    lineDropDownBtn.innerText = line
    choosedUndergroundLine = line
    if (line == 'U1') {
      loadUndergroundLine(u1Names)
    }
    if (line == 'U2') {
      loadUndergroundLine(u2Names)
    }
    if (line == 'U3') {
      loadUndergroundLine(u3Names)
    }
    if (line == 'U4') {
      loadUndergroundLine(u4Names)
    }
    if (line == 'U5') {
      loadUndergroundLine(u5Names)
    }
    if (line == 'U6') {
      loadUndergroundLine(u6Names)
    }
    if (line == 'U7') {
      loadUndergroundLine(u7Names)
    }
    if (line == 'U8') {
      loadUndergroundLine(u8Names)
    }
    if (line == 'U9') {
      loadUndergroundLine(u9Names)
    }
  }


  /**
   * Füllt die Auswahl mit namen der Bahnhöfe 
   * @param {string} lineNames Linien Name U1,U2,U3.....
   */
  loadUndergroundLine(lineNames) {
    document.getElementById('station').innerHTML = ''
    for (let i = 0; i < lineNames.length; i++) {
      const element = lineNames[i];
      document.getElementById('station').innerHTML += `<p class="dropDownItem"  onclick="stationChoosed('${lineNames[i]}')">${lineNames[i]}</p>`
    }
  }


  /**
   * Ändert die Räumzeiten basierend auf der Gruppe.
   * @param {string} gr Gruppenart (Klein-, Arbeitsgruppe)
   */
  chooseGroup(gr) {
    if (gr == 'AG') {
      group = 'AG'
      document.getElementById('groupChoosen').innerText = `Arbeitsgruppe`
      document.getElementById('timeChoose').innerHTML = `
        <p class="dropDownItem"  onclick="timeChoosed(10)">10s</p>
        <p class="dropDownItem"  onclick="timeChoosed(20)">20s</p>`
    }
    else if (gr == 'KG') {
      group = 'KG'
      document.getElementById('groupChoosen').innerText = `Kleingruppe`
      document.getElementById('timeChoose').innerHTML = `
        <p class="dropDownItem" onclick="timeChoosed(7)">7s</p>
        <p class="dropDownItem" onclick="timeChoosed(10)">10s</p>
        <p class="dropDownItem" onclick="timeChoosed(15)">15s</p>
        <p class="dropDownItem" onclick="timeChoosed(20)">20s</p>
        `
    }
  }


  /**
   * Funktion zum ändern der Räumzeit
   * @param {number} seconds
   */
  timeChoosed(seconds) {
    time = seconds
    document.getElementById('chooseTime').innerText = `Räumzeit: ${seconds}sekunden`
  }


  /**
   * Zum öffnen der verschiedenen Dropdown Menüs
   */
  openDropDownLine() {
    document.getElementById("lineChoose").classList.toggle("show");
  }


  /**
   * Zum öffnen der verschiedenen Dropdown Menüs
   */
  openDropDownStation() {
    document.getElementById("station").classList.toggle("show");
  }


  /**
   * Zum öffnen der verschiedenen Dropdown Menüs
   */
  openDropDownTrack() {
    document.getElementById("track").classList.toggle("show");
  }


  /**
   * Zum öffnen der verschiedenen Dropdown Menüs
   */
  openDropDownGroup() {
    document.getElementById("group").classList.toggle("show");
  }


  /**
   * Zum öffnen der verschiedenen Dropdown Menüs
   */
  openDropDownTime() {
    document.getElementById("timeChoose").classList.toggle("show");
  }


/**
 * Überprüft ob außerhalb des Dropdown menüs geklickt wurde um es zu schließen
 * @param {eventlistener} event 
 */
window.onclick = function (event: any) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  /**
   * Zum zurücksetzen des Sichweitenermittlers
   */
  reset() {

  }
}
