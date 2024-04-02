import { trackData } from "./data";
export const trackDT = new trackData()
export let lineList = document.getElementById('undergroundLine')
export let choosenLineCounter = 0;
export let stationChooser = document.getElementById('station')
export let choosenSpeed
export let trackspeed
export let lineData
export let groupSelector = document.getElementById('GrpSelector')
export let setableSpeed = document.getElementById('speedRange')
export let lineDropDownBtn = document.getElementById('lineDropDownBtn')
export let group
export let time
export let track
export let speed
export let stationBtn = document.getElementById('stationDropdownBtn')
export let movableSpeedBar = document.getElementById('speedRange')
export let choosedUndergroundLine
export let u1Names = trackDT.u1Names
export let u2Names = trackDT.u2Names
export let u3Names = trackDT.u3Names
export let u4Names = trackDT.u4Names
export let u5Names = trackDT.u5Names
export let u6Names = trackDT.u6Names
export let u7Names = trackDT.u7Names
export let u8Names = trackDT.u8Names
export let u9Names = trackDT.u9Names
export let u1 = trackDT.u1
export let u2 = trackDT.u2
export let u3 = trackDT.u3
export let u4 = trackDT.u4
export let u5 = trackDT.u5
export let u6 = trackDT.u6
export let u7 = trackDT.u7
export let u8 = trackDT.u8
export let u9 = trackDT.u9





/**
 * Eventlistener für den Regler für das Tempo (Click Event)
 
movableSpeedBar.addEventListener('click', () => {
    changeValueToSpeed(movableSpeedBar.value)
})*/

/**
 * Eventlistener für den Regler für das Tempo (Touch Event)
 
movableSpeedBar.addEventListener('touchend', () => {
    changeValueToSpeed(movableSpeedBar.value)
})*/


/**
 * Basierend auf der ausgewählten Prozentzahl beim Regler wird das entsprechende Tempo gewählt
 * und die Sichtweite neu errechnet
 * @param {number} percent 
 */
export function changeValueToSpeed(percent) {
    if (percent == 100) {
        trackspeed = '70'
        calcNewView()
    }
    if (percent == 84) {
        trackspeed = '60'
        calcNewView()
    }
    if (percent == 68) {
        trackspeed = '50'
        calcNewView()
    }
    if (percent == 52) {
        trackspeed = '40'
        calcNewView()
    }
    if (percent == 36) {
        trackspeed = '25'
        calcNewView()
    }
    if (percent == 16) {
        trackspeed = '15'
        calcNewView()
    }
    if (percent == 0) {
        document.getElementById('viewPoint').innerText = `Gleis gesperrt`
    }
}


/**
 * Lädt die Banhöfe in kürzeln je nach ausgewählter linie
 */
export function stationChoosed(station) {
    document.getElementById('stationDropdownBtn').innerText = station
    if (choosedUndergroundLine == 'U1') {
        lineData = u1[station]
    }
    if (choosedUndergroundLine == 'U2') {
        lineData = u2[station]
    }
    if (choosedUndergroundLine == 'U3') {
        lineData = u3[station]
    }
    if (choosedUndergroundLine == 'U4') {
        lineData = u4[station]
    }
    if (choosedUndergroundLine == 'U5') {
        lineData = u5[station]
    }
    if (choosedUndergroundLine == 'U6') {
        lineData = u6[station]
    }
    if (choosedUndergroundLine == 'U7') {
        lineData = u7[station]
    }
    if (choosedUndergroundLine == 'U8') {
        lineData = u8[station]
    }
    if (choosedUndergroundLine == 'U9') {
        lineData = u9[station]
    }
}


/**
 * Ändert das ausgewählte Gleis zu Gleis eins oder zwei
 * @param {string} x Das ausgewählte Gleis als String
 */
export function chooseTrack(x) {
    if (x == "GL1") {
        document.getElementById('trackBTN').innerText = "Gleis 1"
    }
    else if (x == "GL2") {
        document.getElementById('trackBTN').innerText = "Gleis 2"
    }
    track = x
}


/**
 * Lädt anhand der Daten die Erforderliche Sichtweite
 */
export function calcView() {
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
export function calcNewView() {
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
export function setSpeedRange() {
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
export function chooseLine(line) {
    lineDropDownBtn = document.getElementById('lineDropDownBtn')
    lineDropDownBtn.innerText = line.toString()
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
export function loadUndergroundLine(lineNames) {
    const stationElement = document.getElementById('station');
    stationElement.innerHTML = '';

    for (let i = 0; i < lineNames.length; i++) {
        const element = lineNames[i];
        const pElement = document.createElement('p');
        pElement.className = 'dropDownItem';
        pElement.textContent = lineNames[i];
        pElement.addEventListener('click', () => {
            stationChoosed(lineNames[i]);
        });
        stationElement.appendChild(pElement);
    }
}


/**
 * Ändert die Räumzeiten basierend auf der Gruppe.
 * @param {string} gr Gruppenart (Klein-, Arbeitsgruppe)
 */
export function chooseGroup(gr) {
    if (gr === 'AG') {
        group = 'AG';
        document.getElementById('groupChoosen').innerText = `Arbeitsgruppe`;

        // Leere den Inhalt des Elements 'timeChoose'
        const timeChoose = document.getElementById('timeChoose');
        timeChoose.innerHTML = '';

        // Erstelle die Dropdown-Elemente für 'AG'
        const dropdownValues = [10, 20];
        dropdownValues.forEach(value => {
            const pElement = document.createElement('p');
            pElement.className = 'dropDownItem';
            pElement.textContent = `${value}s`;
            pElement.addEventListener('click', () => {
                timeChoosed(value);
            });
            timeChoose.appendChild(pElement);
        });
    }
    else if (gr === 'KG') {
        group = 'KG';
        document.getElementById('groupChoosen').innerText = `Kleingruppe`;

        // Leere den Inhalt des Elements 'timeChoose'
        const timeChoose = document.getElementById('timeChoose');
        timeChoose.innerHTML = '';

        // Erstelle die Dropdown-Elemente für 'KG'
        const dropdownValues = [7, 10, 15, 20];
        dropdownValues.forEach(value => {
            const pElement = document.createElement('p');
            pElement.className = 'dropDownItem';
            pElement.textContent = `${value}s`;
            pElement.addEventListener('click', () => {
                timeChoosed(value);
            });
            timeChoose.appendChild(pElement);
        });
    }
}


/**
 * Funktion zum ändern der Räumzeit
 * @param {number} seconds
 */
export function timeChoosed(seconds) {
    time = seconds
    document.getElementById('chooseTime').innerText = `Räumzeit: ${seconds}sekunden`
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
export function openDropDownLine() {
    document.getElementById("lineChoose").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
export function openDropDownStation() {
    document.getElementById("station").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
export function openDropDownTrack() {
    document.getElementById("track").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
export function openDropDownGroup() {
    document.getElementById("group").classList.toggle("show");
}


/**
 * Zum öffnen der verschiedenen Dropdown Menüs
 */
export function openDropDownTime() {
    document.getElementById("timeChoose").classList.toggle("show");
}


/**
 * Überprüft ob außerhalb des Dropdown menüs geklickt wurde um es zu schließen
 * @param {eventlistener} event 
 */
window.onclick = function (event) {
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
export function reset() {

}