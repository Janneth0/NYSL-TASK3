function init(){
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
}


