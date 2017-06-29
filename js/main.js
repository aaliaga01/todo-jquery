$(document).ready( function (){

	$('#tarea-nueva').keypress(function(e) {

		var tarea = document.getElementById("tarea-nueva").value; // tomar el valor de input

		if(tarea.length == 0){
    		alert("ingresa una tarea");
			}

    	if(e.which == 13) {
        event.preventDefault();
        	$("#tareas").prepend("<p>Texto añadido al comienzo del párrafo.</p>");
    	}

    	

	});// .../. keypress

});// .../. ready