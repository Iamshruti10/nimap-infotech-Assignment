import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:any;
  specificPeople:any;
  res:any;
  reactiveForm  = new FormGroup({
    category_id : new FormControl('email'),
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
          catcategory_id : this.specificPeople[0]['category_id'], 
          category_name: this.specificPeople[0]['category_name'],
          product_id : this.specificPeople[0]['product_id'],
          product_name : this.specificPeople[0]['product_name']
      });
      }
    )
  }


  editPeople(){
    if(this.reactiveForm.get('category_id')?.value !=''  && this.reactiveForm.get('category_namebile')?.value !=''  && this.reactiveForm.get('product_id')?.value !='' && this.reactiveForm.get('product_name')?.value !='' ){

       this.peopleService.editPeople(this.id, this.reactiveForm.value).subscribe(
         data =>
         {
          this.res = data;
          alert(this.res['message'])
        })
    }

    else{
      alert("Please enter all details")
    }
}


}
