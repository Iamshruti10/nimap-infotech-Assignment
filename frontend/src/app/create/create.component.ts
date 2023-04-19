import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   res:any;
  reactiveForm  = new FormGroup({
    category_id : new FormControl('', [Validators.required]),
    category_name : new FormControl('',Validators.required),
    product_id : new FormControl('', Validators.required),
    product_name : new FormControl('', Validators.required)
  })
  config:any;
  allPeoples  : any = [];
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  addPeople(){
  

    if(this.reactiveForm.get('category_id')?.value !=''  && this.reactiveForm.get('category_name')?.value !=''  && this.reactiveForm.get('product_id')?.value !='' && this.reactiveForm.get('product_name')?.value !='' ){
      
        this.peopleService.addPeople(this.reactiveForm.value).subscribe(
          data=>{
            this.res = data;
            if(this.res['error']){
              alert(this.res['message'])
            }
            else{
              alert(this.res['message'])
                  this.reactiveForm.setValue({
                    category_id : "", 
                    category_name: "",
                    product_id :"",
                    product_name : ""
                  });
            }
          }
        )
      }
      else{
        alert("Please enter all details")
      }
  }

  


}
