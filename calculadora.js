var Marte = 3.7
var Tierra = 9.8
var Jupiter = 24.8
var Saturno = 10.44
var Urano = 8.87
var Neptuno = 19.15
var Venus = 8.87
var Mercurio = 3.7
var pesoUsuario = prompt('cual es tu peso?')


// var pesoUsuario = document.getElementById("peso");
// pesoUsuario.addEventListener("click", calcularPeso);

    var pesoUsuarioMarte = pesoUsuario * Marte / Tierra
    var pesoUsuarioJupiter = (pesoUsuario * Jupiter) / Tierra
    var pesoUsuarioSaturno = (pesoUsuario * Saturno) / Tierra
    var pesoUsuarioUrano = (pesoUsuario * Urano) / Tierra
    var pesoUsuarioNeptuno = (pesoUsuario * Neptuno) / Tierra
    var pesoUsuarioVenus = (pesoUsuario * Venus) / Tierra
    var pesoUsuarioMercurio = (pesoUsuario * Mercurio) / Tierra
    

    var jupiter = document.getElementById("botonJupiter")
    jupiter.addEventListener("click", pesoJupiter)

var saturno = document.getElementById("botonSaturno")
saturno.addEventListener("click", pesoSaturno)

var urano = document.getElementById("botonUrano")
urano.addEventListener("click", pesoUrano)

var neptuno = document.getElementById("botonNeptuno")
neptuno.addEventListener("click", pesoNeptuno)

var venus = document.getElementById("botonVenus")
venus.addEventListener("click", pesoVenus)

var mercurio = document.getElementById("botonMercurio")
mercurio.addEventListener("click", pesoMercurio)

var marte = document.getElementById("botonMarte")
marte.addEventListener("click", pesoMarte)

var parrafo = document.getElementById("parrafo")





function pesoJupiter() {
    parrafo.innerHTML = "tu peso en Jupiter es de " + parseInt(pesoUsuarioJupiter) + " kilogramos" ;
    Im
    
}


function pesoSaturno (){
    
    parrafo.innerHTML = "tu peso actual en Saturno es de " + parseInt(pesoUsuarioSaturno) + " kilogramos" 
        
}

function pesoUrano() {
    parrafo.innerHTML = "tu peso actual en Urano es de " + parseInt(pesoUsuarioUrano) + " kilogramos"
    
}

function pesoNeptuno(){
    parrafo.innerHTML = "tu peso actual en Neptuno es de " + parseInt(pesoUsuarioNeptuno) + " kilogramos"
}

function pesoVenus(){
    parrafo.innerHTML = "tu peso actual en Venus es de " + parseInt(pesoUsuarioVenus) + " kilogramos"
}

function pesoMercurio(){
    parrafo.innerHTML = "tu peso actual en Mercurio es de " + parseInt(pesoUsuarioMercurio) + " kilogramos"
}

function pesoMarte(){
    parrafo.innerHTML = "tu peso actual en Marte es de " + parseInt(pesoUsuarioMarte) + " kilogramos"
}
