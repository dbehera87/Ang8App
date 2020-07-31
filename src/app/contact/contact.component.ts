import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `<span> From Contact Component </span>  
            <div *ngIf="isValid">tests</div>
            <button (click)="emitdata()">Emit Data</button>`//,
  //templateUrl: './person.component.html',
  //styleUrls: ['./person.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @Input()
  public isValid:boolean;

    @Output()
    public childEvent: EventEmitter<boolean> = new EventEmitter();

    @Output()
    public childDataEvent: EventEmitter<string> = new EventEmitter();

    ngOnInit() {
        
    }
    emitdata() {
        this.childDataEvent.emit('This is passed in from child comtact component');
        this.childEvent.emit(false);
    }


    ngOnDestory() {
        
    }
}
