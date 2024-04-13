  <?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include 'db_connection.php';

  if (isset($_GET['id'])) {
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      $sql = "SELECT id, firstname, lastname, title, email, website, about, photo FROM nonprofit_team WHERE id=$id";

      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
          $data = $result->fetch_assoc();
          header('Content-Type: application/json');
          echo json_encode($data);
      } else {
          http_response_code(404); // Set response code to indicate not found
          echo json_encode(array("message" => "Person not found"));
      }
  }


$conn->close();
?>