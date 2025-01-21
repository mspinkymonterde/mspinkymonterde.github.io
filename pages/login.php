<?php
// Include the database connection file
include('conn.php');

// Start a session to manage user login state
session_start();

// Initialize error message
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capture and sanitize user input
    $username = htmlspecialchars(trim($_POST['username']));
    $password = htmlspecialchars(trim($_POST['password']));

    // Prepare and execute the query to fetch the user password
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    // Check if the user exists
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($storedPassword);
        $stmt->fetch();

        // Compare the entered password with the stored plain text password
        if ($password === $storedPassword) {
            // Successful login
            $_SESSION['loggedIn'] = true;
            $_SESSION['username'] = $username;
            header('Location: ../index.html'); // Redirect to the homepage
            exit;
        } else {
            // Invalid password
            $error = "Invalid username or password.";
        }
    } else {
        // User not found
        $error = "Invalid username or password.";
    }

    $stmt->close();
}

$conn->close();
?>


<!DOCTYPE html>
<html>
<head>
    <title>Animated Login Form</title>
    <link rel="stylesheet" type="text/css" href="../assets/css/login.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="container">
        <div class="login-content">
            <form action="login.php" method="POST">
                <h2 class="title">Welcome</h2>

                <!-- Display Error Message -->
                <?php if (!empty($error)) : ?>
                    <p style="color: red; text-align: center;"><?php echo $error; ?></p>
                <?php endif; ?>

                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <h5>Username</h5>
                        <input type="text" name="username" class="input" required>
                    </div>
                </div>
                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                        <h5>Password</h5>
                        <input type="password" name="password" class="input" required>
                    </div>
                </div>
                <a href="#">Forgot Password?</a>
                <input type="submit" class="btn" value="Login">
            </form>
        </div>
    </div>
    <script type="text/javascript" src="../assets/js/login.js"></script>
</body>
</html>
