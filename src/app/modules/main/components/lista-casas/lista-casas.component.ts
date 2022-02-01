import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-casas',
  templateUrl: './lista-casas.component.html',
  styleUrls: ['./lista-casas.component.css']
})
export class ListaCasasComponent implements OnInit {
  public showContend:boolean;
  @Input() listProperty: string[];


  constructor() { }

  ngOnInit(): void {
    this.showContend = true;
  }
  onClickOption(){
    this.showContend = !this.showContend;

  }
}
