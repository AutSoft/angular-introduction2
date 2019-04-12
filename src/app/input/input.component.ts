import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  textChanged(event: KeyboardEvent) {
    this.textChange.emit((event.target as any).value);
  }

}
