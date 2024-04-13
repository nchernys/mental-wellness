<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "db_connection.php";

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $id = mysqli_real_escape_string($conn, $id);

    $sql = "SELECT id, firstname, lastname, title, email, website, about, photo FROM nonprofit_team WHERE id=$id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($data);
    } else {
        echo json_encode(array("message" => "0 results"));
    }
}

    $conn->close();