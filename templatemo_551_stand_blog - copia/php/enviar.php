<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = "Nombre: ".$name."<br> Email: $email<br> Mensaje:".$_POST['message'];

    $header= 'From: '.$email."\r\n";
    $header.= "X-Mailer: PHP/: ".phpversion()."\r\n";
    $header.= "Mime-Version: 1.0 \r\n";
    $header.= "Content-Type: text/plain";

	// if(mail('rosariocaterina7@gmail.com', $subject, $message)){
	// 	echo "Correo enviado";
	// }
    mail('rosariocaterina7@gmail.com', $subject, $message));

    header("Location:index.html")
	}
 ?>