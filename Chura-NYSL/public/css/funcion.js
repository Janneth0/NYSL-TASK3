/*function init(){
	var v = document.getElementById("primero");
	var w = document.getElementById("segundo");
	var x = document.getElementById("tercero");
    var y = document.getElementById("cuarto");
    var z = document.getElementById("quinto");
    v.style.display = "block";
	w.style.display = "none"; 
	x.style.display = "none"; 
    y.style.display = "none";
    z.style.display = "none"; 
}

function myFunctionB1() {
  	var v = document.getElementById("primero");
	var w = document.getElementById("segundo");
	var x = document.getElementById("tercero");
    var y = document.getElementById("cuarto");
    var z = document.getElementById("quinto");	
    if (w.style.display === "none") {
        w.style.display = "block";
		v.style.display = "none";
		x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";   
    } else {
        w.style.display = "block";
		v.style.display = "none";
		x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";       
    }
}

function myFunctionB2() {
    var v = document.getElementById("primero");
	var w = document.getElementById("segundo");
	var x = document.getElementById("tercero");
    var y = document.getElementById("cuarto");
    var z = document.getElementById("quinto");
    if (x.style.display === "none") {
        x.style.display = "block";
		v.style.display = "none";
		w.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";   
    } else {
        x.style.display = "block";
		v.style.display = "none";
		w.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";       
    }
}

function myFunctionB3() {
   var v = document.getElementById("primero");
	var w = document.getElementById("segundo");
	var x = document.getElementById("tercero");
    var y = document.getElementById("cuarto");
    var z = document.getElementById("quinto");
    if (y.style.display === "none") {
        y.style.display = "block";
		v.style.display = "none";
		w.style.display = "none";
        x.style.display = "none";
        z.style.display = "none"; 
    } else {
       y.style.display = "block";
		v.style.display = "none";
		w.style.display = "none";
        x.style.display = "none";
        z.style.display = "none";        
    }
}

function myFunctionB4() {
	var v = document.getElementById("primero");
	var w = document.getElementById("segundo");
	var x = document.getElementById("tercero");
    var y = document.getElementById("cuarto");
    var z = document.getElementById("quinto");
    if (z.style.display === "none") {
        z.style.display = "block";
		v.style.display = "none";
		w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none"; 
    } else {
        z.style.display = "block";
		v.style.display = "none";
		w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";       
    }
}*/



	///////////////////////////////////////////////////////////////////



function displayLocations() {locations.forEach(location => { $('.sedes-container').append(`
	<div class="sedes-item mx-auto bg-green tx-white" data-toggle="modal" data-target="#${location.id}">
		<span class="sedes-titulo">${location.name}</span>
    </div>
    <div class="modal fade" id="${location.id}">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content ">
        
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <div>
                                <h4 class="modal-title">${location.name}</h4>
                                <br>
                                <h6>${location.address}</h6>
                            </div>
        
                            <button type="button" class="close" data-dismiss="modal"><i class="fas fa-times"></i></button>
                        </div>
        
                        <!-- Modal body -->
                        <div class="modal-body">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="border"
                                    src="${location.map}"></iframe>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        
            `)
        })

    }




























