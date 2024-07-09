import { Component, OnInit } from '@angular/core';
import { MortyappService } from '../../services/mortyapp.service';
import { Result } from '../../models/mortys';

@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {
  Personaje: Result[] = [];

  constructor(private mortyService: MortyappService) { }

  ngOnInit(): void {
    this.getAllInfo();
  }

  getAllInfo(): void {
    this.mortyService.getAllInfo().subscribe(
      data => {
        this.Personaje = data.results;
        console.log(this.Personaje);
      },
      err => { console.log(err); },
      () => console.log('El llamado ha sido completado')
    );
  }
}
