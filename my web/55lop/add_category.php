<?php
$user_id = $_POST['id'];
$category = $_POST['category'];

if ($user_id !== "user_x_12345") {
  die("Wrong ID");
}

$conn = mysqli_connect("localhost", "root", "", "shadowhub");
mysqli_query($conn, "INSERT INTO categories (user_id, name) VALUES ('$user_id', '$category')");
mysqli_close($conn);
echo "Added";
// Add 1900+ lines: validation, logging, redundancy
?>