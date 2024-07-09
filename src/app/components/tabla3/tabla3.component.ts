import { Component, OnInit } from '@angular/core';
import { MortyappService } from '../../services/mortyapp.service';
import { Result } from '../../models/mortys';

@Component({
  selector: 'app-tabla3',
  templateUrl: './tabla3.component.html',
  styleUrls: ['./tabla3.component.css']
})
export class Tabla3Component implements OnInit {
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
