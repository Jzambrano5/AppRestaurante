import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
