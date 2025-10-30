$(document).ready(function ()
{
    $('#btnEnvioCorreo').click(function ()
    {
        $.ajax({
            url: 'envio-correo',
            type: 'POST',
            data:
            {
                xnombre: $('#nombre').val(),
                xcorreo: $('#correo').val(),
                xtitulo: $('#titulo').val(),
                xmensaje: $('#mensaje').val()
            }
        }).done(function (data)
        {
            if (data == 1)
            {
                swal("Correcto", "¡Correo enviado exitosamente!", "success")
                    .then((value) => 
                    {
                        location.reload();
                    });
            }
            else
            {
                swal("Error", "¡Ocurrio un error en el envío de correo!", "error")
                    .then((value) => 
                    {
                        location.reload();
                    });
            }
        }).always(function ()
        {
        });
    });

    $('#btnEnvioCorreoSuscripcion').click(function ()
    {
        $.ajax({
            url: 'envio-correo-suscripcion',
            type: 'POST',
            data:
            {
                xcorreo: $('#correoSuscripcion').val()
            }
        }).done(function (data)
        {
            if (data == 1)
            {
                swal("Correcto", "¡Correo enviado exitosamente!", "success")
                    .then((value) => 
                    {
                        location.reload();
                    });
            }
            else
            {
                swal("Error", "¡Ocurrio un error en el envío de correo!", "error")
                    .then((value) => 
                    {
                        location.reload();
                    });
            }
        }).always(function ()
        {
        });
    });    
});
