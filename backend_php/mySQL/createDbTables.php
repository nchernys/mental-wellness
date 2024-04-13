 <?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "nonprofit_db_php";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE nonprofit_team (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(100) NOT NULL,
lastname VARCHAR(100) NOT NULL,
title VARCHAR(100),
about VARCHAR(1000),
email VARCHAR(50),
website VARCHAR(50),
photo LONGBLOB
)";

if ($conn->query($sql) === TRUE) {
  echo "Table nonprofit_team created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$conn->close();
?>