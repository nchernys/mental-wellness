  <?php

error_log("DB file");

include "db_connection.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$sql = "SELECT id, firstname, lastname, title, email, website, about, photo FROM nonprofit_team";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();

    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo json_encode(array("message" => "0 results"));
}

$conn->close();
?>