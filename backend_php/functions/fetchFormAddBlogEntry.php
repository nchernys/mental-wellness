<?php
include 'db_connection.php';

if(isset($_FILES['image'])) {
    $targetDir = "uploads/"; // Directory where uploaded files will be stored
    $targetFile = $targetDir . basename($_FILES["image"]["name"]); // Get the file name

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {


// Retrieve form data
$date = mysqli_real_escape_string($conn, $_POST['date']);
$title = mysqli_real_escape_string($conn, $_POST['title']);
$author = mysqli_real_escape_string($conn, $_POST['author']);
$text = mysqli_real_escape_string($conn, $_POST['text']);

// Construct SQL query
$sql = "INSERT INTO nonprofit_blog (date, title, author, text, image)
VALUES ('$date', '$title', '$author', '$text', '$targetFile')";

// Execute SQL query
if ($conn->query($sql) === TRUE) {
            echo "Data uploaded successfully";
        } else {
            echo "Error uploading data: " . $conn->error;
        }
    } else {
        echo "Error uploading image";
    }
}

$conn->close();