const map = L.map('map').setView([-15.7942, -47.8822], 4); // Brasil

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([-15.7942, -47.8822]).addTo(map)
  .bindPopup('Brasília')
  .openPopup();