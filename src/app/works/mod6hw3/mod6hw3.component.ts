import { Component, OnInit } from '@angular/core';
import { convertTypeAcquisitionFromJson } from 'typescript';

@Component({
  selector: 'app-mod6hw3',
  templateUrl: './mod6hw3.component.html',
  styleUrls: ['./mod6hw3.component.scss']
})
export class Mod6hw3Component implements OnInit {
  public text = ''
  public editText = ''
  public taskArr: any = [];
  public taskNumb: number = 0
  public index!: number;
  public edirIndex!: number;
  public tempOn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    let task = {
      taskName: '',
      status: false
    }
    task.taskName = this.text
    this.taskArr.push(task);
    this.text = ''
    for (let i = 0; i < this.taskArr.length; i++) {
      this.taskNumb = i + 1
    }
  }

  indexElement(data: number) {
    this.index = data;
    console.log(this.index);

  }
  changeStatus(data: any) {
    let task = this.taskArr[this.index];
    task.status = data;
  }


  openEdit(data: boolean) {
    this.tempOn = data
    let taskId = this.taskArr[this.index]
    this.editText = taskId.taskName
    console.log(taskId);
  }



  dellTask(data: number) {
    this.taskArr.splice(data, 1)
  }


  save(): void {
    let i = this.index;
    this.taskArr[i].taskName = this.editText
    this.tempOn = false


  }
}
