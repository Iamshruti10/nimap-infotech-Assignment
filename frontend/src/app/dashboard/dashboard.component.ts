import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  id:any;
  specificPeople:any;

  reactiveForm  = new FormGroup({
    category_id : new FormControl('category_id'),
    category_name : new FormControl('category_name'),
    product_id : new FormControl('product_id'),
    product_name : new FormControl('product_name')
  })
  constructor(private peopleService: PeopleService, private actRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getSpecificPeople(this.id);
    
  }
  getSpecificPeople(id:any){
   
    this.peopleService.getSpecificPeople(id).subscribe(
      data =>{
        console.log("getAllPeoples",data);
        this.specificPeople = data;
        this.reactiveForm.setValue({
          category_id : this.specificPeople[0]['category_id'], 
          category_name: this.specificPeople[0]['category_name'],
          product_id: this.specificPeople[0]['product_id'],
          product_name : this.specificPeople[0]['product_name']
      });
      }
    )
  }


  editPeople(){
       this.peopleService.editPeople(this.id, this.reactiveForm.value).subscribe(
         data =>
         {
            alert("edited")
         })
  }

}
