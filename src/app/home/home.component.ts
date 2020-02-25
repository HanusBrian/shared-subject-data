import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../services/behavior-subject.service';
import { TacoModel } from '../data/taco-model';
import { filter, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tacoDisplayList: TacoModel[] = [];

  constructor(private behaviorSubjectService: BehaviorSubjectService) { }

  ngOnInit() {
    this.subscribeToTacoSpecialList();
  }

  subscribeToTacoSpecialList() {
    this.behaviorSubjectService
      .behaviorSubject$
      .pipe(
        filter((tacoList: TacoModel[]) => tacoList !== null),
        flatMap(tacoList => tacoList),
        filter((taco: TacoModel) => taco.isSpecial)
      )
      .subscribe((taco: TacoModel) => {
        this.tacoDisplayList.push(taco);
      });
  }
}