<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "db_connection.php";


if (isset($_GET['id'])) {
// Sanitize the ID to prevent SQL injection
$id = mysqli_real_escape_string($conn, $_GET['id']);


// Sanitize other form data
$firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
$lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
$title = mysqli_real_escape_string($conn, $_POST['title']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$website = mysqli_real_escape_string($conn, $_POST['website']);
$about = mysqli_real_escape_string($conn, $_POST['about']);

    // Check if a photo is provided
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $targetDir = "../uploads/"; // Directory where uploaded files will be stored
        $targetFile = $targetDir . basename($_FILES["photo"]["name"]); // Get the file name

        if (move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile)) {
            // Construct the SQL query with the photo update
            $photoPath = "uploads/" . basename($_FILES["photo"]["name"]);
            $sql = "UPDATE nonprofit_team SET 
                firstname='$firstname', 
                lastname='$lastname', 
                title='$title', 
                email='$email', 
                website='$website', 
                about='$about', 
                photo='$photoPath'
                WHERE id=$id";
        } else {
            echo json_encode(array("message" => "Error uploading photo"));
            exit;
        }
    } else {
        // Construct the SQL query without the photo update
        $sql = "UPDATE nonprofit_team SET 
            firstname='$firstname', 
            lastname='$lastname', 
            title='$title', 
            email='$email', 
            website='$website', 
            about='$about'
            WHERE id=$id";
    }

    // Execute the SQL query
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Member updated successfully"));
    } else {
        echo json_encode(array("message" => "Error updating member: " . $conn->error));
    }
}

    