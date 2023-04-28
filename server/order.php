<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET':
            echo "GET does not send order emails.";
            break;
        case 'POST':
            $receiver = $_POST['email'];
            $subject = "Online Order";
            $body = buildMessageBody();
            $sender = "From:toby1167@gmail.com";
            if(mail($receiver, $subject, $body, $sender)){
                echo "Email sent successfully to $receiver";
            }else{
                echo "Failed while sending!";
            }
            break;
    }

    function buildMessageBody() {
        $name = $_POST['name'];
        $address = $_POST['address'];
        $suburb = $_POST['suburb'];
        $city = $_POST['city'];
        $postcode = $_POST['postcode'];
        $cartTotal = $_POST['cartTotal'];
        $shoppingCart = json_decode($_POST['shoppingCart']);

        $messageBody = "Dear $name,\n\nWe have received your online order, please check and confirm the delivery address.\nDelivery Address: $address, $suburb, $city, $postcode\n\nThe following is an order receipt for your purchase:\n\n";    

        foreach ($shoppingCart as $cartItem) {
            $linePrice = $cartItem->unit_price * $cartItem->quantity;
            $lineItem = "$cartItem->product_id | $cartItem->product_name | Quantity: $cartItem->quantity | Line Price: $linePrice\n";
            $messageBody .= $lineItem;
        } 

        $messageBody .= "\nTotal Order Price: $cartTotal";

        return $messageBody;
    }   
?>