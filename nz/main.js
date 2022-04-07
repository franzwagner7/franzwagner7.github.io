// Neuseelandreise Skript we

let lat = -39.195
let lng = 175.620
let zoom = 5
let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup('Tongariro Nationalpark')
    .openPopup();