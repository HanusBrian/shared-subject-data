import { Component, OnInit } from '@angular/core';
    import { BehaviorSubjectService } from './services/behavior-subject.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private behaviorSubjectService: BehaviorSubjectService) {}

  ngOnInit() {
    this.behaviorSubjectService.getTacoList();
  }
}
