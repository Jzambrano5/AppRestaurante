import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private htpp:HttpClient) {
   }

   updatePerson(id:number, name:String, lastname :String, ci:string, address:string, phone:string){
    const data =
    {
      id:id,
      name: name,
      lastname: lastname,
      ci: ci,
      address: address,
      phone: phone

    }
    const header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.htpp.put('http://127.0.0.1:3000/api/person/'+id, data, { headers: header });
  }
}