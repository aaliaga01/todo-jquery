$(document).ready( function (){

	$('#tarea-nueva').keypress(function(e) {

		var tarea = document.getElementById("tarea-nueva").value; // tomar el valor de input

		/*if(tarea.length == 0){
    		alert("ingresa una tarea");
			}*/

		    var parrafo= $("<li class='listado'></li>");
        	var caja= $("<input type='checkbox'/>");
        	var etiqueta= $("<label></label>");
        	var boton= $("<button>Remove</button>");

        //condicion que agrega elementos a la lista presionando enter
    	if(e.which == 13) {
        event.preventDefault();

        	$("#tareas ul").prepend(parrafo);
        	$(parrafo).prepend(caja,boton);
        	$(etiqueta).text(tarea);
            $(caja).wrap(etiqueta);

    	}

        
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
    function display()
{
for(i=0;i<10;i++){
document.write("<input type='text' id='"+i+"' value='el valor del id es: "+i+"'/><br/><br/>");
}
}

	});// .../. keypress


 

	});// .../. ready