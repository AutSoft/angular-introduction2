import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from './fruit';

@Pipe({
  name: 'heart'
})
export class HeartPipe implements PipeTransform {

  transform(fruit: Fruit, isBrokenHeart = false): any {
    if (isBrokenHeart) {
      return fruit.score <= 5 ? `${fruit.name}</3` : fruit.name;
    } else {
      return fruit.score > 7 ? `${fruit.name}<3` : fruit.name;
    }
  }

}
