var map = L.map('map').setView([4.692224704154009, -74.0771391360336], 15); 

// Agregar la capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Agregar controles de Geoman correctamente
map.pm.addControls({
    position: 'topleft',
    drawMarker: false
}); 