
  // Função para inicializar o mapa
  function initMap() {
    // Coordenadas do centro do mapa
    var center = { lat: -34.397, lng: 150.644 };
    // Opções do mapa
    var mapOptions = {
      zoom: 8, // Zoom inicial
      center: center // Centro do mapa
    };
    // Criar novo mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
