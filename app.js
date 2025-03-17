// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar nobres de los amigos
let amigos = [];

//Función para ingresar un nombre y añadirlo a la lista de amigos
function agregarAmigo() {
    let inputNombre = document.getElementById('amigo');
    let nombre = inputNombre.value;

    //Validar que el campo no esté vacío
    if (nombre == '') {
        alert('Debe ingresar un nombre');
        return;
    } 
    //Ingresamos al array
    amigos.push(nombre);
    inputNombre.value = '';
    inputNombre.focus();
    mostrarAmigos();

}

//Función para mostrar la lista de amigos
function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    //Recorremos el array de amigos y creamos un item por cada uno
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

//Función para realizar el sorteo 
function sortearAmigo(){
    if(amigos.length === 0){
        alert('No hay amigos en la lista');
        return;
    }

    //Generamos un número aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    //Mostramos el amigo seleccionado y lo eliminamos del array
    let seleccionado = amigos.splice(indice, 1)[0];

    //Mostramos el amigo seleccionado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo seleccionado es: ${seleccionado}`;

    mostrarAmigos();
}