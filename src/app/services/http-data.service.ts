import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TacoModel } from '../data/taco-model';
import * as data from '../data/taco-data.json';

@Injectable()
export class HttpDataService {

  getTacoList(): Observable<any> {
    console.log("*** GET: Http Request ***");
    return of(data[0]);
  }

  updateTacos(tacoList: TacoModel[]) {
    console.log("*** SAVE: Http Request ***");
  }
}