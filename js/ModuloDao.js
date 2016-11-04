function addRegister(){
  if(validar()){
    $.ajax({
        data:{titulo:$("#titulo").val(),director:$("#director").val(),sipnosis:$("#sipnosis").val(),fecha:$("#fecha").val()},
        type:"POST",
        dataType:"json",
        url:"http://localhost:3000/peliculas"
    }).done(peticionCompletada).fail(peticionFallida);
  }
}
function deleteRegister(){
  if(validar()){
   $.ajax({
       type:"DELETE",
       dataType:"json",
       url:"http://localhost:3000/peliculas/" + id
   }).done(peticionCompletada).fail(peticionFallida);
 }
}
function updateRegister(){
  if(validar()){
   $.ajax({
       data:{titulo:$("#titulo").val(),director:$("#director").val(),sipnosis:$("#sipnosis").val(),fecha:$("#fecha").val()},
       type:"PUT",
       dataType:"json",
       url:"http://localhost:3000/peliculas/" + id
   }).done(peticionCompletada).fail(peticionFallida);
 }
}
function loadRegistros(){
    $("table").empty();
    $("table").append("<thead><tr><td>ID</td><td>TITULO</td><td>DIRECTOR</td><td>SIPNOSIS</td><td>FECHA</td></tr></thead>");
    $.get("http://localhost:3000/peliculas",resultadoGet);
}
