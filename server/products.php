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
    
    
    switch ($method) {
        case 'GET':
            $sql = "select * from products order by product_category, product_subcategory, product_name;"; 
            break;
        case 'POST':
            !array_key_exists('search', $_POST) ? $searchTerm = '' : $searchTerm = $_POST['search'];
            !array_key_exists('category', $_POST) ? $category = '' : $category = $_POST['category'];
            !array_key_exists('subCategory', $_POST) ? $subCategory = '' : $subCategory = $_POST['subCategory'];
            !array_key_exists('price', $_POST) ? $price = 100 : $price = $_POST['price'];
            $sql = "select * from products where product_name like '%$searchTerm%' and product_category like '%$category%' and product_subcategory like '%$subCategory%' and unit_price <= $price order by product_category, product_subcategory, product_name;";
    }
    
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