import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  allPeoples  : any = [];
  res:any;
  searchedKeyword:any;
  displayedColumns = [ 'name', 'lname', 'email', 'mobile', 'id', 'id2'];
  config:any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getAllPeoples();
  }


  pageChanged(event:any){
    this.config.currentPage = event;
  }
  
  
    getAllPeoples(){
     
      this.peopleService.getAllPeoples().subscribe(
        data =>{
          console.log("getAllPeoples",data);
          this.allPeoples = data;
          this.config = {
            itemsPerPage: 4,
            currentPage: 1,
            totalItems: this.allPeoples.length
          };
        }
        
      )
    }
  
  
  
    deletePeople(id:any){
      this.peopleService.deletePeople(id).subscribe(
        data=>{
          this.res= data;
          alert(this.res['message'])
         this.getAllPeoples();
        }
      )
    }


}
