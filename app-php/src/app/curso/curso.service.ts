import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { curso } from './curso';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  //URL
  url = "http://localhost:8080/api/php/";

  //Vetor
  vetor: curso[] = [];


  //Construtor
  constructor(private http:HttpClient) { }

  //Obter todos os cursos
  obterCursos(): Observable<curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res: any) => {
        console.log(res);
      this.vetor = res['curso'];
      return this.vetor;
      })  
    )
}

//Cadatrar curso 

cadastrarCurso(c:curso): Observable<curso[]>{
return this.http.post(this.url+'cadastrar',{cursos:c})
.pipe(map((res: any) => {
  this.vetor.push(res['cursos']);
  return this.vetor;
}))
}


}
