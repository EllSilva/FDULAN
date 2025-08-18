 // Centraliza no Município do Chitato
    var map = L.map('map').setView([-7.35, 20.83], 13);

    // Camadas Google Maps
    var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
    });

    var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
    });

    var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
    });

    // Controle de camadas
    var baseMaps = {
        "🗺️ Ruas": googleStreets,
        "🌍 Satélite": googleSat,
        "🛰️ Híbrido": googleHybrid,
        "⛰️ Terreno": googleTerrain
    };
    L.control.layers(baseMaps, null, {position: 'topright'}).addTo(map);

    // Ícone personalizado
    var customIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35]
    });

    // Marcador com popup bonito
    var marker = L.marker([-7.35, 20.83], {icon: customIcon}).addTo(map);
    marker.bindPopup(
      '<div class="popup-title">Município do Chitato</div>' +
      '<div class="popup-sub">Província da Lunda-Norte, Angola</div>'
    ).openPopup();

    // Caixa de informação fixa
    var info = L.control({position: 'topleft'});
    info.onAdd = function () {
      this._div = L.DomUtil.create('div', 'info');
      this._div.innerHTML = "<h4>📍 Mapa de Chitato</h4><p>Explore a Lunda-Norte em diferentes estilos de mapa.</p>";
      return this._div;
    };
    info.addTo(map);