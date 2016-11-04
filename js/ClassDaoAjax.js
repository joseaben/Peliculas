function ClassDaoAjax(){

}
ClassDaoAjax.prototype.add = function (datos,fnDone,fnFail){
  $.ajax({
        data:datos,
        type:"POST",
        dataType:"json",
        url:"http://localhost:3000/peliculas"
    }).done(fnDone).fail(fnFail);  
}
ClassDaoAjax.prototype.delete = function (id,fnDone,fnFail){
  $.ajax({
       type:"DELETE",
       dataType:"json",
       url:"http://localhost:3000/peliculas/" + id
   }).done(fnDone).fail(fnFail);
}
ClassDaoAjax.prototype.update = function (datos,id,fnDone,fnFail){
  $.ajax({
       data:datos,
       type:"PUT",
       dataType:"json",
       url:"http://localhost:3000/peliculas/" + id
   }).done(fnDone).fail(fnFail);
}
ClassDaoAjax.prototype.load = function (fnResultado){
  $.get("http://localhost:3000/peliculas",fnResultado);
}
