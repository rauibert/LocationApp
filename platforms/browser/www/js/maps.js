var app = {
    inicio: function(){
        this.iniciarFastClick();
    },

    iniciarFastClick: function(){
        FastClick.attach(document.body);
    },

    dispositivoPreparado: function(){
        navigator.geolocation.getCurrentPosition(app.dibujaCoords, app.errorSolicitudLocalizacion);
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