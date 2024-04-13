<?php
include 'db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$response = array(); 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
    $lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $website = mysqli_real_escape_string($conn, $_POST['website']);
    $about = mysqli_real_escape_string($conn, $_POST['about']);

    // Handle file upload if present
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        // Handle successful file upload
        $targetDir = "../uploads/";
        $targetBackDir = "/backend/uploads/";
        $targetFile = $targetDir . basename($_FILES["photo"]["name"]);

        if (move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile)) {
            // File upload successful
            $photoPath = $targetBackDir . basename($_FILES["photo"]["name"]);
        } else {
            // File upload failed
            $photoPath = ""; // Set default value
        }
    } else {
        // No file uploaded
        $photoPath = ""; // Set default value
    }

    // Prepare and execute SQL statement
    $sql = "INSERT INTO nonprofit_team (firstname, lastname, title, website, email, about, photo)
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $firstname, $lastname, $title, $website, $email, $about, $photoPath);
    
    if (!$stmt->execute()) {
        $response['success'] = false;
        $response['message'] = "Error executing SQL statement: " . $stmt->error;
    } else {
        $response['success'] = true; // Corrected to true
        $response['message'] = "Team member added successfully"; // Updated success message
    }
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request method";
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>