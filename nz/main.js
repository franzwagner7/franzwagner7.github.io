// Neuseelandreise Skript we

let zoom = 7;

let coords = [
    ETAPPEN[17].lat,
    ETAPPEN[17].lng];


/* let pop =`
    <h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}</li>
        <li><a href=${ETAPPEN[0].wikipedia}>Wikipedia</a></li>
        <li><a href=${ETAPPEN[0].github}>github</a></li>
    </ul>
    `; */

/* console.log(coords[0]);
console.log(coords.length);
console.log(`text ${lat}`);
console.log(ETAPPEN[0]) */

let startLayer = L.tileLayer.provider("Esri.WorldGrayCanvas")

let map = L.map('map', {center: coords, zoom: zoom, layers: [startLayer]});

// Layer control


let layerControl = L.control.layers({
    "Basic": startLayer,
    "Satellite": L.tileLayer.provider("Esri.WorldImagery"),
    "Terrain": L.tileLayer.provider("Esri.WorldShadedRelief"),
    "Open Street Map": L.tileLayer.provider("OpenStreetMap.Mapnik")
}).addTo(map);

layerControl.expand();

// Scale Bar, fullscreen, minimap
L.control.scale({
    imperial: false
}).addTo(map)

L.control.fullscreen().addTo(map)

let miniMap = new L.Control.MiniMap(L.tileLayer.provider("OpenTopoMap")).addTo(map);

/* L.marker([lat, lng]).addTo(map)
    .bindPopup(pop)
    .openPopup(); */

for (let etappe of ETAPPEN) {
    let pop = `
    <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}</li>
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href=${etappe.wikipedia}>Wikipedia</a></li>
        <li><a href="https://${etappe.github}.github.io/nz">github</a></li>
    </ul>
    `;

    //console.log(etappe)
    let navClass = "etappenLink";
    let mrk = L.marker(coords).addTo(map).bindPopup(pop);
    if (etappe.nr == 17) {
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell";
    }

    // Etappennavigation erweitern
    let link = `<a href="https://${etappe.github}.github.io/nz" class="${navClass}" title=${etappe.titel}>${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link
}

// DOC Hütten anzeigen
for (let hut of HUTS) {
    let pop = `
        <h3>${hut.name}</h3>
        <h4>${hut.region}</h4>
        <hr>
        <p>${hut.info}</p>
        <img src="${hut.image}" alt="Vorschaubild">
        <hr>
        <a href="${hut.link}" target="NEuseeland">Link zur Hütte</a>   
        `;
    let statusColor;
    if (hut.open == true) {
        statusColor = "green";
    } else {
        statusColor = "red";
    }
    L.circleMarker([hut.lat, hut.lng],{
        color: statusColor,
        radius: 2
    }).addTo(map).bindPopup(pop);
}