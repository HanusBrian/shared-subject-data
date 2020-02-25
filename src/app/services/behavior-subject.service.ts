import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TacoModel } from '../data/taco-model';
import { HttpDataService } from './http-data.service';

@Injectable()
export class BehaviorSubjectService {
  private activeTacoList: TacoModel[];

  constructor(private httpDataService: HttpDataService) {}

  private behaviorSubjectSource = 
    new BehaviorSubject<TacoModel[]>(null);

  behaviorSubject$ = this.behaviorSubjectSource.asObservable();

  getTacoList() {
    if (this.activeTacoList) {
      return;
    }

    this.httpDataService
      .getTacoList()
      .subscribe((tacoList: TacoModel[]) => {
        this.activeTacoList = tacoList;
        this.behaviorSubjectSource.next(tacoList);
      });
  }

  updateTacoList(tacoList: TacoModel[]) {
    this.activeTacoList = tacoList;
    this.httpDataService.updateTacos(tacoList);
    this.behaviorSubjectSource.next(tacoList);
  }

  clearTacoList() {
    this.activeTacoList = null;
    this.behaviorSubjectSource.next(null);
  }
}