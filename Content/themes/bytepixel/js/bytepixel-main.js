var aleatorio = Math.random();
var urlActual = window.location + '';
var arrayUrl = urlActual.split("/");

//En desarrollo va el nombre de la carpeta antes del content
//document.write('<script src="' + window.location.protocol + "//" + window.location.hostname + ':44327/content/themes/bytepixel/js/bytepixel-funciones.js?version=' + aleatorio + '"></script>');
document.write('<script src="' + window.location.protocol + "//" + window.location.hostname + ':44327/content/themes/bytepixel/js/main.js?version=' + aleatorio + '"></script>');
//document.write('<script src="' + window.location.protocol + "//" + window.location.hostname + '/bytepixel/content/themes/bytepixel/js/bytepixel-funciones.js?version=' + aleatorio + '"></script>');
//document.write('<script src="' + window.location.protocol + "//" + window.location.hostname + '/bytepixel/content/themes/bytepixel/js/main.js?version=' + aleatorio + '"></script>');