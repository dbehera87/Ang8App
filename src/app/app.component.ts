import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my title';
  public isvalid: boolean = false;
  name:string = 'DB';
  names: string[] = ["A","B","C"];
  persons = [{'name':"D",age:40},{'name':"P",age:20},{'name':"C",age:35}];

  constructor(private router: Router){
  }

  dropdownChange(person: any) {
    console.log(person);
  }

  loadPerson() {
    this.router.navigateByUrl('/persons');
  }

}