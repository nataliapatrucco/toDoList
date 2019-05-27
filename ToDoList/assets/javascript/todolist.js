
// toggleClass agrega la clase completado cuando clickeo el item. Añado el efecto en los items nuevos seleccionando ul

$("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
})

// selecciono el span y creo una funcion que haciendo click selecciona this parent o sea el li y le aplica un fadeout y lo borra (remove) para que no ocupe espacio en la memoria. 

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
    $(this).remove();
    });
    event.stopPropagation();
  });



 // Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
    //filtrar para que sólo se active cuando aprietan Enter
    if(event.key == "Enter") {
      $("ul").append("<li><span><i class='fa fa-trash-alt area-hidden='true'></i></span> "+ $(this).val() + "</li>");
      // se borra el contenido del input
      $(this).val("");
      event.stopPropagation();
    }
  });


  $(".fa-clipboard-list").click(function(){
    $("input").slideToggle()
   })