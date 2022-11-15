alert("Adivina qué palabras pueden ir dentro de la cajita musical.\n\n Tenés 14 intentos.");

let a = 1; 

for(let i = 1; i <= 14; i++){
    alert("Intento nro: " + a);
    const cajitaMusical = prompt("Escribe una palabra para meter en la cajita musical");
    alert("Ingresaste " + cajitaMusical);
    if (cajitaMusical.startsWith("do")|| cajitaMusical.startsWith("re")|| cajitaMusical.startsWith("mi")|| cajitaMusical.startsWith("fa")|| cajitaMusical.startsWith("sol")|| cajitaMusical.startsWith("la")|| cajitaMusical.startsWith("si")){
       alert("Palabra aceptada en la cajita musical!!");
       alert("Felicitaciones! Has ganado! :) \n\nDato: Tu palabra inicia con una nota musical! \n\nPara volver a jugar, carga la página de nuevo.")
       i= i + 14;
       a = 0;
    } 
    else {
       alert("Palabra no aceptada, vuelve a intentarlo!");
        a++; 
    }
}
if (a === 15){
    alert("Has perdido. :(");
}