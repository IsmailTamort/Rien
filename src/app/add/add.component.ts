import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  etudiants: Etudiant[]=[]
  etudiant:any={
    id:null,
    nom:'',
    prenom:''
  }
  constructor(private api : ApiServiceService) { }

  ngOnInit(): void {
  }
  addEtudiant(){
    this.api.addEtudiant(this.etudiant).subscribe(data=>{this.etudiants=[data]})
    console.log(this.etudiant)
    this.etudiant={
      id:null,
      nom:'',
      prenom:''
    }
  }
}
