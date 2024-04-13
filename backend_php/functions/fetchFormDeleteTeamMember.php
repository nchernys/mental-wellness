<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "db_connection.php";

// Check if 'id' parameter is provided in the request
if (isset($_GET['id'])) {
    // Sanitize the ID to prevent SQL injection
    $id = mysqli_real_escape_string($conn, $_GET['id']);

    // Delete the team member with the provided ID
    $sql = "DELETE FROM nonprofit_team WHERE id=$id";
    if ($conn->query($sql) === TRUE) {
        // If deletion was successful, fetch the updated list of team members
        $allTeam = "SELECT id, firstname, lastname, title, email, website, about, photo FROM nonprofit_team";
        $result = $conn->query($allTeam);

        if ($result) {
            // If fetching is successful, encode the data and send it as a JSON response
            $data = $result->fetch_all(MYSQLI_ASSOC);
            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            // If there was an error fetching the data, send an appropriate error message
            echo json_encode(array("error" => "Failed to fetch team members"));
        }
    } else {
        // If the deletion query failed, send an appropriate error message
        echo json_encode(array("error" => "Failed to delete team member: " . $conn->error));
    }
} else {
    // If 'id' parameter is not provided in the request, send an appropriate error message
    echo json_encode(array("error" => "ID parameter is missing"));
}
?>