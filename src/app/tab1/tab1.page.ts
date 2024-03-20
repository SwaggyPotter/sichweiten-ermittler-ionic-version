import { Component } from '@angular/core';
import { firebaseConfiguration } from 'firebase-login';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfiguration);
    const analytics = getAnalytics(app);
    console.log(app)
  }

}
