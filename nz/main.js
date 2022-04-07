// Neuseelandreise Skript we

let lat = -39.195;
let lng = 175.620;
let zoom = 5;

let coords = [-39.195, 175.620];

let pop =`
    <h3>Tongariro Nationalpark</h3>
    <ul>
        <li>geogr. Länge: ${lng}</li>
        <li>geogr. Breite: ${lat}</li>
    </ul>
    `

console.log(coords[0]);
console.log(coords.length);
console.log(`text ${lat}`);

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(pop)
    .openPopup();