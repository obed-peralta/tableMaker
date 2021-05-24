

let textarea = document.getElementById('txtEntrada'); // Hago referencia a mi textarea en html
let btnTest = document.getElementById('btnTest'); // Hago referencia a mi button en html
let texto; //Aquí almacenaré el texto completo del textarea
let lineas; //Aquí almacenaré las líneas independientes.
let datos; //Aquí alamacenaré los datos de las líneas independientes

let nombreJugador; //Aquí almacenaré el nombre del jugador que se encuentra en la variable datos
let puntuaciones; //Aquí almacenaré las puntuaciones del jugador que se encuentra en la variable datos
let totalPuntuaciones = 0; //Aquí sumaré las puntuaciones

btnTest.addEventListener('click',(e)=>{ //Le agrego un evento <click> a mi botón.
    //console.log(e.key);
    texto = textarea.value; // Extraigo el texto del textarea.
    lineas = texto.split('\n'); //Separo sus líneas del texto cada vez que encuentre un salto de línea.
    lineas.forEach(linea => { //Por cada línea.
        //console.log(linea);
        if(linea.includes('#') || linea.includes('.')){ //Si la línea incluye el caracter <#>
            // Do Something //Luego veo que se hace aquí...
        }else if(linea == ""){
            
        }else{ //Si no incluye ese caracter...
            datos = linea.split(' ');
            nombreJugador = datos[0];
            for(let i = 1; i < datos.length; i++){
                totalPuntuaciones += parseInt(datos[i]);
            }
            /*datos = linea.split(' '); //Entonces en la línea que me encuentre separo el nombre y las puntuaciones por <1> espacio que encuentre.
            nombreJugador = datos[0]; //El nombre del jugador se encuentra en la primer división (antes del espacio)
            puntuaciones = datos[1].split(' '); //Las puntuaciones están separadas por el simbolo <|>, cada puntuación la separo cada vez que encuentre ese símbolo.
            puntuaciones.forEach(puntuacion => { //Por cada puntuación...
                totalPuntuaciones += parseInt(puntuacion); //La casteo a <Integer> y la voy sumando junto al total.
            });*/
            console.log(`${nombreJugador} tiene ${totalPuntuaciones} puntos`); //Lo muestro..
            totalPuntuaciones = 0; //Reinicio el sumador.
        }
    });
});