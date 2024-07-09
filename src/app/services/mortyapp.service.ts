import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../models/mortys';

const url = "https://rickandmortyapi.com/api/character";

@Injectable({
  providedIn: 'root'
})
export class MortyappService {
  constructor(private http: HttpClient) { }

  getAllInfo(): Observable<Personajes> {
    return this.http.get<Personajes>(url);
  }
}
