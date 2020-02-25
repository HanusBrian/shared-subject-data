import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../services/behavior-subject.service';
import { TacoModel } from '../data/taco-model';
import { filter } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayTacoList: FormGroup;

  get formArray(): FormArray { return this.displayTacoList.get("formArray") as FormArray; }

  constructor(
    private behaviorSubjectService: BehaviorSubjectService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.subscribeToBehaviorSubject();
  }

  initForm() {
    this.displayTacoList = this.formBuilder.group({
      formArray: this.formBuilder.array([])
    });
  }

  subscribeToBehaviorSubject() {
    this.behaviorSubjectService
      .behaviorSubject$
      .pipe(filter(tacoList => tacoList !== null))
      .subscribe((tacoList: TacoModel[]) => tacoList.forEach(taco => 
        this.formArray.push(this.createFormGroup(taco)))
      );
  }

  createFormGroup(taco: TacoModel): FormGroup {
    return this.formBuilder.group({
      id: taco.id,
      name: taco.name,
      description: taco.description,
      price: taco.price,
      isSpecial: taco.isSpecial
    })
  }

  saveChanges() {
    let saveArray: TacoModel[] = [];
    this.formArray.controls.forEach(taco => {
      let newTaco = new TacoModel();
      newTaco.id = taco.value.id;
      newTaco.name = taco.value.name;
      newTaco.description = taco.value.description;
      newTaco.price = taco.value.price;
      newTaco.isSpecial = taco.value.isSpecial;

      saveArray.push(newTaco);
    });

    this.behaviorSubjectService.updateTacoList(saveArray);
  }

}