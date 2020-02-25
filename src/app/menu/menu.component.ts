import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../services/behavior-subject.service';
import { TacoModel } from '../data/taco-model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayTacoList: TacoModel[];

  constructor(private behaviorSubjectService: BehaviorSubjectService) { }

  ngOnInit() {
    this.subscribeToBehaviorSubject();
  }

  subscribeToBehaviorSubject() {
    this.behaviorSubjectService
      .behaviorSubject$
      .pipe(filter(tacoList => tacoList !== null))
      .subscribe((tacoList: TacoModel[]) => this.displayTacoList = tacoList);
  }

}