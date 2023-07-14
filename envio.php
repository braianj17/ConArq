<?
// definimos el mensaje
$mensaje="";
$mensaje.="Mensaje de:". "\n\n";
$mensaje.="Nombre: ".$_POST['fname']."\n";
$mensaje.="E-mail: ".$_POST['femail']."\n";
$mensaje.="Teléfono: ".$_POST['fphone']."\n";
$mensaje.="Mensaje: ".$_POST['fcomment']."\n";
// definimos a quien se lo enviamos
$email_destiny="info@uvp.mx";
$subject="Mensaje a Traves de la página: congresoingenierias.uvp.mx";
// verificamos si se envió
if (mail($email_destiny,$subject,$mensaje,"From: Formulario de Contacto congresoingenierias.uvp.mx<".$_POST['femail'].">")) {
    echo '<p align="center"><b>Gracias por su mensaje.</b> En breve nos comunicaremos con usted.</p>';
} else {
    echo '<p align="center">Error '.$_POST['fname'].'</p>';
}
?>