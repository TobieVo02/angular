import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() count:number = 0;
  @Output() countChange = new EventEmitter
  constructor() { }

  ngOnInit(): void {

  }
  cong(){
    this.count++;
    this.countChange.emit(this.count)
  }
  tru(){
    if(this.count <= 1){
      return;
    }
    this.count--;
    this.countChange.emit(this.count)

  }

}
