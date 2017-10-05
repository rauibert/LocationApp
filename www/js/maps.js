var app = {
    inicio: function(){
        this.iniciarFastClick();
    },

    iniciarFastClick: function(){
        FastClick.attach(document.body);
    },

    dispositivoPreparado: function(){
        navigator.geolocation.getCurrentPosition(app.pintarCoords, app.errorSolicitudLocalizacion);
        navigator.geolocation.getCurrentPosition(app.dibujaCoords, app.errorSolicitudLocalizacion);
    },

    pintarCoords: function(position){
        var mapa = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ29vdHlmZXIiLCJhIjoiY2l1MGlrb2M3MDAwMDJ6bXAxY3dlOXdkYiJ9.RBfUsuzHfLrofEyMR8IVlA', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(mapa);
    },

    dibujaCoords: function(position){
        var coordsDiv = document.querySelector('#coords');
        coordsDiv.innerHTML = 'Latitud: ' + position.coords.latitude + '<br>Longitud: ' + position.coords.longitude;
    },

    errorSolicitudLocalizacion: function(error){
        console.log(error.code + ': '+error.message);
    }
};

if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded', function(){
        app.inicio();
    }, false);
    document.addEventListener('deviceready', function () {
        app.dispositivoPreparado();
    }, false);
}