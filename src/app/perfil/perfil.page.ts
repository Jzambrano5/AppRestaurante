import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonLabel, IonTabButton, IonIcon, IonTabBar, IonList, IonItem, IonInput, IonButtons, IonButton, IonAvatar } from '@ionic/angular/standalone';
import { UsuarioService } from '../service/usuario.service';
import{ chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,}from 'ionicons/icons';

  import { cog, search, person ,mail,create,trash,add, home,close, menu,exit, heartOutline, homeOutline, personOutline, cartOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


import { star, restaurant, calendar, pencil }from 'ionicons/icons';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonButton, IonButtons, IonInput, IonItem, IonList, IonTabBar, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  profile:any;
  personid:any;
  editDatos:boolean=true;


  constructor(private usuarioService:UsuarioService, private personService:PersonService) {
    this.personid = localStorage.getItem('id');
    addIcons({ cog, search ,person, mail,create,trash,add,home,close,exit,menu,pencil});
    addIcons({ chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe });

   }

  ngOnInit() {
    this. viewProfile();
  }

  editperfil(){
    this.editDatos=false;
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

  updatePerson(){
    this.personService.updatePerson(1, "juan", "vera","23","porto","987").subscribe({
      next:(data:any)=>{
        debugger
      },
      error(err) {
        debugger
      },
    })
  }

}
