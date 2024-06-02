<?php
// $servername = "localhost";
// $username = "root";
// $password = "1234";
// $dbname = "nonprofit_db_php";

/*

$allowed_origins = ['https://natawebdev.xyz']; // Add your allowed origins here
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

if (!in_array($origin, $allowed_origins)) {
    http_response_code(403); 
    echo json_encode(array("error" => "Invalid origin"));
    exit;
}

// Validate Content-Type header
$content_type = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '';

if ($content_type !== 'application/json') {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid Content-Type"));
    exit;
}
 */



require_once('../config.php'); 

$servername = DB_HOST;
$username = DB_USER;
$password = DB_PASS;
$dbname = DB_NAME;



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}