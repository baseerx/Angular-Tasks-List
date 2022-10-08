import { Injectable } from '@angular/core';
import { data } from '../data';
import {Datainterface} from '../interfaces/datainterface';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks():Datainterface[] {
    return data;
  }
}
