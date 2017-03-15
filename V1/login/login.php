<?php
	$host = "localhost";
	$dbPass = "123456";
	$dbUser = "root";
	$dbName = "httptest";
	$user = $_GET['user'];
	$pass = $_GET['pass'];
	
	$conn = new mysqli($host, $dbUser, $dbPass, $dbName);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	$sql = 'SELECT * FROM users WHERE username="' . $user . '" AND password="' . $pass . '"';
	$result = $conn->query($sql);
	$numRows = $result->num_rows;
	if ($numRows > 0) {
		while($row = $result->fetch_assoc()) {
			echo $row['username'] . " " . $row['password'] . "<br>";
		}
	} else {
		echo "0 results";
	}
	$conn->close();

?>