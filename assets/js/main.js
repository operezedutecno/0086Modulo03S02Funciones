// Estandar Ecmascript5
function saludar(nombre, edad, salarioHora, horasTrabajadas) {
    var salario = calcularSalario(salarioHora, horasTrabajadas)
    var mensaje = `Hola, ${nombre} tu edad es ${edad} y tu salario es ${salario}`
    alert(mensaje)
}

function calcularSalario(salarioBasicoHora, horasTrabajadas) {
    var salario = salarioBasicoHora * horasTrabajadas
    return salario
}

var nom = prompt("Ingrese su nombre");
var ed = prompt("Ingrese su edad");
var salarioHora = prompt("Ingrese su salario por hora");
var horasTrabajadas = prompt("Ingrese sus horas trabajadas");

saludar(nom, ed, salarioHora, horasTrabajadas)

// var salarioNeto = calcularSalario(salarioHora, horasTrabajadas);
// alert(`Su salario es ${salarioNeto}`)