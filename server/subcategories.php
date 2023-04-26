<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $host = "localhost"; 
    $user = "uts"; 
    $password = "internet"; 
    $dbname = "grocerystore"; 
    $id = '';
    
    $con = mysqli_connect($host, $user, $password,$dbname);
    
    $method = $_SERVER['REQUEST_METHOD'];
    
    if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
    }

    !array_key_exists('topcategory', $_POST) ? $category = '' : $category = $_POST['topcategory'];
    
    $sql = "select distinct product_subcategory from products where product_category like '%$category%';"; 
    
    // run SQL statement
    $result = mysqli_query($con,$sql);
    
    // WIP - die if SQL statement failed
    if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
    }

    //WIP - puts results in JSON form
    $num_rows = mysqli_num_rows($result);
    if ($num_rows > 0 ) {
        if (!$id) echo '[';
        for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
        }
        if (!$id) echo ']';
    } else {
        echo "No results";
    }
    
    $con->close();
?>