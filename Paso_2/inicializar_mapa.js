// Crear el mapa y establecer la vista inicial
var map = L.map('map').setView([4.692224704154009, -74.0771391360336], 30);

// Agregar la capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Verificar que L.PM esté definido antes de agregar los controles
if (map.pm) {
    map.pm.addControls({
        position: 'topleft',
        drawCircle: false
    });
} else {
    console.error("Leaflet-Geoman (L.PM) no está cargado. Verifica que la librería esté incluida.");
}

let drawnLayers = [];
let intersectionsLayers = [];

// Manejadores de eventos
map.on("pm:create", function(e) {  
    let myLayer = e.layer;

    // Si es un polígono, agregarlo al arreglo drawnLayers
    if (myLayer instanceof L.Polygon) {
        drawnLayers.push(myLayer);
        console.info("Se ha creado un polígono");
    }
});

map.on("pm:remove", function(e) {
    drawnLayers = drawnLayers.filter(layer => layer !== e.layer);
    console.log("Se ha eliminado un polígono");
});
