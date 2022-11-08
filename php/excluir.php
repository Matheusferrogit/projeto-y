<?php 

//Incluir a conexão 
include("conexao.php");

//Obter dados
$obterdados = file_get_contents("php://input");


//Extrair os dados do JSON
$extrair = json_decode($obterdados);

//Separar os dados do JSON 
$idCurso = $extrair->cursos->idCurso;

//SQL 
$sql = "DELETE FROM cursos WHERE idCursos=$idCurso";
mysqli_query($conexao,$sql);



?>