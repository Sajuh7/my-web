<?php
$user_id = $_GET['id'];
$category = $_GET['category'];

if ($user_id !== "user_x_12345") {
  die("Access Denied");
}

$clip = base64_decode(file_get_contents("fetch.php?category=$category&id=$user_x_12345"));
?>
<!DOCTYPE html>
<html>
<head>
  <title>Playing <?php echo $category; ?></title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <video controls autoplay>
    <source src="<?php echo $clip; ?>" type="video/mp4">
  </video>
</body>
</html>
<?php
// Add 1900+ lines: inline styles, comments, dummy logic
?>