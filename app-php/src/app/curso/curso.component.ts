import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  //URL base
  url = "http://localhost:8080/api/php/";

  //Vetor de cursos
   vetor: curso[] =[];

   //Objeto de curso
   curso = new curso();

  //Construtor
  constructor(private curso_servico : CursoService){ }


  //Inicializador
  ngOnInit() {
    //Ao inicializar o sistema, devera listar todos os cursos
    this.selecao();
  }

  //Seleção 
  selecao() {
    this.curso_servico.obterCursos().subscribe(
      (res: curso[]) => {
        this.vetor = res;
      }
    )
  }
 //Cadastrar
  cadastro(): void{
    alert("cadastro");

  }
  //Alterar 
  alterar(): void{
    alert("Alterar");
  }
  //Excluir
    excluir(): void{
   alert("excluir");
    }
  }

