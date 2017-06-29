$(document).ready( function (){

	$('#tarea-nueva').keypress(function(e) {

		var tarea = document.getElementById("tarea-nueva").value; // tomar el valor de input

		/*if(tarea.length == 0){
    		alert("ingresa una tarea");
			}*/

		    var parrafo= $("<p class='listado'></p>");
        	var caja= $("<input type='checkbox' id=''/>");
        	var etiqueta= $("<label for=''></label>");
        	var boton= $("<button>Remove</button>");

        //condicion que agrega elementos a la lista presionando enter
    	if(e.which == 13) {
        event.preventDefault();

        	$("#tareas").prepend(parrafo);
        	$(parrafo).prepend(caja,etiqueta,boton);
        	$(etiqueta).text(tarea);

    	}


    	var pos = $(".listado").index();
  			
  		$(caja).attr( "id", "test-"+pos);
        $(etiqueta).attr("for", "test-"+pos);

    	//elimina el elemento seleccionado con el evento click
    	$("button").click(function(event){
			$(this).parent().remove();
		});


    	/*var marcado = $("#to-do").prop("checked");

		$(marcado).prop("checked", true);  // para poner la marca
		$(marcado).prop("checked", false); // para quitar la marca

		var oks = [];
			$("#tareas input[type=checkbox]:checked").each(
    			function ()
    			{
        		oks.push($(this).data("listos"));
    			});
*/

	});// .../. keypress


	});// .../. ready