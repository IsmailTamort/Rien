import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../etudiant';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url = 'http://localhost:3000/etudiants';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Etudiant[]>(this.url);
  }
  addEtudiant(etudiant: any) {
    return this.http.post<Etudiant>(this.url, etudiant);
  }
  delete(id: any) {
    return this.http.delete<Etudiant>(this.url + '/' + id);
  }

  editEtudiant(etudiant: any) {
    return this.http.put<Etudiant>(this.url + '/' + etudiant.id, etudiant);
  }
}
