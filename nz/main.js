// Neuseelandreise Skript we

let lat = -36.832782847837784;
let lng = 175.5833761917986;
let zoom = 5;

let coords = [-39.195, 175.620];

let pop =`
    <h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}</li>
        <li><a href=${ETAPPEN[0].wikipedia}>Wikipedia</a></li>
        <li><a href=${ETAPPEN[0].github}>github</a></li>
    </ul>
    `;

/* console.log(coords[0]);
console.log(coords.length);
console.log(`text ${lat}`);
console.log(ETAPPEN[0]) */

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(pop)
    .openPopup();

for (let etappe of ETAPPEN) {
    let pop =`
    <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}</li>
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href=${etappe.wikipedia}>Wikipedia</a></li>
        <li><a href=${etappe.github}>github</a></li>
    </ul>
    `;
    L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(pop);
}