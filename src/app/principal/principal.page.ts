import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonFooter, IonTabBar, IonTabButton, IonIcon, IonLabel, IonCardTitle, IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonInput, RouterLink, IonItem, IonList, IonCardTitle, IonLabel, IonIcon, IonTabButton, IonTabBar, IonFooter, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
