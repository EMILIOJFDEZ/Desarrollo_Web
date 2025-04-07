<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = 'Formulario Rellenado';
    $mensaje = "Nombre: " . $nombre . "<br>Email: " . $email . "<br>Mensaje:" . $_POST['mensaje'];
    $destinatario = 'emiliojfdez2004@gmail.com';

    $headers = "Content-type:text/html;charset=UTF-8";

    if (mail($destinatario, $asunto, $mensaje, $headers)) {
        echo "¡Correo enviado correctamente!";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
} else {
    echo "Lo siento, ha habido un problema con el formulario.";
}
?>