import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getAllPeoples(){
    return this.http.get('http://localhost:3000/api/v1/peoples/');
  }


  deletePeople(id:any){
    return this.http.delete('http://localhost:3000/api/v1/peoples/' + id);
  }


  addPeople(data:any){
    return this.http.post('http://localhost:3000/api/v1/peoples/', data);
  }


  editPeople(id:any, data:any){
    return this.http.put("http://localhost:3000/api/v1/peoples/" + id , data);
  }

  getSpecificPeople(id:any){
    return this.http.get('http://localhost:3000/api/v1/peoples/' + id);
  }


}
