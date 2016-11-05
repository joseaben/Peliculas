$(document).ready(initializeEvents);
var id = 0;
var daoAjax;
function initializeEvents(){
    daoAjax = new ClassDaoAjax();

    $( "#fecha" ).datepicker();
    $("#guardar").click(function(){daoAjax.add({titulo:$("#titulo").val(),director:$("#director").val(),sinopsis:$("#sinopsis").val(),fecha:$("#fecha").val()},peticionCompletada,peticionFallida)});
    $("#borrar").click(function(){daoAjax.delete(id,peticionCompletada,peticionFallida)});
    $("#modificar").click(function(){daoAjax.update({titulo:$("#titulo").val(),director:$("#director").val(),sinopsis:$("#sinopsis").val(),fecha:$("#fecha").val()},id,peticionCompletada,peticionFallida)}); 
    
    daoAjax.load(resultadoGet);
}
function peticionCompletada(data, status){
    $("#titulo").val("");
    $("#director").val("");
    $("#sinopsis").val("");
    $("#fecha").val("");
    daoAjax.load(resultadoGet);
}
function peticionFallida(jqXHR, status, error){
    alert("Error al procesar la peticion");
}
function resultadoGet(data,status){
    if(status == "success"){
        $("table").empty();
        $("table").append("<thead><tr><td>ID</td><td>TITULO</td><td>DIRECTOR</td><td>SINOPSIS</td><td>FECHA</td></tr></thead>");
        for(let peliculas = 0; peliculas < data.length;peliculas++){
            if(peliculas == 0){
              $("table").append("<thbody>")
            }else if(peliculas == (data-length - 1)){
               $("table").append("</thbody>")
            }
            $("table").append("<tr><td>" + data[peliculas].id +"</td>"+"<td>"+data[peliculas].titulo+"</td>"+"<td>"+data[peliculas].director+"</td>"+"<td>"+data[peliculas].sinopsis+"</td>"+"<td>"+data[peliculas].fecha+"</td></tr>");
        }
        $("tr").click(presionFila);
    }
}
function presionFila(){
    let filaActual = $(this);
    let contador = 0;
    let arrayCeldas = new Array();
    $(this).find('td').each(function(){ arrayCeldas[contador] = ($(this).html()); contador++;});
    if(arrayCeldas[0] != "ID"){
        id = arrayCeldas[0];
        $("#titulo").val(arrayCeldas[1]);
        $("#director").val(arrayCeldas[2]);
        $("#sinopsis").val(arrayCeldas[3]);
        $("#fecha").val(arrayCeldas[4]);
    }
}
function validar(){
  let validacion = true;
  if($("#titulo").val() != ""){
    limpiarErrorValidacion("titulo");
  }else{
      cargarErrorValidacion("titulo");
      validacion = false;
  }
  if($("#director").val() != ""){
    limpiarErrorValidacion("director");
  }else{
      cargarErrorValidacion("director");
      validacion = false;
  }
  if($("#sinopsis").val() != ""){
    limpiarErrorValidacion("sinopsis");
  }else{
      cargarErrorValidacion("sinopsis");
      validacion = false;
  }
  if($("#fecha").val() != ""){
    limpiarErrorValidacion("fecha");
  }else{
      cargarErrorValidacion("fecha");
      validacion = false;
  }
  return validacion;
}
function cargarErrorValidacion(idElemento){
  $("#div_" + idElemento).addClass("has-error has-feedback");
  $("#span_" + idElemento).addClass("glyphicon glyphicon-remove form-control-feedback");
  $("#" + idElemento).attr("placeholder", "Añada " + idElemento);
}
function limpiarErrorValidacion(idElemento){
  $("#div_" + idElemento).removeClass("has-error has-feedback");
  $("#span_" + idElemento).removeClass("glyphicon glyphicon-remove form-control-feedback");
  $("#" + idElemento).attr("placeholder", "");
}
