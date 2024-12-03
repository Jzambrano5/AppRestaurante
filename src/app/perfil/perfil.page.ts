import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonLabel, IonTabButton, IonIcon, IonTabBar, IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonList, IonTabBar, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  profile:any;
  personid:any;

  constructor(private usuarioService:UsuarioService) {
    this.personid = localStorage.getItem('id');
   }

  ngOnInit() {
    this. viewProfile();
  }
  
  viewProfile(){
    this.usuarioService.getOneUser(this.personid).subscribe({
      next:(data:any)=>{
        this.profile=data;
        debugger
      },
      error:(error:any)=>{
        debugger
      }
    })

  }

}
