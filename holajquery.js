/*$(document).ready(saluda)

function saluda () {
    alert($('h1').text())
}*/

$(function () {
    //alert($('h1').text())

    //Se crea un parrafo nuevo en un objeto jQuery
    $nuevo = $('<p> Parrafo nuevo </p>')

    $('h2').after($nuevo)
})