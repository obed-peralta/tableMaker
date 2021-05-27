let areaTexto = document.getElementById('areaTexto');
function obtenerDatos(){
    let texto = areaTexto.value; // Obtenemos todo el texto
    let lineas = texto.split('\n'); // Dividimos el texto en lineas
    lineas.forEach(linea => { // Por cada linea
        if(!linea.includes('.') && linea != ""){ //Si la linea no incluye el caracter <.>
            let datos = linea.split(' '); // Dividimos la linea por espacios para extraer los datos
            let nombreJugador = datos[0]; //Extraemos el nombre del jugador
            let puntuaciones = datos.slice(1,datos.length); // Extraemos las puntuaciones desde la posición 1 de los datos
            let copas = new Array();
            let conteo = 1; // Definimos un contador para saber hasta donde es el puntaje de una copa
            let totalCopa = 0; // Guardaremos el total de cada copa
            let totalPuntajeJugador = 0; // Aquí guardamos el puntaje total del jugador
            puntuaciones.forEach(puntuacion => { //Por cada puntuación
                totalCopa += parseInt(puntuacion); // Sumamos las puntuaciones
                if(conteo == 3){ // Si ya contó 3 puntajes, ya es una copa
                    copas.push(new Array(`Copa ${copas.length+1}`,totalCopa)); // La guardamos en el array copas
                    totalPuntajeJugador += totalCopa; // Acumulamos el total del jugador
                    conteo = 1; // Reiniciamos el contador
                    totalCopa = 0; // Reiniciamos el acumulador
                }else{ // Si no ha contado 3 puntaje...
                    conteo++; //Que siga contando
                }
            });
            console.log(`---------${nombreJugador}---------`)
            console.table(copas);
            console.log(`---------Total: ${totalPuntajeJugador}---------`);
        }else if(linea.includes('.')){
            console.log(`%cEquipo: ${linea}`,'color: blue; background-color: yellow; font-size: 3em; border: 2px solid red; border-radius: 1em; padding: 5px 10px;');
        }
    });
}