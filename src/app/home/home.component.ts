import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public workArr = [
    {
      name: 'Angular list of prohilbited words',
      link: '/works/mod6hw1'
    },
    {
      name: 'Angular task list',
      link: '/works/mod6hw2'
    },
    {
      name: 'Angular user list',
      link: '/works/mod6hw3'
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
