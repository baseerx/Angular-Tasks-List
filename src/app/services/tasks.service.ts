import { Injectable } from '@angular/core';
import { data } from '../data';
import {Observable, of} from 'rxjs';
import {Datainterface} from '../interfaces/datainterface';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks():Observable<Datainterface[]> {
    return of(data);
  }
}
