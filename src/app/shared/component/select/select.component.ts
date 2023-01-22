import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input()title:string="";
  @Input()data: Product[]=[];
  @Output() selectedValue= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event:any) {
    this.selectedValue.emit(event);
  }
}
