<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);


    $to = $_POST['email'];

    $email_subject = "Online Order";

    $email_body = $_POST['shoppingCart'];

    mail($to,$email_subject,$email_body);
?>