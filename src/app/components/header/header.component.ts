import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';

  @Output() toggleAddTask = new EventEmitter();
  constructor() {
    
   }

  ngOnInit(): void {
  }
  clickMe=()=>{
    console.log('click me');
  }
}
