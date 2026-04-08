<!-- ========================= -->
<!-- script.js -->
<!-- ========================= -->
<script>
// Initialize map
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Load album data
fetch('albums.json')
  .then(response => response.json())
  .then(albums => {

    albums.forEach(album => {

      let imagesHTML = album.images.map(img =>
        `<img src="images/${img}" />`
      ).join('');

      let popupContent = `
        <h3>${album.title}</h3>
        <p>${album.description}</p>
        <div class="gallery">${imagesHTML}</div>
      `;

      L.marker([album.lat, album.lng])
        .addTo(map)
        .bindPopup(popupContent);
    });

  });
</script>