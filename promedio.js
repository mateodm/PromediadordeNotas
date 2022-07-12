let nombreApellido
let notaAlumno
let notaAlumno2
let notaAlumno3
let sumaNotas
let promedio
let asignatura
let asignaturaCantidad
const trimestres = 3

function error() {
    alert("Ha ingresado un número incorrecto, F5 para reiniciar la página y volver a intentarlo")
}

function bienvenido() {
    nombreApellido = prompt ("Bienvenido al promediador de notas, ingrese su nombre y apellido")
    asignaturaCantidad = parseInt(prompt("Cantidad de asignaturas a calcular (Máximo 12)"))
        for (let i = 2 ; i <= asignaturaCantidad; i++) {
            notas()
        }
}
function notas() {
    asignatura = prompt("Nombre de asignatura")
    notaAlumno = parseInt(prompt("Nota en el primer trimestre"))
        if ( notaAlumno >= 0 && notaAlumno <= 10 ) {
            notaAlumno2 = parseInt(prompt("Nota en el segundo trimestre"))
            if ( notaAlumno2 >= 0 && notaAlumno2 <= 10 ) {
                notaAlumno3 = parseInt(prompt("Nota en el tercer trimestre"))
                if ( notaAlumno3 >= 0 && notaAlumno3 <= 10 ) {
                    calculoNotas()
                    promediador()
                    return;
                }
                else  ( notaAlumno3 >= 11)
                {
                    error()
                }
            }
            else  ( notaAlumno2 >= 11)
            {
                error()
            }
        }
        else  ( notaAlumno >= 11)
        {
            error()
        }
}
    function calculoNotas () {
        sumaNotas = (notaAlumno + notaAlumno2 + notaAlumno3)
    }
    function promediador () {
        let promedio = (sumaNotas / trimestres)
        if (promedio >= 7) 
        {
            alert("Felicidades " + nombreApellido +", tu promedio en "+ asignatura +" es de "+ promedio +", aprobaste crack.")
            return;
        }
        else (promedio <= 6) 
        {
            alert("Lo lamentamos, " + nombreApellido + " , tu promedio en "+ asignatura +" es de " + promedio +" desaprobaste por bobi")
            return;
        }
    }
    bienvenido ();
        notas ()