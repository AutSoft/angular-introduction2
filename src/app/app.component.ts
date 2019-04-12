import { Component } from '@angular/core';
import { Fruit } from './fruit';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-introduction2';
  fruits: Fruit[] = [
    {name: 'watermelon', color: 'pink', score: 10},
    {name: 'grape', color: 'green', score: 7},
    {name: 'cantaloupe', color: 'orange', score: 0},
    {name: 'apple', color: 'red', score: 6},
    {name: 'pomelo', color: 'yellow', score: 2},
    {name: 'orange', color: 'orange', score: 9},
    {name: 'plum', color: 'purple', score: 5}
  ];

  constructor(private titleService: TitleService) {
    this.title = titleService.getTitle();
  }

  getClassForFruit(fruit: any) {
    return {like: fruit.score > 7, dislike: fruit.score < 5};
  }
}
