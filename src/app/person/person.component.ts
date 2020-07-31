import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './Entity/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  isChildValid:boolean = true;
  persons:Person[];
  childData:String;
  isSaveDisabled:boolean;
  constructor(private personService: PersonService) {
    this.isSaveDisabled = true;
  }

  ngOnInit() {
  }
  
  fromChildEvent(booleandata){
    console.log(booleandata);
    this.isSaveDisabled = booleandata;
  }
  
  fromChildDataEvent(stringdata) {
    console.log(stringdata);
    this.childData = stringdata;
  }

  getDataFromService() {
    this.personService.getPersons().subscribe(data => {
      this.persons = data;
      console.log(data);
    })
  }
}
