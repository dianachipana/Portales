import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listProperty = [
    {
      name: 'Huerto de Lareado VI',
      address: 'MZ.B Lote 10',
      location: 'Lareado/Trujillo,La Libertad',
      codState: '1',
      nameState:'Deuda',
      lyricsPaid: '50',
      codProperty: 'HU28.0003',
      overdueLetter: '4 letras vencidas',
      minAmount: 'US$204.00',
    },
    {
      name: 'Huerto de Lareado VI',
      address: 'MZ.B Lote 15',
      location: 'Lareado/Trujillo,La Libertad',
      codState: '2',
      nameState:'Pagando',
      lyricsPaid: '50',
      codProperty: 'HU28.0003',
      overdueLetter: '1 letras vencidas',
      minAmount: 'US$204.00',
    },
   {
      name: 'Huerto de Lareado VI',
      address: 'MZ.B Lote 18',
      location: 'Lareado/Trujillo,La Libertad',
      codState: '3',
      nameState:'Completado',
      lyricsPaid: '100',
      codProperty: 'HU28.0003',
      overdueLetter: '',
      minAmount: 'US$204.00',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
