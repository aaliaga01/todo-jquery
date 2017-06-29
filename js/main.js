$(document).ready( function (){

	$('#tarea-nueva').keypress(function(e) {

		var tarea = document.getElementById("tarea-nueva").value; // tomar el valor de input

		/*if(tarea.length == 0){
    		alert("ingresa una tarea");
			}*/

		    var parrafo= $("<p class='listado'></p>");
        	var input= $("<input type='checkbox' id='to-do'/>");
        	var etiqueta= $("<label for='to-do'></label>");
        	var boton= $("<button>Remove</button>");

        //condicion que agrega elementos a la lista presionando enter
    	if(e.which == 13) {
        event.preventDefault();

        	$("#tareas").prepend(parrafo);
        	$(parrafo).prepend(input,etiqueta,boton);
        	$(etiqueta).text(tarea);

    	}

    	//elimina el elemento seleccionado con el evento click
    	$("button").click(function(event){
			$(this).parent().remove();
		});

	});// .../. keypress


	});// .../. ready