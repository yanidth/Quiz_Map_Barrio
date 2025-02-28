document.getElementById("Arboles").addEventListener("click", function() {

    console.log("Vamos calcular la distancia entre los árboles...");
    distanciaArboles();
    })

document.getElementById("Distancia").addEventListener("click", function() {
    console.log("Vamos a generar el resumen de las distancias en archivo PDF...");
    distanciaPDF();
    }
)

document.getElementById("Homicidios").addEventListener("click", function() {
    console.log("Vamos a identificar las zonas con homicidios y los inicidentes de policia...");
    zonasHomicidios();
    }
)  