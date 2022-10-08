import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Datainterface } from 'src/app/interfaces/datainterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   @Input() task?: Datainterface;
   
   @Output() btnDelete=new EventEmitter<any>();

   faTimes=faTimes;
  constructor() { }
   
  ngOnInit(): void {
    console.log(this.task);
    
  }

  deleteMe=(id:any):void=>{
    this.btnDelete.emit(id);
  }

}
