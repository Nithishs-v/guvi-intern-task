<?php
$hostName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "new";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName,3307);
if (!$conn) {
    die("Something went wrong;");
}

?>