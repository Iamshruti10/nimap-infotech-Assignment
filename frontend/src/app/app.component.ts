import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  implements OnInit  {
  title = 'angular-project';
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

  }

}
