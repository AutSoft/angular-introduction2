import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor() { }

  getTitle() {
    return 'this is the title';
  }
}
