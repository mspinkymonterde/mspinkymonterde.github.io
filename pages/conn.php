<?php
// Database configuration
$host = "localhost";       // XAMPP's MySQL server is hosted locally
$username = "root";        // Default XAMPP MySQL username
$password = "";            // Default XAMPP MySQL password (empty)
$dbname = "portfolio"; // Replace with your database name

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Close the connection (optional here, but recommended to close in production)
?>
